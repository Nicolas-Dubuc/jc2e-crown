"use client";
import React from 'react';
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToggleButton = styled(ToggleButton)({
  color: 'white',
  border: '0px solid white',
  marginTop: '0px',
  width: '80px',
  height: '30px',
  padding: '0px',
  display: 'flex',
  transition: 'background-color 0.2s ease, font-size 0.2s ease',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: '#1976d2',
    color: 'white',
    fontSize: '1.1rem',
  },
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
});

interface OfficesSliderProps {
  label: string;
  value: string | string[];
  onChange: (event: React.MouseEvent, newValue: string | string[] | null) => void;
}

export default function OfficesSlider({ label, value, onChange }: OfficesSliderProps) {

const isMultiple = label.includes('Govs');

const upperMargin = label.includes('Pres.') || label.includes('Superint.')

  return (
    <Grid container
  direction="row"
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: '-10px',
    marginTop: (upperMargin ? '10px' : '0px')
  }}>
      <Grid size={5}>
      <Typography variant="body1">
        {label}
      </Typography>
      </Grid>
      <Grid size={7}>
      <ToggleButtonGroup
        value={value}
        exclusive={!isMultiple}
        onChange={onChange}
        orientation="horizontal"
      >
        <StyledToggleButton value="Player">Player</StyledToggleButton>
        <StyledToggleButton value="Crown">Crown</StyledToggleButton>
        <StyledToggleButton value="Vacant">Vacant</StyledToggleButton>
      </ToggleButtonGroup>
    </Grid>
    </Grid>
  );
}