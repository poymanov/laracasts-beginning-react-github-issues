import {Link} from 'react-router-dom';
import IconComments from '../../Icons/IconComments';
import {IssueCommentsProps} from "./IssueComments.props";
import {FC} from "react";
import styles from './IssueComments.module.css';

const IssueComments: FC<IssueCommentsProps> = ({issue}) => {
    return (
        <Link to={`/issues/1`} className={styles.commentsCountContainer}>
            <IconComments/>
            <div className={styles.commentsCount}>{issue.comments}</div>
        </Link>
    );
}

export default IssueComments;