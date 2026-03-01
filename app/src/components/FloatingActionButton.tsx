"use client";

import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function FloatingActionButton() {
  return (
    <div>
    <Fab
      variant="extended"
      href="https://wa.me/26876909294"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        backgroundColor: '#25D366',
        color: '#fff',
        '&:hover': {
        backgroundColor: '#20ba5a',
        fontWeight: 'bold',
        
        },
      }}
    >
      <WhatsAppIcon sx={{ mr: 1 }} />
      WhatsApp Us
    </Fab>
    </div>
  );
}

export default FloatingActionButton;