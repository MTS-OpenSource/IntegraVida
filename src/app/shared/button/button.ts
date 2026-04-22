import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass], // 👈 agrega esto
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() text: string = 'Click me';
  @Input() type: string = 'primary';
  @Output() pressed = new EventEmitter<void>();

  onClick(): void {
    this.pressed.emit();
  }
}
