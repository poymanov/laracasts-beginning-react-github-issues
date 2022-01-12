import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom'
import IssueTitle from './IssueTitle';
import IssueComment from './IssueComment';
import IssueComments from './IssueComments';
import {FC} from "react";
import '../../css/github-markdown.css';
import {Issue} from '../../interfaces/issue.interface';
import styles from './Details.module.css';

const Details: FC = () => {
    const params = useParams();

    const {
        isLoading,
        isSuccess,
        data: issue,
    } = useQuery(['issue', params.id], fetchIssue);

    function fetchIssue(): Promise<Issue> {
        return fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues/${params.id}`
        ).then(response => response.json());
    }

    return (
        <div className={styles.commentsContainer}>
            {isLoading && <div>Loading...</div>}
            {isSuccess && issue && <IssueTitle issue={issue}/>}
            {isSuccess && issue && <IssueComment
                user={issue.user}
                createdAt={issue.created_at}
                body={issue.body}
            />}
            <div className={styles.border}/>
            {isSuccess && issue && <IssueComments issue={issue}/>}
        </div>
    );
}

export default Details;