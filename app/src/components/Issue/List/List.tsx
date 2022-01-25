import {useQuery} from 'react-query';
import {FC, useState} from 'react';
import Filter from '../Filter/Filter';
import Item from '../Item/Item/Item';
import {Issue} from "../../../interfaces/issue.interface";
import {IssuesOpen} from "../../../interfaces/issuesOpen.interface";
import {IssuesClosed} from "../../../interfaces/issuesClosed.interface";
import styles from './List.module.css';
import {getClosedIssuesUrl, getGithubAuthor, getGithubRepository, getIssuesByStateUrl, getOpenIssuesUrl, getRepositoryUrl} from "../../../helpers/Helpers";

const List: FC = () => {
    const [filter, setFilter] = useState('open');

    const {
        isLoading,
        isSuccess,
        data: issues,
    } = useQuery(['issues', filter], fetchIssues);

    const {
        isSuccess: isSuccessIssuesOpen,
        data: issuesOpen
    } = useQuery('issuesOpen', fetchIssuesOpen);

    const {
        isSuccess: isSuccessIssuesClosed,
        data: issuesClosed
    } = useQuery('issuesClosed', fetchIssuesClosed);

    function fetchIssues(): Promise<Issue[]> {
        return fetch(getIssuesByStateUrl(filter)).then(response => response.json())
    }

    function fetchIssuesOpen(): Promise<IssuesOpen> {
        return fetch(getOpenIssuesUrl()).then(response => response.json())
    }

    function fetchIssuesClosed(): Promise<IssuesClosed> {
        return fetch(getClosedIssuesUrl()).then(response => response.json())
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}

            {isSuccess && (
                <div className="issues-container">
                    <div className={styles.issuesHeading}>
                        <a href={getRepositoryUrl()}>{getGithubAuthor()} / {getGithubRepository()}</a>
                        <Filter
                            filter={filter}
                            setFilter={setFilter}
                            isSuccessIssuesOpen={isSuccessIssuesOpen}
                            isSuccessIssuesClosed={isSuccessIssuesClosed}
                            issuesOpen={issuesOpen}
                            issuesClosed={issuesClosed}
                        />
                    </div>
                    <div className="issues-table">
                        {issues && issues.map(issue => <Item key={issue.number} issue={issue}/>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;