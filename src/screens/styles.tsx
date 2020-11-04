import { StyleSheet } from 'react-native';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const styles = StyleSheet.create({
  searchSelectionButtonsContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: defaults.WIDTH
  },
});

export default styles;
