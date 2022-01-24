import {Link} from 'react-router-dom';
import IconComments from '../../../Icons/IconComments';
import {CommentsProps} from "./Comments.props";
import {FC} from "react";
import styles from './Comments.module.css';

const Comments: FC<CommentsProps> = ({issue}) => {
    return (
        <Link to={`/issues/${issue.number}`} className={styles.commentsCountContainer}>
            <IconComments/>
            <div className={styles.commentsCount}>{issue.comments}</div>
        </Link>
    );
}

export default Comments;