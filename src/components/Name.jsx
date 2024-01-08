import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Name = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value.trim().toLowerCase());
  };

  return (
    <div>
         <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    ></Box>
      <TextField fullWidth 
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
      />
    </div>
  );
};

export default Name;
