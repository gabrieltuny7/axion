import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type FormModel = {
  name: string;
  email: string;
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
  sending = false;
  sent = false;

  model: FormModel = {
    name: '',
    email: '',
    phone: '',
    subject: 'Orçamento',
    message: ''
  };

  resetForm() {
    this.model = { name: '', email: '', phone: '', subject: 'Orçamento', message: '' };
    this.sent = false;
    this.sending = false;
  }

  onSubmit(form: any) {
    if (!form.valid) {
      // marca tudo como tocado para exibir erros
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      return;
    }
    // simulação de envio (demo)
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.sent = true;
      form.resetForm({ subject: 'Orçamento' });
    }, 900);
  }
}
