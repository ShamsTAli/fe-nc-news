import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useNavigate } from "react-router";

export const ArticleTile = ({ articles }) => {
  const navigate = useNavigate();
  const handleClick = (article_id) => {
    navigate(`/article/${article_id}`);
  };

  return (
    <div className="article-tile-container">
      {articles.map((article) => {
        return (
          <div
            className="article-tile"
            key={article.article_id}
            onClick={() => handleClick(article.article_id)}
            style={{ cursor: "pointer" }}
          >
            <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, m: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={article.article_img_url}
                alt={article.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {article.author} | Topic: {article.topic}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(article.created_at).toDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<ThumbUpIcon />}>
                  {article.votes}
                </Button>
                <Button size="small" startIcon={<CommentIcon />}>
                  {article.comment_count}
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
