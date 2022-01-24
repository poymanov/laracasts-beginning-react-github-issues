import {IssueUser} from "../../../interfaces/issueUser.interface";

export interface CommentProps {
    user: IssueUser,
    createdAt: string,
    body: string
}