import {FC} from 'react';
import { formatDistance } from 'date-fns';
import {IssueTitleProps} from './IssueTitle.props';
import styles from './IssueTitle.module.css'

const IssueTitle: FC<IssueTitleProps> = ({ issue }) => {
    return (
        <>
            <h2>
                {issue.title} <span>#{issue.number}</span>
            </h2>
            <div className={styles.issueDetails}>
                <a href={issue.user.html_url}>{issue.user.login}</a> opened this{' '}
                {formatDistance(new Date(issue.created_at), new Date(), {
                    addSuffix: true,
                })}
            </div>
        </>
    );
}

export default IssueTitle;