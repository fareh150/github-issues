import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issueNumber = signal<string|null>(null)
  issueQuery = injectQuery(() =>(
    {
      queryKey: ['issue'],
      queryFn: () => getIssueByNumber(this.issueNumber()!),
      //condicional para habilitar o deshabilitar la consulta
      enable: this.issueNumber() !== null
    }));
}
