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
