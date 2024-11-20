import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  selectedState = signal<State>(State.All);

  selectedLabels = signal(new Set<string>());

  labelsQuery = injectQuery(() =>(
  {
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() =>(
  {
    queryKey:
    [
      'issues',
      {
        state: this.selectedState(),
      }
    ],
    queryFn: () => getIssues(this.selectedState()),
  }));

  showIssuesByState(state: State)
  {
    this.selectedState.set(state);
  }

  toggleLabel(label: string)
  {
    const labels = this.selectedLabels();
    if(labels.has(label))
    {
      labels.delete(label);
    }
    else
    {
      labels.add(label);
    }
    this.selectedLabels.set(new Set(labels));
  }
}
