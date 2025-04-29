import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { Quizz } from '../../interfaces/quizz.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-quizz',
  imports: [MatCardModule, MatButtonModule, FormsModule, MatRadioModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzComponent {
  public readonly quizz = input.required<Quizz>();
  public readonly stepsCount = computed(() => this.quizz().questions.length);
  public readonly currentStepIndex = signal(1);
  public readonly currentStep = computed(() => {
    const currentIndex = this.currentStepIndex() - 1;
    return this.quizz().questions[currentIndex];
  });
  public readonly userAnswer = signal<boolean | undefined>(undefined);
  public readonly score = signal(0);
  public readonly showResult = signal(false);

  public submitAnswer() {
    if (this.userAnswer()) {
      this.score.update((score) => score + 1);
    }
    if (this.currentStepIndex() === this.stepsCount()) {
      this.showResult.set(true);
    } else {
      this.currentStepIndex.update((index) => index + 1);
    }
    this.userAnswer.set(undefined);
  }

  public resetForm() {
    this.userAnswer.set(undefined);
    this.score.set(0);
    this.currentStepIndex.set(1);
    this.showResult.set(false);
  }
}
