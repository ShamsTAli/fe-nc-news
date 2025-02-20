import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main", mb: 3 }}>
      <Toolbar sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", ml:2 }}>
        <Box >
          <img
            src={"../assets/nc-news-logo.jpg"}
            alt="nc-news logo"
            style={{
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
