// @flow

import React from 'react';
import { Image } from 'react-native';
import flags from './flags';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
};

const Flag = ({ size, code, type = 'shiny' }: Props) => {
  const flag = flags[type][size][code];
  const unkownFlag = flags[type][size]['unknown'];

  return <Image source={flag || unkownFlag}} />;
};

export default Flag;
