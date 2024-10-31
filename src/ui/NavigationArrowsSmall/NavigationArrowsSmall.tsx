import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import "./navigationArrowsSmall.css";

function NavigationArrowsSmall() {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };
  return (
    <div className="navigation-small">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        p={2}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={handlePrevClick}
        >
          <IconButton sx={{ color: "var(--color-primary)", p: 0 }}>
            <ArrowBackIosIcon sx={{ fontSize: "12px" }} />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "left",
              ml: "4px",
            }}
          >
            Prev
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
          <Typography
            variant="body1"
            sx={{
              color: "var(--btn-disabled)",
              fontSize: "12px",
              lineHeight: "18px",
              textAlign: "left",
              mr: "4px",
            }}
          >
            Next
          </Typography>
          <IconButton sx={{ color: "var(--btn-disabled)", p: 0 }}>
            <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default NavigationArrowsSmall;
