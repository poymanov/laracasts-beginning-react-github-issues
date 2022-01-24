import {Link} from 'react-router-dom';
import {formatDistance} from 'date-fns';
import {IssueTitleProps} from "./TitleProps.props";
import {FC} from "react";
import styles from './Title.module.css';

const Title: FC<IssueTitleProps> = ({issue}) => {
    return (
        <div className={styles.issuesTitle}>
            <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
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

export default Title;