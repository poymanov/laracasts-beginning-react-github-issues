import IconOpen from '../../Icons/IconOpen/IconOpen';
import IconClosed from '../../Icons/IconClosed/IconClosed';
import IssueTitle from './IssueTitle';
import IssueComments from './IssueComments';
import {IssueItemProps} from "./IssueItemProps.props";
import {FC} from "react";
import styles from './IssueItem.module.css'

const IssueItem: FC<IssueItemProps> = ({issue}) => {
    return (
        <div className={styles.issuesEntry}>
            <div className={styles.issuesEntryTitleContainer}>
                {issue.state === 'open' && <IconOpen/>}
                {issue.state === 'closed' && <IconClosed/>}
                <IssueTitle issue={issue}/>
            </div>
            {issue.comments > 0 && (<IssueComments issue={issue}/>)}
        </div>
    );
}

export default IssueItem;