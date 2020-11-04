import React, { Component, ReactComponentElement } from 'react';
import { View } from 'react-native';

import styles from './styles';

interface CenteredAreaProps {
  marginTop?: number,
  marginBottom?: number,
  vertical?: boolean,
  horizontal?: boolean,
}

const CenteredArea: React.FC<CenteredAreaProps> = ({
  children,
  marginTop = 0,
  marginBottom = 0,
  vertical = false,
  horizontal = false,
}) => {
  return (
    <View
      style={[
        styles.centeredAreaContainerStyle,
        {
          marginTop,
          marginBottom,
          alignItems: horizontal ? 'center' : 'flex-start',
          justifyContent: vertical ? 'center' : 'flex-start',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default CenteredArea;
