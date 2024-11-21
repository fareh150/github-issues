import { TestBed } from "@angular/core/testing";
import { IssuesService } from "./issues.service";
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';

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
});
