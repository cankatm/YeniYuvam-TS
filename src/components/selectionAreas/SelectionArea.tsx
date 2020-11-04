import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import * as colors from '@helpers/colors';
import * as defaults from '@helpers/defaults';

interface SelectionAreaProps {
  title: string,
  value?: string,
  small?: boolean
}

const SelectionArea: React.FC<SelectionAreaProps> = ({ title, value, small }) => {
  return (
    <View style={[styles.selectionAreaContainer, { width: small ? defaults.WIDTH_SMALL : defaults.WIDTH }]} >
      <Text>{title}</Text>

      <TouchableOpacity>
        <View style={[styles.selectionAreaButtonContainer, , { width: small ? defaults.WIDTH_SMALL : defaults.WIDTH }]}>
          <Text style={[styles.selectionAreaButtonText, { color: value ? colors.blueDark : colors.greyLight }]}>{value || '-'}</Text>
          <Text style={styles.selectionAreaIconContainer}>{">"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SelectionArea;

