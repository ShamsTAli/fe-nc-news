import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { deleteComment, getArticleComments } from "../../functions/axios.api";
import { CardActions, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { UserAccount } from "../../contexts/UserAccount";

export const CommentsList = ({ commentList, setCommentList }) => {
  const { loggedInUser } = useContext(UserAccount);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((articleComments) => {
      setCommentList(articleComments);
    });
  }, [article_id]);

  if (!commentList.length) return <p>There are no comments...</p>;

  const handleDelete = async (comment_id) => {
    const updatedComments = commentList.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setCommentList(updatedComments);

    try {
      await deleteComment(comment_id);
      alert("Comment was deleted");
    } catch (error) {
      alert("Comment was not deleted");
      setCommentList([...commentList]);
    }
  };
  return (
    <div className="article-page-comments-list">
      {commentList.map((comment) => {
        return (
          <div
            className="comment"
            key={comment.article_id + comment.created_at}
          >
            <h6>{comment.author}</h6>
            <p>{comment.body}</p>
            <CardActions>
              <Button size="small" startIcon={<ThumbUpIcon />}>
                {comment.votes}
              </Button>
              {comment.author === loggedInUser.username && (
                <Button
                  onClick={() => {
                    handleDelete(comment.comment_id);
                  }}
                  size="small"
                  startIcon={<DeleteForeverIcon />}
                  sx={{ color: "darkred" }}
                ></Button>
              )}
            </CardActions>
          </div>
        );
      })}
    </div>
  );
};
