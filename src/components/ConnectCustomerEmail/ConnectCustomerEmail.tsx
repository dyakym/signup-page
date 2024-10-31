import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Logo from "../Logo/Logo";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MobilProgress from "../../ui/MobileProgress/MobilProgress";
import NavigationArrows from "../../ui/NavigationArrowsSmall/NavigationArrowsSmall";
import PcProgress from "../../ui/PcProgress/PcProgress";

function ConnectCustomerEmail() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const handleNextPage = () => {
    navigate("/success");
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
          <PcProgress step={4} />
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
                <MobilProgress step={3}></MobilProgress>
                <NavigationArrows></NavigationArrows>
              </div>
              <h2 style={{ marginBottom: "8px", color: "var(--color-bold)" }}>
                Connect to customer support email
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Allows Chad to send automated responses on your behalf from your
                usual support mailbox
              </p>
              <Paper
                style={{
                  backgroundColor: "var(--paper-color)",
                  padding: "16px",
                }}
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
                      primary="Contextual responses"
                      secondary="Custom responses to any support situation from “where’s my stuff?” to “I want a refund”"
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
                      primary="Reply from anywhere"
                      secondary="Respond to your customers via email or Chad chat—it’s all saved in the same thread"
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
                      primary="Categorical inbox tags"
                      secondary="Tags your emails by category so you know what to expect before even opening an email"
                      primaryTypographyProps={{
                        style: { fontWeight: "bold" },
                        color: "var(--color-bold)",
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
              <Button
                onClick={handleNextPage}
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 2 }}
              >
                Connect Gmail account
              </Button>
              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <Link to="/no-email">I don’t use Gmail</Link>
              </div>
            </Box>
          </>
        )}
        ;
      </div>
    </div>
  );
}

export default ConnectCustomerEmail;
