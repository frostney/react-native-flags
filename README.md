# react-native-flags
Fun with flags (in React Native)!

Display flags in React Native with the help of [GoSquared](https://www.gosquared.com) - [2600 Flag Icon Set](https://www.gosquared.com/resources/flag-icons/).

![](https://github.com/frostney/react-native-flags/blob/master/docs/flags.png)

### Usage
```javascript
import Flag from 'react-native-flags';

const JustAFlag = () =>
  <Flag
    code="DE"
    size={32}
  />
```

### Props  
#### from (optional)
#### Type: `{}`
#### Default value: `await import('./flags')` (all available flags).
The flags you want to use.

By default, [all available flags](https://github.com/frostney/react-native-flags/blob/master/flags/index.js) are bundled/imported.
However, *bundling all flags is discouraged*, because you might not need all of them.
Instead, you could import your flags beforehand and use this prop to pass your flags.

Below are a few examples:

Load all flat 32 flags:
```javascript
import Flag from 'react-native-flags';
import * as allFlatFlags32 from 'react-native-flags/flags/flat/32';

const JustAFlag = ({ code }) =>
  <Flag
    from={allFlatFlags32}
    code={code}
    size={32}
    type="flat"
  />
```

Load all shiny 16/24/32/48/64 flags:
```javascript
import Flag from 'react-native-flags';
import * as allShinyFlags from 'react-native-flags/flags/shiny';

const JustAFlag = ({ code, size }) =>
  <Flag
    from={allShinyFlags}
    code={code}
    size={size}
    type="shiny"
  />
```

Load all flat/shiny 16/24/32/48/64 flags.
This is the same as removing the `from` prop:
```javascript
import Flag from 'react-native-flags';
import * as allFlags from 'react-native-flags/flags';

const JustAFlag = ({ code, size, type }) =>
  <Flag
    from={allFlags}
    code={code}
    size={size}
    type={type}
  />
```

#### code  
#### Type: `String`  
The ISO code of a flag, for example "DE", "FR" or "GB"

#### type  
#### Type: `String` (Allowed values: `flat` or `shiny`)  
#### Default value: `shiny`  
Display the flags shiny or flat

#### size  
#### Type: `number` (Allowed values: `16`, `24`, `32`, `48` or `64`)  
#### Default value: `64`  
The size of a flag in points.

#### style (optional)  
Allows additional styles to be passed through.

### License
MIT
