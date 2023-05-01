import { atomsWithQuery } from 'jotai-tanstack-query'
import { octokit, GITHUB_API_HEADERS } from '../api/octokit'

const GITHUB_GISTS_ID = '4f991015ac388dcc0cca0e6d8d437215'
const GITHUB_GISTS_FILE_NAME = 'gistfile1.txt'

export const [participantsAtom] = atomsWithQuery(() => ({
  queryKey: ['about'],
  queryFn: async () =>
    octokit
      .request(`GET /gists/${GITHUB_GISTS_ID}`, {
        gist_id: GITHUB_GISTS_ID,
        headers: GITHUB_API_HEADERS
      })
      .then((res) => JSON.parse(res.data.files[GITHUB_GISTS_FILE_NAME].content))
}))
