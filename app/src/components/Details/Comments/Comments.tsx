import {useQuery} from 'react-query';
import Comment from '../Comment/Comment';
import {FC} from "react";
import {CommentsProps} from "./Comments.props";
import {IComment} from "../../../interfaces/comment.interface";

const Comments: FC<CommentsProps> = ({issue}) => {
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