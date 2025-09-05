"use client";
import React from 'react';
import { Typography } from '@mui/material';
import favorIcon from './FavorIcon';

interface ChairmanProps {
  currentPlayer: string | string[];
  climate: string;
}

export default function Chairman({ currentPlayer, climate}: ChairmanProps) {
  let chairmanText = '';
  let favorComponent = favorIcon({ number: -1, description: 'yo' });

  // Player-based text with favorIcon for Player
  if (currentPlayer === 'Player') {
    return(
    <div>
        {favorIcon({ number: -1, description: 'You must always perform this favor if able.' })} 
    </div>
    )
    chairmanText = 'The Player reigns as Chairman, steering the empire with bold moves and holds favor';
    favorComponent = favorIcon({ number: -1, description: 'yo' }); 
  } else if (currentPlayer === 'Crown') {
    chairmanText = 'The Crown holds the Chairman seat, commanding with regal authority.';
  } else if (currentPlayer === 'Vacant') {
    chairmanText = 'The Chairman role sits vacant, leaving the empire in quiet suspense.';
  }

  // Climate animal influence
  let climateImpact = '';
  switch (climate) {
    case 'bear':
      climateImpact = 'The bear’s strength bolsters the Chairman’s grip on power.';
      break;
    case 'bull':
      climateImpact = 'The bull’s charge fuels the Chairman’s aggressive strategies.';
      break;
    case 'lion':
      climateImpact = 'The lion’s roar enhances the Chairman’s noble leadership.';
      break;
    case 'peacock':
      climateImpact = 'The peacock’s flair adds elegance to the Chairman’s decisions.';
      break;
    case 'stag':
      climateImpact = 'The stag’s grace guides the Chairman’s wise governance.';
      break;
    default:
      climateImpact = 'The climate’s mystery shapes the Chairman’s uncertain path.';
  }

  // Combine texts
  const fullText = `${chairmanText} ${climateImpact}`;

  return (
    <div>
      <Typography variant="body1" style={{ color: 'white', margin: '10px 0' }}>
        {fullText}
      </Typography>
        {favorComponent}
    </div>
  );
}