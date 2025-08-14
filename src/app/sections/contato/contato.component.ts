import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="container">
    <h2 class="title">Entre em Contato</h2>
    <p class="desc">Conte um pouco sobre o seu projeto. Responderemos em breve.</p>

    <form class="form" (submit)="onSubmit($event)">
      <input type="text" placeholder="Seu nome" required>
      <input type="email" placeholder="Seu e-mail" required>
      <textarea rows="5" placeholder="Mensagem"></textarea>
      <button type="submit" class="btn">Enviar</button>
    </form>
  </div>
  `,
  styles:[`
    .container{max-width:800px; margin:0 auto; padding:0 20px}
    .title{font-size:32px; margin-bottom:8px}
    .desc{color:var(--ax-muted); margin-bottom:16px}
    .form{display:grid; gap:12px}
    input, textarea{
      background:rgba(10,15,26,.6); color:var(--ax-text);
      border:1px solid rgba(122,228,255,.25); border-radius:12px; padding:12px;
    }
    .btn{justify-self:start; padding:12px 18px; border-radius:12px; border:1px solid rgba(122,228,255,.4)}
  `]
})
export class ContatoComponent {
  onSubmit(e: Event){
    e.preventDefault();
    alert('Mensagem enviada (demo).');
  }
}
