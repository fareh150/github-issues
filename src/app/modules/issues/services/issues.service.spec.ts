import { TestBed } from "@angular/core/testing";
import { IssuesService } from "./issues.service";
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { State } from "../interfaces";

describe('IssuesService', () =>
{
  let service: IssuesService;
  const queryClient = new QueryClient();

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      teardown: {
        destroyAfterEach: false
      },
      providers: [
        provideTanStackQuery(queryClient)
      ]
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });

  it('should load labels', async () =>
  {
    const {data} = await service.labelsQuery.refetch();

    expect(data?.length).toBeGreaterThan(0);

    const [label] = data!;
    expect(typeof label.color).toBe('string');
    expect(typeof label.name).toBe('string');
    expect(typeof label.url).toBe('string');
  })

  it('Shoud set selected state', async() =>
  {
    service.showIssuesByState(State.Open);
    expect(service.selectedState()).toBe(State.Open);

    const { data } = await service.issuesQuery.refetch();

    data?.forEach(issue =>
    {
      expect(issue.state).toBe(State.Open);
    })

    service.showIssuesByState(State.Closed);
    expect(service.selectedState()).toBe(State.Closed);
  })

  it('Should set selected labels', async() =>
  {
    service.toggleLabel('Accessibility');
    expect(service.selectedLabels().has('Accessibility')).toBeTrue();

    service.toggleLabel('Accessibility');
    expect(service.selectedLabels().has('Accessibility')).toBeFalse();
  })

  it('should set selectedLabels and get issues by labels', async() =>
  {
    service.toggleLabel('Accessibility');
    service.toggleLabel('Bug');

    const { data } = await service.issuesQuery.refetch();

    data?.forEach(issue =>
    {
      expect(issue.labels.some(label => label.name === 'Accessibility' || label.name === 'Bug')).toBeTrue();
    })
  })
});
