import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom'
import Title from '../Title/Title';
import Comment from '../Comment/Comment';
import Comments from '../Comments/Comments';
import {FC} from "react";
import '../../../css/github-markdown.css';
import {Issue} from '../../../interfaces/issue.interface';
import styles from './Details.module.css';
import {getIssueByNumberUrl} from "../../../helpers/Helpers";

const Details: FC = () => {
    const params = useParams();

    const {
        isLoading,
        isSuccess,
        data: issue,
    } = useQuery(['issue', params.id], fetchIssue);

    function fetchIssue(): Promise<Issue> {
        if (params.id === undefined) {
            throw new Error();
        }

        return fetch(getIssueByNumberUrl(params.id)).then(response => response.json());
    }

    return (
        <div className={styles.commentsContainer}>
            {isLoading && <div>Loading...</div>}
            {isSuccess && issue && <Title issue={issue}/>}
            {isSuccess && issue && <Comment
                user={issue.user}
                createdAt={issue.created_at}
                body={issue.body}
            />}
            <div className={styles.border}/>
            {isSuccess && issue && <Comments issue={issue}/>}
        </div>
    );
}

export default Details;