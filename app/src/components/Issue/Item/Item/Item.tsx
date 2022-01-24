import IconOpen from '../../../Icons/IconOpen/IconOpen';
import IconClosed from '../../../Icons/IconClosed/IconClosed';
import Title from '../Title/Title';
import Comments from '../Comments/Comments';
import {IssueItemProps} from "./ItemProps.props";
import {FC} from "react";
import styles from './Item.module.css'

const Item: FC<IssueItemProps> = ({issue}) => {
    return (
        <div className={styles.issuesEntry}>
            <div className={styles.issuesEntryTitleContainer}>
                {issue.state === 'open' && <IconOpen/>}
                {issue.state === 'closed' && <IconClosed/>}
                <Title issue={issue}/>
            </div>
            {issue.comments > 0 && (<Comments issue={issue}/>)}
        </div>
    );
}

export default Item;