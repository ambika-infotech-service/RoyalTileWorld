import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { AnimateOnScroll } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, AnimateOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly submitted = signal(false);
  protected readonly submitSuccess = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      // Static site – just show success message
      this.submitSuccess.set(true);
      this.form.reset();
      this.submitted.set(false);
    }
  }
}

