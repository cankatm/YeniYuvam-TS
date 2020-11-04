import { StyleSheet } from 'react-native';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const styles = StyleSheet.create({
  mainHeaderContainer: {
    width: defaults.WIDTH,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeaderTitle: {
    color: colors.blueDark
  },
});

export default styles;
