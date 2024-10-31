import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ButtonStandart from "../../ui/Button/Button";
import checkmarkBig from "../../images/сheckmark_big.png";
import CircularProgress from "@mui/material/CircularProgress";
import PcProgress from "../../ui/PcProgress/PcProgress";

function SuccessPage() {
  const navigate = useNavigate();
  const [isloading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleNextPage = () => {
    navigate("/success");
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="pc-progressbar">
          {" "}
          <PcProgress step={7} />
        </div>
      </div>
      <div className="main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
            paddingTop: "112px",
            maxWidth: 400,
            mx: "auto",
          }}
        >
          {isloading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <>
              <img
                src={checkmarkBig}
                alt="Raccoon"
                style={{ width: "160px", height: "160px", borderRadius: "50%" }}
              />

              <Typography
                variant="h6"
                sx={{ color: "#0F2E4C", fontWeight: "bold", mb: 1 }}
              >
                You’re ready to go! 🚀
              </Typography>

              <Typography
                variant="body2"
                align="center"
                sx={{ color: "#555", maxWidth: "300px" }}
              >
                A fully loaded self-service portal is now ready to deploy on
                your Shopify store. We’ve programmed it to follow industry best
                practices for shipping, return & exchange, and payment policy.
                You can customize these settings to fit your store policy
                anytime. Lastly, nothing is live until you hit “Go Live”!
              </Typography>

              <ButtonStandart
                onClick={handleNextPage}
                buttonText={"Continue"}
              ></ButtonStandart>
            </>
          )}
        </Box>
        |
      </div>
    </div>
  );
}

export default SuccessPage;
