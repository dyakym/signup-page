import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonStandart from "../../ui/Button/Button";
import MobilProgress from "../../ui/MobileProgress/MobilProgress";
import Logo from "../Logo/Logo";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import NavigationArrows from "../../ui/NavigationArrowsSmall/NavigationArrowsSmall";
import PcProgress from "../../ui/PcProgress/PcProgress";
import SelectStandart from "../../ui/Select/Select";

function NoShopify() {
  const options = ["Platform 1", "Platform 2", "Platform 3"];
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [isloading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedPlatform(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedPlatform) {
      navigate("/connect-email");
    } else {
      alert("Please select a platform.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="pc-progressbar">
          <PcProgress step={2} />
        </div>
      </div>
      <div className="main">
        {isloading ? (
          <CircularProgress />
        ) : (
          <>
            <Box
              sx={{
                maxWidth: 400,
                mx: "auto",
                p: 3,
                border: { xs: "none", md: "1px solid gray" },
                borderRadius: 2,
              }}
            >
              <Logo></Logo>
              <div style={{ marginBottom: "32px" }}>
                <MobilProgress step={2}></MobilProgress>
                <NavigationArrows></NavigationArrows>
              </div>
              <h2 style={{ marginBottom: "8px", color: "var(--color-bold)" }}>
                Don’t use Shopify?
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Chad Beta is currently only available on Shopify. We’ll send you
                an email when Chad becomes available on your platform.
              </p>
              <form onSubmit={handleSubmit}>
                <Typography variant="body1" align="left" sx={{ mb: 1 }}>
                  Platform
                </Typography>
                <SelectStandart
                  placeholder={"Select platform"}
                  value={selectedPlatform}
                  onChange={handleSelectChange}
                  options={options}
                />
                <ButtonStandart buttonText={"Submit"}></ButtonStandart>
              </form>
              <p style={{ textAlign: "center", marginTop: "16px" }}>
                Actually use Shopify?{" "}
                <Link to="/connect-shopify"> Connect</Link>
              </p>
            </Box>
          </>
        )}
        <div />
      </div>
    </div>
  );
}

export default NoShopify;
