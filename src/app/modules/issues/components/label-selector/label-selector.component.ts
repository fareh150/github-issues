import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { IssuesService } from '../../services';

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
  issuesService = inject(IssuesService);

  isSelected(labelName: string)
  {
    return this.issuesService.selectedLabels().has(labelName); // regresa boolean
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
