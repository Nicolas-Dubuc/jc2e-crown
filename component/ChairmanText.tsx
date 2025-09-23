"use client";
import React from 'react';
import { Typography } from '@mui/material';
import favorIcon from './FavorIcon';

interface ChairmanProps {
  currentPlayer: string | string[];
  climate: string;
}

export default function Chairman({ currentPlayer, climate }: ChairmanProps) {

  const favorRules = {
    player: {
      always_before: [
        { number: -1, before: '', desc: 'You must always perform this favor if able.' }
      ],
      climate: {
        bull: [
          { number: -1, before: 'Seek Debt', desc: 'Consent from Crown shares for the first additional advancement above 3 Debt Marker advances.' },
          { number: -1, before: '', desc: 'Consent from a Crown share for any additional Debt Marker advances.' },
          { number: `+1`, before: 'Allocate Company Balance', desc: 'Allocate £3 to a Crown office.' }
        ],
        stag: [
          { number: -2, before: 'Seek Debt', desc: 'Consent from Crown shares for the first additional advancement above 3 Debt Marker advances.' },
          { number: -1, before: '', desc: 'Consent from a Crown share for any additional Debt Marker advances.' },
          { number: `+1`, before: 'Allocate Company Balance', desc: 'Allocate £4 to a Crown office.' }
        ],
        lion: [
          { number: -3, before: 'Seek Debt', desc: 'Consent from Crown shares for the first additional advancement above 3 Debt Marker advances.' },
          { number: -1, before: '', desc: 'Consent from a Crown share for any additional Debt Marker advances.' },
          { number: `+1`, before: 'Allocate Company Balance', desc: 'Allocate £4 to a Crown office.' }
        ],
        bear: [
          { number: -4, before: 'Seek Debt', desc: 'Consent from Crown shares for the first additional advancement above 3 Debt Marker advances.' },
          { number: -1, before: '', desc: 'Consent from a Crown share for any additional Debt Marker advances.' },
          { number: `+1`, before: 'Allocate Company Balance', desc: 'Allocate £4 to a Crown office.' }
        ],
        peacock: [
          { number: -6, before: 'Seek Debt', desc: 'Consent from Crown shares for the first additional advancement above 3 Debt Marker advances.' },
          { number: -1, before: '', desc: 'Consent from a Crown share for any additional Debt Marker advances.' },
          { number: `+1`, before: 'Allocate Company Balance', desc: 'Allocate £5 to a Crown office.' }
        ]
      },

      always_after: [
        { number: 0, before: 'Set Climate', desc: 'Flip a new AI card and set the climate on the Crown family board.' }
      ]
    },

    crown: {
      always_before: [
{ number: 0, before: 'Set Climate', desc: 'Flip a new AI card and set the climate on the Crown family board.' }
      ],
      climate: {
        bull: [
          { number: 0, before:  `Seek Debt`, desc: `Advance debt marker for each Presidency with an open home port.` },
          { number: -1, before: '', desc: 'Request an additional Company debt advancement. ' },
          { number: -2, before: '', desc: 'Request one less Company debt advancement.' }
        ],
stag: [
          { number: 0, before:  `Seek Debt`, desc: `Advance debt marker for each Presidency with an open home port.` },
          { number: -1, before: '', desc: 'Request an additional Company debt advancement. ' },
          { number: -2, before: '', desc: 'Request one less Company debt advancement.' }
        ],
lion: [
          { number: 0, before:  `Seek Debt`, desc: `Advance debt marker for each sea zone with less than 2 ships.` },
          { number: -2, before: '', desc: 'Request an additional Company debt advancement. ' },
          { number: -2, before: '', desc: 'Request one less Company debt advancement.' }
        ],
bear: [
          { number: 0, before:  `Seek Debt`, desc: `Advance debt marker for each Presidency where the Crown is Commander or has majority of total Army box pieces.` },
          { number: -2, before: '', desc: 'Request an additional Company debt advancement. ' },
          { number: -1, before: '', desc: 'Request one less Company debt advancement.' }
        ],
peacock: [
          { number: 0, before:  `Seek Debt`, desc: `Do not advance debt marker.` },
          { number: -3, before: ``, desc: `Request an additional Company debt advancement.`}
        ]
      },
      always_middle: [
        {number: 0, before: `Allocate Company Balance`, desc: `Allocate funds in priority order. Give as much as possible to any step that cannot be performed in full.`},
        {number: -1, before:``, desc:`At any point before each step, request that £3 (or less) be allocated to a specific office.`}
      ],
      steps : {
  bull: [
    { "number": 0, "before": "", "desc": "1. £4 to each Presidency with an open home port." },
    { "number": 0, "before": "", "desc": "2. £5 to Director of Trade/Governor General." }
  ],
  stag: [
    { "number": 0, "before": "", "desc": "1. £4 to each Presidency with an open home port." },
    { "number": 0, "before": "", "desc": "2. £1 to each Presidency with a Crown writer." },
    { "number": 0, "before": "", "desc": "3. £3 to Director of Trade/Governor General." }
  ],
  lion: [
    { "number": 0, "before": "", "desc": "1. £5 to Manager of Shipping for each Presidency with a sea zone with less than 2 ships." },
    { "number": 0, "before": "", "desc": "2. £4 to the Crown Presidency with most ships." },
    { "number": 0, "before": "", "desc": "3. £3 to Director of Trade/Governor General." },
    { "number": 0, "before": "", "desc": "4. £1 to each Presidency with a Crown writer." }
  ],
  bear: [
    { "number": 0, "before": "", "desc": "1. £4 to each Presidency where Crown has a majority of pieces in the Army box." },
    { "number": 0, "before": "", "desc": "2. £2 to each Presidency with a Crown Governor." },
    { "number": 0, "before": "", "desc": "3. £4 to Crown Governor General." },
    { "number": 0, "before": "", "desc": "4. £2 to each Presidency with a Crown writer." }
  ],
  peacock: [
    { "number": 0, "before": "", "desc": "1. £5 to each Presidency where Crown is Commander or has majority of officers." },
    { "number": 0, "before": "", "desc": "2. £2 to each Presidency with a Crown Governor." },
    { "number": 0, "before": "", "desc": "3. £5 to Crown Governor General." }
  ]
      },
      always_end : [
      {number: 0, before: '', desc: 'If there is a remainder, allocate remaining funds to the Manager of Shipping.'}
      ]
    }
  };

  // Get the relevant favor rules
  const getFavorRules = () => {
    if (currentPlayer === 'Player') {
      return [
        ...favorRules.player.always_before,
        ...favorRules.player.climate[climate as keyof typeof favorRules.player.climate] || [],
        ...favorRules.player.always_after
      ];
    }
    if (currentPlayer === `Crown`) {
      return[
        ...favorRules.crown.always_before,
        ...favorRules.crown.climate[climate as keyof typeof favorRules.crown.climate] || [],
        ...favorRules.crown.always_middle,
        ...favorRules.crown.steps[climate as keyof typeof favorRules.crown.steps] || [],
        ...favorRules.crown.always_end
      ]
    }
    return [];
  };

  const rules = getFavorRules();

  return (
    <div>
      <Typography variant="h3" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '5px', textDecoration: 'underline' }}>
        Chairman
      </Typography>
      
      <div style={{ marginTop: '5px' }}>
        {rules.map((rule, index) => (
          <div key={index} style={{ marginBottom: '8px', marginTop: '5px'}}>
            {favorIcon({ 
              number: rule.number, 
              description_before: rule.before, 
              description: rule.desc 
            })}
          </div>
        ))}
      </div>
    </div>
  );
}