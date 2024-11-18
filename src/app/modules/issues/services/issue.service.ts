import { Injectable, signal } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions';
import { getIssueCommentsByNumber } from '../actions/get-issue-comments-by-number.action';
import { GithubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issueNumber = signal<string|null>(null)
  private queryClient = injectQueryClient();

  issueQuery = injectQuery(() =>(
    {
      enabled: this.issueNumber() !== null,
      queryKey: ['issue', this.issueNumber()],
      queryFn: () => getIssueByNumber(this.issueNumber()!),
      staleTime: 1000 * 60 * 5 // 5 minutos
    }));

  issueCommentsQuery = injectQuery(() => (
    {
      enabled: this.issueNumber() !== null,
      queryKey: ['issue', this.issueNumber(), 'comments'],
      queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    }
    ))

  setIssueNumber = (issueId: string) =>
  {
    this.issueNumber.set(issueId);
  }

  prefetchIssue(issueId: string)
  {
    this.queryClient.prefetchQuery(
    {
      queryKey: ['issue', issueId], // mismo tipo de datos que el queryKey de issueQuery
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5 // 5 minutos
    })
  }

  setIssueData(issue: GithubIssue)
  {
    this.queryClient.setQueryData(
      ['issue', issue.number.toString()], //key que queremos estableser/ to string por que consultamos como string
      issue, // data que queremos establecer
      {
        updatedAt: Date.now() + 1000 * 60, // 1 minuto
      } // forma de poner staleTime con setQueryData
    )
  }
}
