import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";

interface Props {
  value: string;
  showPassword: boolean;
  name: string;
  placeholder: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickShowPassword: () => void;
}

function InputPassword({
  value,
  showPassword,
  name,
  placeholder,
  handleInputChange,
  handleClickShowPassword,
}: Props) {
  return (
    <FormControl fullWidth variant="filled" margin="none" sx={{ mb: 3 }}>
      <FilledInput
        id="password"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        type={showPassword ? "text" : "password"}
        sx={{
          height: "45px",
          "& .MuiFilledInput-root": {
            height: "45px",
          },
          "& .MuiInputBase-input": {
            height: "100%",
            padding: "12px 12px",
            boxSizing: "border-box",
          },
          "&:before, &:after": {
            borderBottom: "none",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
export default InputPassword;
