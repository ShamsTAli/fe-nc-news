import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/nc-news-logo.jpg";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main", mb: 3 }}>
      <Toolbar
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          ml: 2,
        }}
      >
        <Box>
          <img
            src={logo}
            alt="nc-news logo"
            style={{
              height: "110px",
              display: "block",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ fontFamily: "Segoe UI" }}
          >
            Home
          </Button>
          <Button color="inherit" sx={{ fontFamily: "Segoe UI" }}>
            Submit Article
          </Button>
          <Button color="inherit" sx={{ fontFamily: "Segoe UI" }}>
            My Account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
