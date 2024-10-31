import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ButtonStandart from "../../ui/Button/Button";
import MobilProgress from "../../ui/MobileProgress/MobilProgress";
import NavigationArrows from "../../ui/NavigationArrowsSmall/NavigationArrowsSmall";
import PcProgress from "../../ui/PcProgress/PcProgress";

function ConnectShopify() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const handleConnectStore = () => {
    navigate("/success-shopify");
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
          {" "}
          <PcProgress step={2} />
        </div>
      </div>
      <div className="main">
        {isLoading ? (
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
                Connect to Shopify Store
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Installs the Chad widget in your Shopify store and sets it up to
                display your customers’ order information and self-serve
                options.
              </p>
              <Paper
                style={{ backgroundColor: "#F8F9FC", padding: "16px" }}
                elevation={0}
              >
                <List sx={{ padding: 0 }}>
                  <ListItem sx={{ padding: 0, alignItems: "flex-start" }}>
                    <CheckIcon
                      style={{
                        color: "green",
                        marginRight: "8px",
                        marginTop: "4px",
                      }}
                    />
                    <ListItemText
                      primary="Track orders and shipping"
                      secondary="Global coverage with 600+ couriers supported"
                      primaryTypographyProps={{
                        style: { fontWeight: "bold" },
                        color: "var(--color-bold)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ padding: 0, alignItems: "flex-start" }}>
                    <CheckIcon
                      style={{
                        color: "green",
                        marginRight: "8px",
                        marginTop: "4px",
                      }}
                    />
                    <ListItemText
                      primary="Manage orders"
                      secondary="Allow customers to track, return, exchange, or report problems with their orders"
                      primaryTypographyProps={{
                        style: { fontWeight: "bold" },
                        color: "var(--color-bold)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ padding: 0, alignItems: "flex-start" }}>
                    <CheckIcon
                      style={{
                        color: "green",
                        marginRight: "8px",
                        marginTop: "4px",
                      }}
                    />
                    <ListItemText
                      primary="Process returns and exchanges"
                      secondary="Automatically checks your store policy and existing inventory before resolving or escalating each request"
                      primaryTypographyProps={{
                        style: { fontWeight: "bold" },
                        color: "var(--color-bold)",
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
              <ButtonStandart
                onClick={handleConnectStore}
                buttonText={"Connect store"}
              ></ButtonStandart>
              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <Link to="/no-shopify">I don’t use Shopify</Link>
              </div>
            </Box>
            <div />
          </>
        )}
      </div>
    </div>
  );
}

export default ConnectShopify;
