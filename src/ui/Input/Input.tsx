import { TextField } from "@mui/material";

interface Props {
  value: string;
  type: string;
  name: string;
  placeholder: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputStandart({
  value,
  type,
  name,
  placeholder,
  handleInputChange,
}: Props) {
  return (
    <TextField
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      required
      variant="filled"
      margin="none"
      fullWidth
      sx={{
        mb: 3,
        height: "45px",
        "& .MuiFilledInput-root": {
          height: "45px",
          "&:before, &:after": {
            borderBottom: "none",
          },
        },
        "& input": {
          height: "100%",
          boxSizing: "border-box",
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      }}
    />
  );
}

export default InputStandart;
