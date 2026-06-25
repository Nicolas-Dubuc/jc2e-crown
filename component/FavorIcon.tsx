"use client";
import React from 'react';
import { Typography } from '@mui/material';

interface FavorIconProps {
  number: number | string;
  description?: string;
  description_before?: string; // Optional text before the icon
}

export default function favorIcon({ number, description, description_before }: FavorIconProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', margin: '5px 0' }}>
      {description_before && (
        <Typography variant="h3" style={{ color: 'white', fontSize: '1.4rem', fontStyle: `bold`, marginTop: `10px`, marginBottom: '5px' }}>
          {description_before}
        </Typography>
      )}
      {number != 0 && (
      <div style={{ display: 'flex', flexDirection: `row`, alignItems: 'center', gap: '0px' }}>
        <Typography variant="h5" style={{ fontWeight: 'bold', color: 'white', marginRight: '5px'}}>
          {number}  
        </Typography>
        <img src='/favor.svg' alt='Favor' style={{ width: '30px', height: '30px' }} />
      {description && (
        <Typography variant="body1" style={{ color: 'white', marginLeft: '10px' }}>
          {description}
        </Typography>
      )}
      </div>
      )}
      {(number == 0 &&
      <div>
        {description && (
          <Typography variant="body1" style={{color: `white`}}>
            {description}
          </Typography>
        )}
      </div>
      )}
    </div>
  );
}