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
  imports: [
    CommonModule,
    InicioComponent,
    ServicosComponent,
    EquipeComponent,
    ListaServicosComponent,
    ContatoComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
