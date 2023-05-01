import { Octokit } from '@octokit/core'

export const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
});

export const GITHUB_API_HEADERS = {
  'X-GitHub-Api-Version': '2022-11-28'
}
