import { Injectable, signal } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions';
import { getIssueCommentsByNumber } from '../actions/get-issue-comments-by-number.action';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issueNumber = signal<string|null>(null)
  private queryClient = injectQueryClient();

  issueQuery = injectQuery(() =>(
    {
      queryKey: ['issue', this.issueNumber()],
      queryFn: () => getIssueByNumber(this.issueNumber()!),
      enable: this.issueNumber() !== null
    }));

  issueCommentsQuery = injectQuery(() => (
    {
      queryKey: ['issue', this.issueNumber(), 'comments'],
      queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
      enable: this.issueNumber() !== null
    }
    ))

  setIssueNumber = (issueId: string) =>
  {
    this.issueNumber.set(issueId);
  }

  prefetchIssue( issueId: string )
  {
    this.queryClient.prefetchQuery(
    {
      queryKey: ['issue', issueId], // mismo tipo de datos que el queryKey de issueQuery
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5 // 5 minutos
    })
  }
}
