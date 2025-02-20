import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main", mb: 3 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "left" }}>
          <img
            src={"../assets/nc-news-logo.jpg"}
            alt="nc-news logo"
            style={{
              maxWidth: "50%",
              height: "110px",
              display: "block",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button color="inherit">Submit Article</Button>
          <Button color="inherit">My Account</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
