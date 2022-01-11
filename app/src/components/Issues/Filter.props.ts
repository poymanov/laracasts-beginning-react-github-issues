import {IssuesOpen} from "../../interfaces/issuesOpen.interface";
import {IssuesClosed} from "../../interfaces/issuesClosed.interface";

export interface FilterProps {
    filter: string,
    setFilter: (filter: string) => void,
    isSuccessIssuesOpen: boolean,
    isSuccessIssuesClosed: boolean,
    issuesOpen: IssuesOpen | undefined,
    issuesClosed?: IssuesClosed | undefined
}