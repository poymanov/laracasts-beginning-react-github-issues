import IconOpen from '../Icons/IconOpen/IconOpen';
import IconClosed from '../Icons/IconClosed/IconClosed';
import {FilterProps} from "./Filter.props";
import {FC} from "react";
import styles from './Filter.module.css';

const Filter: FC<FilterProps> =
    ({filter, setFilter, isSuccessIssuesOpen, isSuccessIssuesClosed, issuesOpen, issuesClosed}) => {
        return (
            <div className={styles.openClosedButtons}>
                <button onClick={() => setFilter('open')}>
                    <IconOpen/>
                    <span className={filter === 'open' ? styles.fontBold : ''}>
					{isSuccessIssuesOpen && issuesOpen && (
                        <span>{issuesOpen.total_count} Open</span>
                    )}
				</span>
                </button>
                <button onClick={() => setFilter('closed')}>
                    <IconClosed/>
                    <span className={filter === 'closed' ? styles.fontBold : ''}>
					{isSuccessIssuesClosed && issuesClosed && (
                        <span>{issuesClosed.total_count} Closed</span>
                    )}
				</span>
                </button>
            </div>
        )
    }

export default Filter;