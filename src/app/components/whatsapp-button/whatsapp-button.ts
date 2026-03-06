import { ChangeDetectionStrategy, Component } from '@angular/core';

const MESSAGE = encodeURIComponent('Hi I am interested in the tiles collection.');

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  readonly href = `https://wa.me/?text=${MESSAGE}`;
}
