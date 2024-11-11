import { sleep } from "@helpers/sleep";
import { environment } from "src/environments/environment.development";
import { GithubIssue } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async (): Promise<GithubIssue[]> =>
{
  await sleep(1500);
  try {
    const resp = await fetch(
      `${BASE_URL}/issues`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!resp.ok)
    {
      throw "Can't load issues";
    }

    const issues: GithubIssue[] = await resp.json();
    console.log({ issues });

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
}
