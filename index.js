// @flow

import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

type Props = {
  from?: {},
  size: 16 | 24 | 32 | 48 | 64,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const getFlag = (flags: {}, { type, size, code }: {
  type: string,
  size: number,
  code: string
}) => {
  const sizeKey = `icons${size}`;

  return flags[type][sizeKey][code];
};

const Flag = ({ from, size = 64, code, type = 'shiny', style }: Props) => {
  // @TODO Set an initial value.
  const [source, setSource] = useState();

  // Load flags asynchronously.
  useEffect(() => {
    let isMounted = true;

    (async () => {
      // Use our flags or import all of them.
      const flags = from || await import('./flags');
      const flag = getFlag(flags, { type, size, code });
      const unknownFlag = getFlag(flags, { type, size, code: 'unknown' });

      if (isMounted) {
        setSource(flag || unknownFlag);
      }
    })();

    return () => {
      // Anti-pattern.
      // @TODO Abort import instead.
      isMounted = false;
    };
  }, [from, type, size, code, setSource]);

  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
