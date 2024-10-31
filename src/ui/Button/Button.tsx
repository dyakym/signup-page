import { Button } from "@mui/material";

interface Props {
  buttonText: string;
  onClick?: () => void;
}

function ButtonStandart({ buttonText, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      fullWidth
      variant="contained"
      type="submit"
      sx={{ mt: 2, backgroundColor: "var(--btn-color)" }}
    >
      {buttonText}
    </Button>
  );
}
export default ButtonStandart;
