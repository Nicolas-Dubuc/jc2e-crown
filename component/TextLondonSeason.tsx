"use client";
import React from 'react';
import { Typography } from '@mui/material';
import favorIcon from './FavorIcon';

interface LondonSeasonProps {
  deregulation: boolean;
}

export default function LondonSeason({ deregulation }: LondonSeasonProps) {

  const favorRules = {
    always_before: [
        { number: 0, before: '', desc: 'At the start of this phase (before retirements) you may :' },
        { number : -2, before: '', desc: 'Take £1 from the Crown family treasury.'},
        { number: 0, before: 'Retirements', desc: 'The Crown will retire pensioners one at a time, each time choosing the highest VP prize spending no more than half (rounded up) of their remaining family treasury. The Crown will only retire to the £2 space if it entitles them to a card from the London Season.'},
        { number: 0, before: '', desc: '[HARD/EXPERT ONLY] During Final Retirement, the Crown will spend as much as possible on pensioners. Once the Crown has completed their retirements, you may:'},
        { number : -1, before: '', desc: 'Take £1 from the Crown family treasury.'},
      ],
      special_retirement: [
        { number: 0, before: 'Special Retirements', desc: 'When Deregulation is in effect, the Crown will take the single highest VP special retirement they can afford.'}
      ],
      always_after: [
        { number: 0, before: 'Prestige Cards', desc: 'The Crown selects a card from the London Season based on the location of the shaded card at the top of the faceup AI card. If that card not available, they choose the next card to the right, wrapping around to the leftmost card.' },
{ number: 0, before: '', desc: '- The Crown ignores any text effects on Spouse cards but receives retirement discounts and victory points.'},
{ number: 0, before: '', desc: '- Any Crown blackmail cards are kept facedown.'},
{ number: 0, before: '', desc: '- Any enterprise cards are awarded faceup and are effective for the Crown.'},
{ number: 0, before: '', desc: '- If any card says the Crown “may” do something, they will not.'},
{ number: 0, before: '', desc: '- If any card requires permission or consent from the Crown, they will not give it.'},
{ number: -5, before: '', desc: 'Take an enterprise prestige card from the Crown.'},
{ number: -4, before: '', desc: 'Take a blackmail card from the Crown. Note: You may not peek at blackmail cards held by the Crown.'},

]
    
  };

  // Get the relevant favor rules
  const getFavorRules = () => {
    if (deregulation) {
      return[
        ...favorRules.always_before,
        ...favorRules.special_retirement,
        ...favorRules.always_after
      ];

    } else {
      return[
        ...favorRules.always_before,
        ...favorRules.always_after
      ]

    }
  };

  const rules = getFavorRules();

  return (
    <div>
      <Typography variant="h3" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '5px', textDecoration: 'underline' }}>
        London Season
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