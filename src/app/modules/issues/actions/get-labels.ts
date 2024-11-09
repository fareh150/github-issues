import { GitHubLabel } from "../interfaces/github-label.interface";

export const getLabels = async (): Promise<GitHubLabel[]> =>
{
  try {
    const resp = await fetch(`https://api.github.com/repos/angular/angular/labels`);

    if (!resp.ok)
    {
      throw "Can't load labels";
    }

    const labels: GitHubLabel[] = await resp.json();
    console.log({ labels });

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
}
