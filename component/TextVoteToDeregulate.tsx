"use client";
import React from 'react';
import { Typography } from '@mui/material';
import favorIcon from './FavorIcon';

interface VoteDeregulateProps {
  deregulation: boolean;
  climate: string;
}

export default function VoteDeregulate({ deregulation, climate }: VoteDeregulateProps) {

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
{ number: 0, before: '', desc: 'The Crown will never initiate The Vote to Deregulate when they are Prime Minister unless they must. They will always vote last and against. They may spend up to the amount below (once) if it moves the Votes marker to a failing position :' }
      ],
      climate: {
        bull: [
          { number: 0, before: ``, desc: `£6` }
        ],
stag: [
          { number: 0, before: ``, desc: `£5` }
        ],
lion: [
          { number: 0, before: ``, desc: `£4` }
        ],
bear: [
          { number: 0, before: ``, desc: `£3` }
        ],
peacock: [
          { number: 0, before: ``, desc: `£2` }
        ]
      }
    }
  };

  // Get the relevant favor rules
  const getFavorRules = () => {
    if (deregulation) {
      return [];
    } else {
      return[
        ...favorRules.crown.always_before,
        ...favorRules.crown.climate[climate as keyof typeof favorRules.crown.climate] || []
      ]
    }
  };

  const rules = getFavorRules();

  return (
    <div>
      {!deregulation && (
      <Typography variant="h3" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '5px', textDecoration: 'underline' }}>
        Vote to Deregulate
      </Typography>
      )}
      
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