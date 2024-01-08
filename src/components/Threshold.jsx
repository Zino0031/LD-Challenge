import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Box from '@mui/material/Box';

const Threshold = ({ onThresholdSearch }) => {
  const [threshold, setThreshold] = useState('');

  const handleThresholdSearch = (event) => {
    const { value } = event.target;
    setThreshold(value);
    onThresholdSearch(value.trim());
  };

  return (
    <div>
         <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    ></Box>
      <TextField
      fullWidth 
        type="text"
        placeholder="Power Threshold"
        value={threshold}
        onChange={handleThresholdSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FavoriteBorderOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Threshold;
