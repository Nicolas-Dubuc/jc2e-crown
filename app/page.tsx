"use client";
import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Chairman from '../component/TextChairman';
import VoteDeregulate from '../component/TextVoteToDeregulate';
import LondonSeason from '../component/TextLondonSeason';
import { Container, Typography } from '@mui/material';

export default function Home() {
  const [gameStates, setGameStates] = useState({
    governorGeneral: false,
    china: false,
    twoPlayers: false,
    deregulation: false
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
  const [vacantCount, setVacantCount] = useState(10);

  React.useEffect(() => {
    const govsOffices = ['Bombai Govs.', 'Madras Govs.', 'Bengal Govs.']
    const count = Object.values(officeStates).filter(status => Array.isArray(status) ? status.includes('Vacant') : status === 'Vacant').length;
    const count_govs = govsOffices.reduce((acc, office) => {
      const status = officeStates[office];
      return acc + (Array.isArray(status) ? ((status.includes('Vacant') ? 1 : 0)) : status === 'Vacant' ? 1 : 0);
    }, 0);

    const chinaBonus = gameStates.china || officeStates['Superint. of China'] != 'Vacant' ? 0 : -1;
    const governorGeneralBonus = gameStates.governorGeneral ? -1 - count_govs : -1 + 3 * count_govs;
      
    setVacantCount(count + chinaBonus + governorGeneralBonus);
  }, [officeStates, gameStates]);

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
          {vacantCount}
        </Typography>
        <VoteDeregulate deregulation={gameStates['deregulation']} climate={climate} />
        <LondonSeason deregulation={gameStates['deregulation']} />
        <Chairman currentPlayer={officeStates['Chairman']} climate={climate} />
      </div>
    </Container>
  );
}