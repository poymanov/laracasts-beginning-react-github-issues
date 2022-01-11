import {Link} from 'react-router-dom';
import {formatDistance} from 'date-fns';
import {IssueTitleProps} from "./IssueTitleProps.props";
import {FC} from "react";
import styles from './IssueTitle.module.css';

const IssueTitle: FC<IssueTitleProps> = ({issue}) => {
    return (
        <div className={styles.issuesTitle}>
            <Link to={`/issues/1`}>{issue.title}</Link>
            <div className={styles.issuesTitleDetails}>
                #{issue.number} opened{' '}
                {formatDistance(new Date(issue.created_at), new Date(), {
                    addSuffix: true,
                })}{' '}
                by {issue.user.login}
            </div>
        </div>
    );
}

export default IssueTitle;