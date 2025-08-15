import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  scrolled = false;
  activeSection: string = 'inicio';
  private observer?: IntersectionObserver;

  closeMenu(){ this.menuOpen = false; }

  @HostListener('window:scroll')
  onScroll(){ this.scrolled = window.scrollY > 6; }

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
}
