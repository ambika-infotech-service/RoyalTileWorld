import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappButton } from './whatsapp-button';

describe('WhatsappButton', () => {
  let component: WhatsappButton;
  let fixture: ComponentFixture<WhatsappButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappButton],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
