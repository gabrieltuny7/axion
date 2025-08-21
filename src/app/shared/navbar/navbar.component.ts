import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  scrolled = false;
  activeSection: string = 'inicio';
  private observer?: IntersectionObserver;
  // ADICIONAR (para suavizar scroll e evitar jitter)
  private lastKnownScrollY = 0;
  private ticking = false;
  private compact = false; // estado interno para histerese


  constructor(private router: Router) {} // Construtor da classe para o roteamento

  closeMenu(){ this.menuOpen = false; }

  @HostListener('window:scroll')
  onScroll(){
    this.lastKnownScrollY = window.scrollY || 0;
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => {
        const y = this.lastKnownScrollY;

        // Histerese: liga "compact" acima de 96px, desliga abaixo de 64px
        if (!this.compact && y > 96) {
          this.compact = true;
          this.scrolled = true;
        } else if (this.compact && y < 64) {
          this.compact = false;
          this.scrolled = false;
        }

        this.ticking = false;
      });
    }
  }

  ngAfterViewInit(): void {
  const ids = ['inicio', 'servicos', 'equipe', 'lista-servicos', 'contato'];

  // Observa as seções para marcar a ativa na navbar
  this.observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        this.activeSection = (e.target as HTMLElement).id;
      }
    }
  }, {
    root: null,
    rootMargin: '0px 0px -55% 0px', // considera metade inferior da viewport para troca
    threshold: 0.25                  // precisa de 25% visível para considerar "ativa"
  });

  // Começa a observar cada seção declarada
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) this.observer!.observe(el);
  });

  // Ajusta o estado visual inicial da barra (compact/scrolled) conforme posição atual
  requestAnimationFrame(() => this.onScroll());
}


  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  // Navegação pelos <select> do menu
onSelectNavigate(ev: Event) {
  const fragment = (ev.target as HTMLSelectElement).value;
  if (!fragment) return;
  // Fecha o menu (se estiver aberto no mobile) e navega para a âncora
  this.menuOpen = false;
  this.router.navigate(['/'], { fragment });
}

// Botões/itens marcados como "em breve"
onComingSoon() { alert('Disponível em breve'); }
onComingSoonClick() { alert('Disponível em breve'); }

}
