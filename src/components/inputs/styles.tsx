import { StyleSheet } from 'react-native';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const INPUT_HEIGHT = 40;
const INPUT_LABEL_WIDTH = 80;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: defaults.WIDTH,
    height: INPUT_HEIGHT,
  },
  inputTextAreaContainer: {
    height: INPUT_HEIGHT,
    width: INPUT_LABEL_WIDTH,
    justifyContent: 'center',
  },
  inputTextInput: {
    height: INPUT_HEIGHT,
    width: defaults.WIDTH - INPUT_LABEL_WIDTH,
  },
});

export default styles;
