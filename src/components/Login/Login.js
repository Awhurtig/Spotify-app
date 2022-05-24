import { accessUrl } from "../../config/config";
import { Box, Button } from "@mui/material";
const Login = () => {
  return (
    <Box
      sx={{
        bgcolor: "Background.paper",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/image/Spotify_Logo-1.png"
        alt="Techover"
        style={{ marginBottom: 300, width: "70%", maxWidth: 500 }}
      />
      <Button href={accessUrl} color="primary" variant="contained" size="large">
        Login to Spotify
      </Button>
    </Box>
  );
};

export default Login;
