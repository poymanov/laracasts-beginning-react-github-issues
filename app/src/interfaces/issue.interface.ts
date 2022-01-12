import {IssueUser} from "./issueUser.interface";

export interface Issue {
    title: string,
    number: number,
    comments: number,
    created_at: string,
    user: IssueUser,
    state: string,
    body: string
}