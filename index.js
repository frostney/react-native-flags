// @flow

import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

type Props = {
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 64, code, type = 'shiny', style }: Props) => {
  // @TODO Set an initial value.
  const [source, setSource] = useState();

  // Load flags asynchronously.
  useEffect(() => {
    let isMounted = true;

    (async () => {
      const flags = await import('./flags');
      const flag = flags[type][`icons${size}`][code];
      const unknownFlag = flags[type][`icons${size}`]['unknown'];

      if (isMounted) {
        setSource(flag || unknownFlag);
      }
    })();

    return () => {
      // Anti-pattern.
      // @TODO Abort import instead.
      isMounted = false;
    };
  }, [type, size, code, setSource]);

  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
