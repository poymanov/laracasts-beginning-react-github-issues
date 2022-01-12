import {IssueUser} from "../../interfaces/issueUser.interface";

export interface IssueCommentProps {
    user: IssueUser,
    createdAt: string,
    body: string
}