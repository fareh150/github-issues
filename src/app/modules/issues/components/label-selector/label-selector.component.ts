import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';

@Component({
  selector: 'issues-label-selector',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './label-selector.component.html',
})
export class LabelSelectorComponent {
  labels = input.required<GitHubLabel[]>();
}
