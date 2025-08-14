import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container hero">
    <div class="left">
      <h1 class="glow">Automação & Tecnologia para empresas e residências</h1>
      <p>Na <strong>Axion Systems</strong> entregamos soluções de
      <em>automação comercial e residencial</em>, <em>desenvolvimento de sites</em> e
      <em>suporte técnico</em> com foco em desempenho, segurança e experiência do usuário.</p>
      <div class="cta">
        <a href="#servicos" class="btn">Conheça nossos serviços</a>
        <a href="#contato" class="btn ghost">Fale conosco</a>
      </div>
    </div>
    <div class="right">
      <img src="assets/axion-logo.png" alt="Axion Systems">
    </div>
  </div>
  `,
  styles:[`
    .container{max-width:1100px; margin:0 auto; padding:0 20px; display:grid; gap:36px; grid-template-columns: 1.2fr .8fr; align-items:center}
    .hero h1{font-size: clamp(28px, 5vw, 44px); line-height:1.1; margin:0 0 12px}
    .hero p{font-size: clamp(16px, 2.2vw, 18px); color: var(--ax-muted)}
    .right img{width: 260px; filter: drop-shadow(0 0 10px var(--ax-primary))}
    .cta{display:flex; gap:12px; margin-top:18px}
    .btn{padding:12px 18px; border-radius:12px; border:1px solid rgba(122,228,255,.4); text-decoration:none; font-weight:600}
    .btn:hover{box-shadow:0 0 18px rgba(0,209,255,.25)}
    .ghost{background:transparent}
    @media (max-width:900px){ .container{grid-template-columns:1fr; text-align:center} .right img{margin:0 auto} }
  `]
})
export class InicioComponent {}
