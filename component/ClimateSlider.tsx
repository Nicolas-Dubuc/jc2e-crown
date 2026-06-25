"use client";
import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToggleButton = styled(ToggleButton)({
  marginTop: '0px',
  width: '100px',
  padding: '0px !important',
  backgroundColor: 'transparent !important',
  border: '0px',
  height: '30px',
  display: 'flex',
  transition: 'transform 0.2s ease',
  '&.Mui-selected, &.Mui-selected:hover': {
    transform: 'scale(1.2)',
    outline: 'none',
    boxShadow: 'none'
  },
  '& img, & svg': {
    maxWidth: '50px',
    maxHeight: '50px',
    objectFit: 'contain',
    background: 'transparent',
    transition: 'max-width 0.2s ease, max-height 0.2s ease'
  },
  '&.Mui-selected img': {
    maxWidth: '60px',
    maxHeight: '60px'
  },
  // Add Safari-specific
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
});

interface ClimateSliderProps {
  value: string;
  onChange: (event: React.MouseEvent, newValue: string | null) => void;
}

export default function ClimateSlider({value, onChange }: ClimateSliderProps) {
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: '-5px' }}>
        Climate
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        orientation="horizontal"
        fullWidth
      >
        <StyledToggleButton value="bull">
          <img src="/bull.svg" alt = "Bull" />
        </StyledToggleButton>
        <StyledToggleButton value="stag">
          <img src="/stag.svg" alt = "Stag" />
        </StyledToggleButton>
        <StyledToggleButton value="lion">
          <img src="/lion.svg" alt = "Lion" />
        </StyledToggleButton>
        <StyledToggleButton value="bear">
          <img src="/bear.svg" alt = "Bear" />
        </StyledToggleButton>
        <StyledToggleButton value="peacock">
          <img src="/peacock.svg" alt = "Peacock" />
        </StyledToggleButton>
      </ToggleButtonGroup>
</>
  );
}
