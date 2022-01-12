import {useQuery} from 'react-query';
import IssueComment from './IssueComment';
import {FC} from "react";
import {IssueCommentsProps} from "./IssueComments.props";
import {IComment} from "../../interfaces/comment.interface";

const IssueComments: FC<IssueCommentsProps> = ({issue}) => {
    const {
        isLoading,
        isSuccess,
        data: comments,
    } = useQuery(['comments', issue.number], fetchComments);

    function fetchComments(): Promise<IComment[]> {
        return fetch(
            `https://api.github.com/repos/facebook/create-react-app/issues/${issue.number}/comments`
        ).then(response => response.json());
    }

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
                <>
                    {comments && comments.map(comment => (
                        <IssueComment user={comment.user}
                                      createdAt={comment.created_at}
                                      body={comment.body}/>
                    ))}
                </>
            )}
        </>
    );
}

export default IssueComments;