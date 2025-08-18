// contato.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

type FormModel = {
  name: string;
  email?: string;
  phone?: string;
  subject: string;
  message: string;
};

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  model: FormModel = {
    name: '',
    email: '',
    phone: '',
    subject: 'Orçamento',
    message: ''
  };

  sending = false;
  sent = false;

  private readonly whatsappNumber = '5562981849168'; // 55 (BR) + 62 + 98184-9168

  onSubmit(form: NgForm) {
    if (!form.valid) {
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      return;
    }

    this.sending = true;

    // Monta o corpo exatamente no formato solicitado
    const email = this.model.email?.trim() || '-';
    const phone = this.model.phone?.trim() || '-';
    const text =
      `*Nome:* ${this.model.name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Assunto:* ${this.model.subject}\n` +
      `*Mensagem:*\n${this.model.message}`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Abre o WhatsApp em nova aba/janela
    window.open(url, '_blank');

    // finaliza o estado de envio
    this.sending = false;
    this.sent = true;
    this.resetForm();
  }

  resetForm() {
    this.model = {
      name: '',
      email: '',
      phone: '',
      subject: 'Orçamento',
      message: ''
    };
  }
}
