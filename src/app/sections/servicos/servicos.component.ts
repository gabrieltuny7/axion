import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2 class="title">Serviços</h2>
    <div class="grid">
      <article>
        <h3>Automação Comercial</h3>
        <p>Integração de PDV, periféricos, redes e monitoramento. Otimize processos e reduza erros.</p>
      </article>
      <article>
        <h3>Automação Residencial</h3>
        <p>Iluminação inteligente, climatização, segurança e controle por app — conforto e eficiência.</p>
      </article>
      <article>
        <h3>Desenvolvimento de Sites</h3>
        <p>Sites institucionais rápidos, responsivos e prontos para SEO — destaque sua marca.</p>
      </article>
      <article>
        <h3>Suporte Técnico</h3>
        <p>Atendimento ágil remoto e presencial, manutenção preventiva e corretiva.</p>
      </article>
    </div>
  </div>
  `,
  styles:[`
    .container{max-width:1100px; margin:0 auto; padding:0 20px}
    .title{font-size:32px; margin-bottom:18px}
    .grid{display:grid; grid-template-columns: repeat(4, 1fr); gap:16px}
    article{padding:16px; border:1px solid rgba(122,228,255,.25); border-radius:16px; background: linear-gradient(180deg, rgba(10,15,26,.6), rgba(15,23,38,.6));
      box-shadow: 0 0 24px rgba(0,209,255,.06);}
    article h3{margin:0 0 6px}
    article p{color:var(--ax-muted)}
    @media (max-width: 1000px){ .grid{grid-template-columns: repeat(2, 1fr)} }
    @media (max-width: 600px){ .grid{grid-template-columns: 1fr} }
  `]
})
export class ServicosComponent {}
