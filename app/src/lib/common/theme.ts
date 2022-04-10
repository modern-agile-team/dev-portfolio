import React from 'react';
import { GapTypes, GradationTypes } from './types/themes';

export const GAPS: GapTypes = {
  NARROWER: '10px',
  NARROW: '15px',
  NORMAL: '20px',
  WIDE: '25px',
  WIDER: '30px',
};

export const GRADATION: GradationTypes = {
  MID_NIGHT: {
    backgroundColor: '#0c1631b9',
    color: '#fff',
  },
  BLOSSOM: {
    backgroundColor: '#ffa1b2b8',
    color: '#fff',
  },
  FRUITS: {
    backgroundColor: '#fbbd5ac5',
    color: '#fa4529',
  },
  BARE_BARE: {
    backgroundColor: 'linear-gradient(#c2e3f4b1, 70%, #efb630b1)',
    color: '#030305',
  },
  TROPIC_GREEN: {
    backgroundColor: '#007f53a9',
    color: '#f6f1ed',
  },
  POPPY: {
    backgroundColor: '#90c8b6c0',
    color: '#ff4848',
  },
};
