import {FC} from 'react';
import { formatDistance } from 'date-fns';
import {TitleProps} from './Title.props';
import styles from './Title.module.css'

const Title: FC<TitleProps> = ({ issue }) => {
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

export default Title;