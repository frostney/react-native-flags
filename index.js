// @flow

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as flags from './flags';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
  onPress: void
};

const Flag = ({ size = 64, code, type = 'shiny', style, onPress }: Props) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  const flagImage =
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  
  if (!onPress) return flagImage;
  
  return (
    <TouchableOpacity onPress={onPress}>
      {flagImage}
    </TouchableOpacity>
  );
};

export default Flag;
