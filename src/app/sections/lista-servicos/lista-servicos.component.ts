import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-servicos',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h2 class="title">Lista de Serviços</h2>
    <ul class="list">
      <li>Instalação e configuração de sistemas de automação residencial</li>
      <li>Integração de PDV, impressoras fiscais e balanças</li>
      <li>Projetos de rede cabeada e Wi-Fi profissional</li>
      <li>Criação de sites institucionais e landing pages</li>
      <li>Monitoramento, backup e suporte remoto</li>
    </ul>
  </div>
  `,
  styles:[`
    .container{max-width:1100px; margin:0 auto; padding:0 20px}
    .title{font-size:32px; margin-bottom:8px}
    .list{display:grid; gap:10px; padding-left:18px}
    .list li{padding-left:6px}
  `]
})
export class ListaServicosComponent {}
