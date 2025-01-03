import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelSelectorComponent } from "../../components/label-selector/label-selector.component";
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { State } from '../../interfaces';

@Component({
  selector: 'issues-list-page',
  standalone: true,
  imports: [
    LabelSelectorComponent,
    IssueItemComponent
],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {
  issuesStates = State;
  issuesService = inject(IssuesService);

  get labelsQuery()
  {
    return this.issuesService.labelsQuery;
  }
  get issuesQuery()
  {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState = this.issuesStates.All)
  {
    this.issuesService.showIssuesByState(newState);
  }
}
