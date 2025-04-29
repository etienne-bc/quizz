import { ChangeDetectionStrategy, Component } from '@angular/core';
import quizz from './quizz.json';
import { Quizz } from './interfaces/quizz.interface';
import { QuizzComponent } from './components/quizz/quizz.component';

@Component({
  selector: 'app-root',
  imports: [QuizzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly quizz: Quizz = quizz;
}
