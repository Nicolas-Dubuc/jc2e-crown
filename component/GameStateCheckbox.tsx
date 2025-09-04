"use client";
import React from 'react';
import { Typography, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCheckbox = styled(Checkbox)({
  color: 'white',
  '&.Mui-checked': {
    color: '#1976d2',
  },
});

interface GameStateCheckboxProps {
  gameStates: { governorGeneral: boolean; china: boolean; twoPlayers: boolean };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GameStateCheckbox({ gameStates, onChange }: GameStateCheckboxProps) {

  return (
    <>
      <Typography variant="h6" style={{ marginBottom: '-20px'}}>
        Game State
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={
            <StyledCheckbox
              name="governorGeneral"
              checked={gameStates.governorGeneral}
              onChange={onChange}
            />
          }
          label="Governor General"
          style={{ marginBottom: '-10px' }}
        />
        <FormControlLabel
          control={
            <StyledCheckbox
              name="china"
              checked={gameStates.china}
              onChange={onChange}
            />
          }
          label="China"
          style={{ marginBottom: '-10px' }}
        />
        <FormControlLabel
          control={
            <StyledCheckbox
              name="twoPlayers"
              checked={gameStates.twoPlayers}
              onChange={onChange}
            />
          }
          label="2 Players"
          style={{ marginBottom: '-10px' }}
        />
      </div>
    </>
  );
}