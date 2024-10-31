import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Box, CircularProgress, Typography } from "@mui/material";
import ButtonStandart from "../../ui/Button/Button";
import InputStandart from "../../ui/Input/Input";
import InputPassword from "../../ui/InputPassword/InputPassword";
import MobilProgress from "../../ui/MobileProgress/MobilProgress";
import PcProgress from "../../ui/PcProgress/PcProgress";

interface FormData {
  email: string;
  name: string;
  password: string;
}

function SignUp() {
  const navigate = useNavigate();
  const [isloading, setLoading] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      navigate("/connect-shopify");
    } else {
      alert("Fill all fields");
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
          <PcProgress step={1} />
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
              <Logo />
              <div style={{ marginBottom: "32px" }}>
                <MobilProgress step={1} />
              </div>
              <h2 style={{ marginBottom: "8px", color: "var(--color-bold)" }}>
                Welcome to Chad
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Go live in 10 minutes! Our self-service widget empowers your
                customers to manage orders and track shipments 24/7 without
                driving you crazy.
              </p>
              <form onSubmit={handleSignUp}>
                <Typography variant="body1" align="left" sx={{ mb: 1 }}>
                  Email
                </Typography>
                <InputStandart
                  type={"email"}
                  name={"email"}
                  placeholder={"megachad@trychad.com"}
                  value={formData.email}
                  handleInputChange={handleInputChange}
                />
                <Typography variant="body1" align="left" sx={{ mb: 1 }}>
                  Your Name
                </Typography>
                <InputStandart
                  type={"text"}
                  name={"name"}
                  placeholder={"Mega Chad"}
                  value={formData.name}
                  handleInputChange={handleInputChange}
                ></InputStandart>
                <Typography variant="body1" align="left" sx={{ mb: 1 }}>
                  Password
                </Typography>
                <InputPassword
                  showPassword={showPassword}
                  name={"password"}
                  placeholder={"Password"}
                  value={formData.password}
                  handleInputChange={handleInputChange}
                  handleClickShowPassword={handleClickShowPassword}
                />

                <ButtonStandart buttonText={"Create account"} />
              </form>
              <p style={{ textAlign: "center", marginTop: "16px" }}>
                Already have an account?<Link to="/login"> Login</Link>
              </p>
            </Box>
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp;
