import { Octokit } from '@octokit/core'

export const octokit = new Octokit()

export const GITHUB_API_HEADERS = {
  'X-GitHub-Api-Version': '2022-11-28'
}
