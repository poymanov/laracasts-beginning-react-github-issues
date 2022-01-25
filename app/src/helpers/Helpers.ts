export const getGithubApiUrl = () => process.env.REACT_APP_GITHUB_API_URL;

export const getGithubAuthor = () => process.env.REACT_APP_GITHUB_AUTHOR;

export const getGithubRepository = () => process.env.REACT_APP_GITHUB_REPOSITORY;

export const getIssuesByStateUrl = (filter: string): string => {
    const githubApiUrl = getGithubApiUrl();
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `${githubApiUrl}/repos/${githubAuthor}/${githubRepository}/issues?per_page=10&state=${filter}`;
}

export const getRepositoryUrl = (): string => {
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `https://github.com/${githubAuthor}/${githubRepository}`;
}

export const getOpenIssuesUrl = (): string => {
    const githubApiUrl = getGithubApiUrl();
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `${githubApiUrl}/search/issues?q=repo:${githubAuthor}/${githubRepository}+type:issue+state:open&per_page=1`;
}

export const getClosedIssuesUrl = (): string => {
    const githubApiUrl = getGithubApiUrl();
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `${githubApiUrl}/search/issues?q=repo:${githubAuthor}/${githubRepository}+type:issue+state:closed&per_page=1`;
}

export const getIssuesCommentsByNumberUrl = (number: number): string => {
    const githubApiUrl = getGithubApiUrl();
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `${githubApiUrl}/repos/${githubAuthor}/${githubRepository}/issues/${number}/comments`;
}

export const getIssueByNumberUrl = (number: string): string => {
    const githubApiUrl = getGithubApiUrl();
    const githubAuthor = getGithubAuthor();
    const githubRepository = getGithubRepository();

    return `${githubApiUrl}/repos/${githubAuthor}/${githubRepository}/issues/${number}`;
}