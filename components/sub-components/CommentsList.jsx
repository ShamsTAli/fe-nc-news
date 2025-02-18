import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleComments } from "../../functions/axios.api";
import { Preloader } from "./Preloader";
import { CardActions, Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const CommentsList = () => {
  const [commentList, setViewCommentList] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((articleComments) => {
      setViewCommentList(articleComments);
    });
  }, [article_id]);

  if (!commentList.length) return <Preloader/>

  return (
    <div className="article-page-comments-list">
      {commentList.map((comment) => {
        return (
          <div className="comment" key={comment.article_id + comment.created_at}>
            <h6>{comment.author}</h6>
            <p>{comment.body}</p>
            <CardActions>
              <Button size="small" startIcon={<ThumbUpIcon />}>
                {comment.votes}
              </Button>
              <Button size="small" startIcon={<ThumbDownIcon />}>
                {comment.votes}
              </Button>
            </CardActions>
          </div>
        );
      })}
    </div>
  );
};
