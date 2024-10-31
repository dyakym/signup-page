import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ButtonStandart from "../../ui/Button/Button";
import racconImg from "../../images/raccon-image.png";
import checkmarkImg from "../../images/checkmark.png";
import CircularProgress from "@mui/material/CircularProgress";
import PcProgress from "../../ui/PcProgress/PcProgress";

function SuccessShopify() {
  const navigate = useNavigate();
  const [isloading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleNextPage = () => {
    navigate("/connect-email");
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="pc-progressbar">
          {" "}
          <PcProgress step={3} />
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
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFCF6D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  mb: 2,
                }}
              >
                <img
                  src={racconImg}
                  alt="Raccoon"
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                />
                <img
                  src={checkmarkImg}
                  alt="Checkmark"
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{ color: "#0F2E4C", fontWeight: "bold", mb: 1 }}
              >
                Store Connected
              </Typography>

              <Typography
                variant="body2"
                align="center"
                sx={{ color: "#555", maxWidth: "300px" }}
              >
                Chad is now able to manage customer support requests for
                [STORE-NAME].
              </Typography>

              <ButtonStandart
                onClick={handleNextPage}
                buttonText={"Continue"}
              ></ButtonStandart>

              <p style={{ textAlign: "center", marginTop: "16px" }}>
                Wrong store?
                <Link to="/connect-shopify"> Connect another one</Link>
              </p>
            </>
          )}
        </Box>
        |
      </div>
    </div>
  );
}

export default SuccessShopify;
