import { FormControl, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  value: string;
  placeholder: string;
  options: string[];
  onChange: (event: SelectChangeEvent<string>) => void;
}

function SelectStandart({ placeholder, value, options, onChange }: Props) {
  return (
    <FormControl fullWidth variant="filled" margin="none" sx={{ mb: 3 }}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        variant="filled"
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
      >
        <MenuItem sx={{ color: "var(--btn-disabled)" }} value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectStandart;
