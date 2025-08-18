// lista-servicos.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Em alguns navegadores, hash/restore de sessão pode disparar um toggle inicial.
    // Forçamos o estado inicial: todos fechados.
    requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLDetailsElement>('details.item')
        .forEach(d => (d.open = false));
    });
  }
}
