import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonStandart from "../../ui/Button/Button";
import InputStandart from "../../ui/Input/Input";
import InputPassword from "../../ui/InputPassword/InputPassword";
import PcProgress from "../../ui/PcProgress/PcProgress";
import Logo from "../Logo/Logo";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isloading, setLoading] = useState<boolean>(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate("/connect-shopify");
    } else {
      alert("Заповніть всі поля");
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
              <Logo></Logo>
              <h2 style={{ marginBottom: "8px", color: "var(--color-bold)" }}>
                Welcome back
              </h2>
              <p style={{ marginBottom: "32px" }}>
                Feeling ready to take on the day? Chad is too!
              </p>
              <form onSubmit={handleLogin}>
                <Typography variant="body1" align="left" sx={{ mb: 1 }}>
                  Email
                </Typography>
                <InputStandart
                  type={"email"}
                  name={"email"}
                  placeholder={"megachad@trychad.com"}
                  value={formData.email}
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
                ></InputPassword>
                <ButtonStandart buttonText={"Login"}></ButtonStandart>
              </form>
              <p style={{ textAlign: "center", marginTop: "16px" }}>
                No account <Link to="/"> Register</Link>
              </p>
            </Box>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
