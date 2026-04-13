import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/lenguage.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    interest: '',
    message: '',
  };

  isSending = signal(false);
  submitStatus = signal<'success' | 'error' | null>(null);

  private readonly targetEmail = 'jeanpoolariass2017@gmail.com';

  constructor(public langService: LanguageService) {}

  async submitContactForm() {
    if (this.isSending()) {
      return;
    }

    this.isSending.set(true);
    this.submitStatus.set(null);

    const body = new FormData();
    body.append('name', this.formData.name);
    body.append('email', this.formData.email);
    body.append('interest', this.formData.interest);
    body.append('message', this.formData.message);
    body.append('_subject', `Nuevo contacto de ${this.formData.name}`);
    body.append('_captcha', 'false');
    body.append('_template', 'table');

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${this.targetEmail}`,
        {
          method: 'POST',
          body,
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      this.submitStatus.set('success');
      this.formData = {
        name: '',
        email: '',
        interest: '',
        message: '',
      };
    } catch (error) {
      console.error(error);
      this.submitStatus.set('error');
    } finally {
      this.isSending.set(false);
    }
  }

  getStatusMessage() {
    if (this.submitStatus() === 'success') {
      return this.langService.currentLang() === 'es'
        ? 'Mensaje enviado. Nos contactaremos en el menor tiempo posible 🙌'
        : 'Message sent. We contact you in the minimal time possible 🙌';
    }

    if (this.submitStatus() === 'error') {
      return this.langService.currentLang() === 'es'
        ? 'No se pudo enviar el mensaje.'
        : 'The message could not be sent.';
    }

    return '';
  }
}
