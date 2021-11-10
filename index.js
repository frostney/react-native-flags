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

/**
 * Find a flag exported from ./flags' sub-directories
 * (or directories that match the same structure)
 * and return it.
 *
 * @example
 * import * as flags from './flags';
 * import * as flatFlags from './flags/flat';
 * import * as flatFlags16 from './flags/flat/16';
 *
 * const emptyFlags = {};
 * const props = { type: 'flat', size: 16, code: 'ZW' };
 * 
 * getFlag(flatFlags16, props) === getFlag(flatFlags, props); // > true
 * getFlag(flatFlags, props) === getFlag(flags, props); // > true
 * getFlag(emptyFlags, props); // > null
 */
const getFlag = (flags: {}, { type, size, code }: {
  type: string,
  size: number,
  code: string
}) => {
  const sizeKey = `icons${size}`;

  return (type in flags // ./flags was imported.
    ? flags[type][sizeKey][code]
    : sizeKey in flags // ./flags/{type} was imported.
    ? flags[sizeKey][code]
    : code in flags // ./flags/{type}/{size} was imported.
    ? flags[code]
    : null
  );
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
