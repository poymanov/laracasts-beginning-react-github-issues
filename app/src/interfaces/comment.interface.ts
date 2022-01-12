import {IssueUser} from "./issueUser.interface";

export interface IComment {
    body: string,
    user: IssueUser,
    created_at: string
}