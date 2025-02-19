import { useState, useContext } from "react";
import { UserAccount } from "../../contexts/UserAccount";
import { postArticleComment } from "../../functions/axios.api";
import { useParams } from "react-router";

export const AddCommentForm = ({
  setShowCommentForm,
  commentList,
  setCommentList,
}) => {
  const { loggedInUser } = useContext(UserAccount);
  const { article_id } = useParams();
  const [commentInput, setCommentInput] = useState({
    body: "",
  });

  const handleChange = (event) => {
    setCommentInput({ body: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!loggedInUser) {
      alert("User is not logged in");
      return;
    }

    const formatData = {
      body: commentInput.body,
      username: loggedInUser.username,
    };

    try {
      await postArticleComment(article_id, formatData);
      setCommentInput({ body: "" });
      alert("Comment posted successfully");
    } catch (error) {
      console.error("Failed to post comment:", error);
      alert("Did not post comment");
    } finally {
      setShowCommentForm(false);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label className="comment-label" htmlFor="commentText">
        Your Comment:
      </label>
      <br></br>
      <textarea
        name="commentText"
        rows="8"
        cols="50"
        value={commentInput.body}
        onChange={handleChange}
        required
      ></textarea>
      <br></br>
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
