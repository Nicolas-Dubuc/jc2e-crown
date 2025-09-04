"use client";
import React, { useState } from 'react';
import { Drawer, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import OfficesSlider from './OfficesSlider';
import ClimateSlider from './ClimateSlider';
import GameStateCheckbox from './GameStateCheckbox';

const StyledDrawer = styled(Drawer)({
  width: 450,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 450,
    position: 'fixed',
    height: '100vh',
    background: 'linear-gradient(#1a1a1a, #2c3e50)',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});

export default function Sidebar({
  setGameStates,
  setOfficeStates,
  setClimate,
}: {
  setGameStates: React.Dispatch<
    React.SetStateAction<{
      governorGeneral: boolean;
      china: boolean;
      twoPlayers: boolean;
    }>
  >;
  setOfficeStates: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | string[];
    }>
  >;
  setClimate: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [gameStates, setLocalGameStates] = useState({
    governorGeneral: false,
    china: false,
    twoPlayers: false,
  });
  const [officeStates, setLocalOfficeStates] = useState<{
    [key: string]: string | string[];
  }>({
    Chairman: 'Vacant',
    'Manager of Ship.': 'Vacant',
    'Director of Trade': 'Vacant',
    'Gov. General': 'Vacant',
    'Military Affairs': 'Vacant',
    'Bombai Pres.': 'Vacant',
    'Bombai Comm.': 'Vacant',
    'Madras Pres.': 'Vacant',
    'Madras Comm.': 'Vacant',
    'Bengal Pres.': 'Vacant',
    'Bengal Comm.': 'Vacant',
    'Superint. of China': 'Vacant',
  });
  const [climate, setLocalClimate] = useState('lion');

  // Sync local states with parent
  React.useEffect(() => {
    setGameStates(gameStates);
  }, [gameStates, setGameStates]);

  React.useEffect(() => {
    setOfficeStates(officeStates);
  }, [officeStates, setOfficeStates]);

  React.useEffect(() => {
    setClimate(climate);
  }, [climate, setClimate]);

  // Dynamic labels based on game states
  const baseChair = ['Chairman'];
  const dynamicTrade = [
    ...(gameStates.governorGeneral ? ['Gov. General'] : ['Director of Trade'])
  ];
  const baseShipMil = [
    'Manager of Ship.', 'Military Affairs', 'Bombai Pres.', 'Bombai Comm.'];
  const dynamicBGov = [
    ...(gameStates.governorGeneral ? [] : ['Bombai Govs.'])];
  const baseMadras = ['Madras Pres.', 'Madras Comm.'];
  const dynamicMGov = [
    ...(gameStates.governorGeneral ? [] : ['Madras Govs.'])];
  const baseBengal = ['Bengal Pres.', 'Bengal Comm.'];
  const dynamicLabels = [
    ...(gameStates.governorGeneral ? [] : ['Bengal Govs.']),
    ...(gameStates.china ? ['Superint. of China'] : []),
  ];
  const labels = [...baseChair, ...dynamicTrade, 
    ...baseShipMil, ...dynamicBGov, ...baseMadras, ...dynamicMGov,
    ...baseBengal, ...dynamicLabels];

    const handleOfficeChange = (label: string) => (event: React.MouseEvent, newValue: string | string[] | null) => {
    if (newValue !== null) {
      setLocalOfficeStates((prev) => ({
        ...prev,
        [label]: newValue,
      }));
    }
  };

  const handleClimateChange = (event: React.MouseEvent, newValue: string | null) => {
    if (newValue !== null) {
      setLocalClimate(newValue);
    }
  };

  const handleGameStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalGameStates({
      ...gameStates,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <StyledDrawer variant="permanent">
      <ClimateSlider value={climate} onChange={handleClimateChange} />
      <GameStateCheckbox gameStates={gameStates} onChange={handleGameStateChange} />

      <Typography variant="h6" style={{ marginBottom: '-20px'}}>
        Offices
      </Typography>
      {labels.map((label) => (
        <OfficesSlider key={label} label={label}  value={officeStates[label]}
            onChange={handleOfficeChange(label)}/>
      ))}
    </StyledDrawer>
  );
}