import { environment } from "src/environments/environment";
import { getIssueCommentsByNumber } from "./get-issue-comments-by-number.action";

const issueNumber = '123'
const mockComments: any[] = [
  {
    id: 1,
    body: 'Comment 1',
    user: { login: 'user1' },
  },
  {
    id: 2,
    body: 'Comment 2',
    user: { login: 'user2' },
  },
]

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

// describe('getIssueComments', () =>
// {
//   it('Should fetch issue comments successfully', async () =>
//   {
//     const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`
//     const commentsResponse =  new Response(JSON.stringify(mockComments),
//     {
//       status: 200,
//       statusText: 'OK',
//     })

//     spyOn(window, 'fetch').and.resolveTo(commentsResponse)

//     const comments = await getIssueCommentsByNumber(issueNumber)

//     expect(window.fetch).toHaveBeenCalledWith(requestURL, { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } })
//   })

//   it('Should throw an error if the response is not ok', async () =>
//   {
//     const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`
//     const commentsResponse =  new Response(null,
//     {
//       status: 404,
//       statusText: 'Not Found',
//     })

//     spyOn(window, 'fetch').and.resolveTo(commentsResponse)

//     try
//     {
//       await getIssueCommentsByNumber(issueNumber)
//     } catch (error)
//     {
//       expect(error).toBe("Can't load issues")
//     }

//     expect(window.fetch).toHaveBeenCalledWith(requestURL, { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } })
//   })
// })
