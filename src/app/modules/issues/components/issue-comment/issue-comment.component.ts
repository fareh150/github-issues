import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubIssue } from '../../interfaces';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
