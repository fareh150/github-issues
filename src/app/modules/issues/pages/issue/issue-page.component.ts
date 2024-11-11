import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './issue-page.component.html',
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  issueNumber = toSignal(
    this.route.paramMap
    .pipe(
      map( params => params.get('number') ?? '' ),
      tap(console.log)

    )
  )
}
