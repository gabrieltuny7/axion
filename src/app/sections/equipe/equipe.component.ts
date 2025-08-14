import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2 class="title">Equipe</h2>
    <p class="desc">Profissionais com experiência em automação, redes e desenvolvimento web.</p>
    <div class="cards">
      <div class="card"><h4>Especialista em Automação</h4><p>Integrações, IoT, protocolos e cenários inteligentes.</p></div>
      <div class="card"><h4>Dev Front/Back</h4><p>Sites e APIs modernas, performáticas e seguras.</p></div>
      <div class="card"><h4>Suporte & Infra</h4><p>Atendimento, manutenção e monitoramento proativo.</p></div>
    </div>
  </div>
  `,
  styles:[`
    .container{max-width:1100px; margin:0 auto; padding:0 20px}
    .title{font-size:32px; margin-bottom:8px}
    .desc{color:var(--ax-muted); margin-bottom:16px}
    .cards{display:grid; gap:16px; grid-template-columns: repeat(3,1fr)}
    .card{padding:16px; border-radius:16px; border:1px solid rgba(122,228,255,.25)}
    .card h4{margin:0 0 6px}
    .card p{color:var(--ax-muted)}
    @media (max-width: 900px){ .cards{grid-template-columns:1fr} }
  `]
})
export class EquipeComponent {}
