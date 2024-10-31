import { Box, Typography } from "@mui/material";
import logoImage from "../../images/logo.png";

const Logo = () => {
  return (
    <Box display="flex" alignItems="center" gap={0.5} marginBottom="24px">
      <img src={logoImage} alt="Chad logo" style={{ height: "24px" }} />
      <Typography
        style={{ color: "var(--logo-color)" }}
        variant="h6"
        component="span"
      >
        Chad
      </Typography>
    </Box>
  );
};

export default Logo;
