"use client";
import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Chairman from '../component/ChairmanText';
import { Container, Typography } from '@mui/material';

export default function Home() {
  const [gameStates, setGameStates] = useState({
    governorGeneral: false,
    china: false,
    twoPlayers: false,
  });
  const [officeStates, setOfficeStates] = useState<{
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
  const [climate, setClimate] = useState('lion');

  return (
    <Container maxWidth={false} style={{ display: 'flex', background: '#1a1a1a', height: '100vh' }}>
      <Sidebar
        setGameStates={setGameStates}
        setOfficeStates={setOfficeStates}
        setClimate={setClimate}
      />
      <div style={{ flexGrow: 1, padding: '20px', color: 'white' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Crown Handbook - Turn Summary
        </Typography>
        <Chairman currentPlayer={officeStates['Chairman']} climate={climate} />
      </div>
    </Container>
  );
}