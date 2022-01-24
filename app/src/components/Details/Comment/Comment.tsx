import {formatDistance} from 'date-fns';
import ReactMarkdown from 'react-markdown';
import {FC} from "react";
import {CommentProps} from "./Comment.props";
import styles from './Comment.module.css'

const Comment: FC<CommentProps> = ({user, createdAt, body}) => {
    return (
        <div className={styles.commentContainer}>
            <a href={user.html_url}>
                <img src={user.avatar_url} alt="avatar" className={styles.avatar}/>
            </a>
            <div className={styles.comment}>
                <div className={styles.commentHeading}>
                    <a href={user.html_url}>{user.login}</a> commented{' '}
                    {formatDistance(new Date(createdAt), new Date(), {
                        addSuffix: true,
                    })}
                </div>
                <div className={`${styles.commentBody} markdown-body`}>
                    <ReactMarkdown children={body}/>
                </div>
            </div>
        </div>
    );
}

export default Comment;