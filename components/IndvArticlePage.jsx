import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getArticleById,
  patchArticleVoteDecrease,
  patchArticleVoteIncrease,
} from "../functions/axios.api";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
import { Preloader } from "./sub-components/Preloader";
import { CommentsList } from "./sub-components/CommentsList";
import { AddCommentForm } from "./sub-components/AddCommentForm";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Drawer from "@mui/material/Drawer";
import { NotFoundPage } from "./sub-components/NotFoundPage";

export const IndvArticlePage = () => {
  const { article_id } = useParams();
  const [selectArticle, setSelectArticle] = useState(null);
  const [currVotes, setCurrVotes] = useState(0);
  const [currVotesDecrease, setCurrVotesDecrease] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((selectedArticle) => {
        setSelectArticle(selectedArticle);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg);
        setIsLoading(false);
      });
  }, [article_id]);

  if (error) return <NotFoundPage />;
  if (isLoading) return <Preloader />;

  function handleVoteIncrease() {
    if (currVotes === 0) {
      setCurrVotes(1);
      patchArticleVoteIncrease(article_id).catch(() => {
        setCurrVotes(0);
      });
    }
  }

  function handleVoteDecrease() {
    if (currVotesDecrease === 0) {
      setCurrVotesDecrease(-1);
      patchArticleVoteDecrease(article_id).catch(() => {
        setCurrVotesDecrease(0);
      });
    }
  }

  return (
    <div className="indv-article-container">
      {error && <NotFoundPage />}
      {!error && (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image={selectArticle.article_img_url}
                alt={selectArticle.title}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {selectArticle.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  By <strong>{selectArticle.author}</strong>
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectArticle.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" startIcon={<ThumbUpIcon />}>
                  {selectArticle.votes + currVotes + currVotesDecrease}
                </Button>
                <Button
                  size="small"
                  startIcon={<ThumbUpOffAltIcon />}
                  onClick={handleVoteIncrease}
                ></Button>
                <Button
                  size="small"
                  startIcon={<ThumbDownOffAltIcon />}
                  onClick={handleVoteDecrease}
                ></Button>
                <Button
                  size="medium"
                  startIcon={<AddCommentIcon />}
                  onClick={() => setShowCommentForm(true)}
                ></Button>
                <Drawer
                  anchor="bottom"
                  open={showCommentForm}
                  onClose={() => setShowCommentForm(false)}
                >
                  <AddCommentForm
                    setShowCommentForm={setShowCommentForm}
                    setCommentList={setCommentList}
                    commentList={commentList}
                  />
                </Drawer>
              </CardActions>
            </Card>
            <CommentsList
              commentList={commentList}
              setCommentList={setCommentList}
            />
          </Paper>
        </Container>
      )}
    </div>
  );
};
