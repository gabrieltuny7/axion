import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <header class="nav">
    <div class="brand">
      <img src="assets/axion-logo.png" alt="Axion Systems" />
      <span class="brand-text">AXION <small>Systems</small></span>
    </div>

    <button class="hamb" (click)="open = !open" aria-label="Menu">☰</button>

    <nav [class.open]="open">
      <a [routerLink]="['/']" fragment="inicio" (click)="open=false">Início</a>
      <a [routerLink]="['/']" fragment="servicos" (click)="open=false">Serviços</a>
      <a [routerLink]="['/']" fragment="equipe" (click)="open=false">Equipe</a>
      <a [routerLink]="['/']" fragment="lista-servicos" (click)="open=false">Lista de Serviços</a>
      <a [routerLink]="['/']" fragment="contato" (click)="open=false">Entre em Contato</a>
    </nav>
  </header>
  `,
  styles: [`
    .nav{
      position: sticky; top:0; z-index:1000;
      display:flex; align-items:center; justify-content:space-between;
      padding: 10px 20px; background: var(--ax-surface); border-bottom:1px solid rgba(122,228,255,.2);
      box-shadow: 0 2px 20px rgba(0,209,255,.05);
    }
    .brand{display:flex; align-items:center; gap:10px}
    .brand img{height:36px; filter: drop-shadow(0 0 6px var(--ax-primary))}
    .brand-text{font-weight:700; letter-spacing:.5px}
    .brand-text small{font-weight:400; opacity:.8}
    nav{display:flex; gap:18px}
    nav a{text-decoration:none; font-weight:500}
    nav a:hover{ text-shadow:0 0 8px var(--ax-primary) }

    .hamb{display:none; font-size:22px; background:transparent; border:0; color:var(--ax-text)}
    @media (max-width: 900px){
      .hamb{display:block}
      nav{ position:absolute; top:60px; right:20px; padding:12px; background:var(--ax-surface);
           border:1px solid rgba(122,228,255,.25); border-radius:14px; display:none; flex-direction:column; }
      nav.open{display:flex}
    }
  `]
})
export class NavbarComponent {
  open = false;
}
