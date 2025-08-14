import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from '../../sections/inicio/inicio.component';
import { ServicosComponent } from '../../sections/servicos/servicos.component';
import { EquipeComponent } from '../../sections/equipe/equipe.component';
import { ListaServicosComponent } from '../../sections/lista-servicos/lista-servicos.component';
import { ContatoComponent } from '../../sections/contato/contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InicioComponent, ServicosComponent, EquipeComponent, ListaServicosComponent, ContatoComponent],
  template: `
    <section id="inicio"><app-inicio></app-inicio></section>
    <section id="servicos"><app-servicos></app-servicos></section>
    <section id="equipe"><app-equipe></app-equipe></section>
    <section id="lista-servicos"><app-lista-servicos></app-lista-servicos></section>
    <section id="contato"><app-contato></app-contato></section>
  `,
  styles:[`
    section{ padding: 72px 0; border-bottom:1px solid rgba(122,228,255,.08) }
  `]
})
export class HomeComponent {}
