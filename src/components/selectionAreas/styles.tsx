import { StyleSheet } from 'react-native';

import * as colors from '@helpers/colors';

const styles = StyleSheet.create({
  selectionAreaContainer: {
    marginTop: 8
  },
  selectionAreaButtonContainer: {
    height: 40,
    borderRadius: 16,
    borderColor: colors.blueDark,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  selectionAreaButtonText: {
    color: colors.greyLight,
    marginLeft: 8
  },
  selectionAreaIconContainer: {
    color: colors.blueDark,
    marginRight: 8
  },
});

export default styles;
