import { StyleSheet } from 'react-native';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const styles = StyleSheet.create({
  bigButtonContainer: {
    width: defaults.WIDTH,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  bigButtonText: {
    color: colors.white
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: colors.blueDark,
    fontSize: 16
  },
  resultButtonImage: {
    width: (defaults.WIDTH - 16) / 2,
    height: (defaults.WIDTH - 16) / 2
  },
  resultButtonBadgeContainer: { 
    position: 'absolute', 
    top: 12, 
    right: 8 
  },
  resultButtonText: {
    marginTop: 8,
    marginBottom: 16,
    color: colors.blueDark,
    fontSize: 16
  },
  roundedButtonContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 10
  },
  roundedButtonText: {
    fontSize: 16
  },
});

export default styles;
