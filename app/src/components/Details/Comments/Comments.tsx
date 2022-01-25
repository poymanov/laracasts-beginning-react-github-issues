import {useQuery} from 'react-query';
import Comment from '../Comment/Comment';
import {FC} from "react";
import {CommentsProps} from "./Comments.props";
import {IComment} from "../../../interfaces/comment.interface";
import {getIssuesCommentsByNumberUrl} from "../../../helpers/Helpers";

const Comments: FC<CommentsProps> = ({issue}) => {
    const {
        isLoading,
        isSuccess,
        data: comments,
    } = useQuery(['comments', issue.number], fetchComments);

    function fetchComments(): Promise<IComment[]> {
        return fetch(getIssuesCommentsByNumberUrl(issue.number)).then(response => response.json());
    }

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isSuccess && (
                <>
                    {comments && comments.map(comment => (
                        <Comment user={comment.user}
                                 createdAt={comment.created_at}
                                 body={comment.body}/>
                    ))}
                </>
            )}
        </>
    );
}

export default Comments;