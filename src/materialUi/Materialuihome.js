// rfce shortcut of  syntex
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Materialuihome() {
  return (
    <div>
       <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    </div>
  )
}

export default Materialuihome
