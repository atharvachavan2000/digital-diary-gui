import "./Login.css";
import { Button, TextField } from "@mui/material";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="container">
      <div className="login-card">
        <img
          src={logo}
          alt="Digital Diary Logo"
          className="login-card__image"
        />
        <div className="login-card__form">
          <TextField
            className="form__input"
            label="Username"
            variant="outlined"
            fullWidth
            size="small"
            color="secondary"
          />
          <TextField
            className="form__input"
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            color="secondary"
          />
          <Button
            className="form__button"
            variant="contained"
            size="medium"
            color="secondary"
            disableElevation
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
