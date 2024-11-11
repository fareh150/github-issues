import { sleep } from "@helpers/sleep";
import { environment } from "src/environments/environment.development";
import { GithubIssue } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async (issueNumber:string): Promise<GithubIssue> =>
{
  await sleep(1500);
  try {
    const resp = await fetch(
      `${BASE_URL}/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!resp.ok)
    {
      throw "Can't load issue";
    }

    const issue: GithubIssue = await resp.json();

    return issue;
  } catch (error) {
    throw "Can't load issues";
  }
}
