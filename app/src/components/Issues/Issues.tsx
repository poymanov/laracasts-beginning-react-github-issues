import {useQuery} from 'react-query';
import {FC, useState} from 'react';
import Filter from './Filter';
import IssueItem from './IssueItem/IssueItem';
import {Issue} from "../../interfaces/issue.interface";
import {IssuesOpen} from "../../interfaces/issuesOpen.interface";
import {IssuesClosed} from "../../interfaces/issuesClosed.interface";
import styles from './Issues.module.css';

const Issues: FC = () => {
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
        return fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues?per_page=10&state=${filter}`
        ).then(response => response.json())
    }

    function fetchIssuesOpen(): Promise<IssuesOpen> {
        return fetch(
            `https://api.github.com/search/issues?q=repo:facebook/create-react-app+type:issue+state:open&per_page=1`
        ).then(response => response.json())
    }

    function fetchIssuesClosed(): Promise<IssuesClosed>  {
        return fetch(
            `https://api.github.com/search/issues?q=repo:facebook/create-react-app+type:issue+state:closed&per_page=1`
        ).then(response => response.json())
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}

            {isSuccess && (
                <div className="issues-container">
                    <div className={styles.issuesHeading}>
                        <a href="https://github.com/facebook/create-react-app">facebook / create-react-app</a>
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
                        {issues && issues.map(issue => <IssueItem key={issue.number} issue={issue}/>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Issues;