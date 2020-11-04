import React from 'react';
import { View, Text } from 'react-native';

import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

const Line = ({
  backgroundColor = colors.blueDark,
  width = defaults.WIDTH_FULL,
  height = 1,
}) => {
  return <View style={{ backgroundColor, width, height }} />;
};

export default Line;
