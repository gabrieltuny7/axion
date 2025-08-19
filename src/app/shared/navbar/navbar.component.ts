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
  private readonly hysteresis = 16; // px

   constructor(private router: Router) {}

  closeMenu(){ this.menuOpen = false; }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    // entra no modo compacto só quando passa do limiar; sai apenas quando volta totalmente ao topo
    if (!this.scrolled && y > this.hysteresis) this.scrolled = true;
    else if (this.scrolled && y < 2) this.scrolled = false;
  }


  ngAfterViewInit(): void {
    const ids = ['inicio','servicos','equipe','lista-servicos','contato'];
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) this.activeSection = (e.target as HTMLElement).id;
      });
    }, { root: null, rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

    // Navegação pelos <select>
  onSelectNavigate(ev: Event) {
    const fragment = (ev.target as HTMLSelectElement).value;
    if (!fragment) return;
    this.closeMenu?.();
    this.router.navigate(['/'], { fragment });
  }
  onComingSoon() { alert('Disponível em breve'); }
  onComingSoonClick() { alert('Disponível em breve'); }
  
}
