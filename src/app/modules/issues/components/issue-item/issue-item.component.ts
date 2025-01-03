import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GithubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>()
  issueService = inject(IssueService);

  get isOpen()
  {
    return this.issue().state === State.Open;
  }

  prefetchData()
  {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }

}
