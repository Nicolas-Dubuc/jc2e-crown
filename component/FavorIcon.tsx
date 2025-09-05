"use client";
import React from 'react';
import { Typography } from '@mui/material';

interface FavorIconProps {
  number: number;
  description: string;
}

export default function favorIcon({ number, description }: FavorIconProps) {
  return (
   <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
      <Typography variant="h4" style={{ fontWeight: 'bold', color: 'white' }}>
        {number}
      </Typography>
      <img src='/favor.svg' alt='Favor' style={{ width: '40px', height: '40px' }} />
      <Typography variant="h5" style={{ color: 'white', marginLeft: '5px' }}>
        {description}
      </Typography>
    </div>
  );
}