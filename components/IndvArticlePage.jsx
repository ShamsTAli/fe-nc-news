import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../functions/axios.api";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Preloader } from "./sub-components/Preloader";

export const IndvArticlePage = () => {
  const { article_id } = useParams();

  const [selectArticle, setSelectArticle] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((selectedArticle) => {
      setSelectArticle(selectedArticle);
    });
  }, [article_id]);

  if (!selectArticle) {
    return <Preloader />;
  }

  return (
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
        </Card>
      </Paper>
    </Container>
  );
};
