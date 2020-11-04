import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CenteredArea } from '@components/centeredAreas';
import { MainHeader } from '@components/headers';
import { SelectionArea } from '@components/selectionAreas';
import { BigButton } from '@components/buttons';
import styles from './styles';
import * as colors from '@helpers/colors';

function SearchScreen() {
  const navigation = useNavigation();
  const handleSearchPress = () => {
    navigation.navigate('SearchResultsScreen');
  };

  const handleRandomSearchPress = () => {
    navigation.navigate('SearchResultsScreen');
  };

  return (
    <View>
      <CenteredArea horizontal>
        <MainHeader title='ARA' />
      </CenteredArea>

      <CenteredArea horizontal>
        <SelectionArea title='Lokasyon' value='' />
      </CenteredArea>

      <CenteredArea horizontal>
        <SelectionArea title='İlan Türü' value='Sahiplendirme' />
      </CenteredArea>

      <CenteredArea horizontal>
        <View style={styles.searchSelectionButtonsContainer}>
          <CenteredArea horizontal>
            <SelectionArea title='Tür' value='Kedi' small />
          </CenteredArea>
          <CenteredArea horizontal>
            <SelectionArea title='Cins' value='Hepsi' small />
          </CenteredArea>
        </View>
      </CenteredArea>

      <CenteredArea horizontal>
        <View style={styles.searchSelectionButtonsContainer}>
          <CenteredArea horizontal>
            <SelectionArea title='Cinsiyet' value='Dişi' small />
          </CenteredArea>
          <CenteredArea horizontal>
            <SelectionArea title='Yaş' value='Hepsi' small />
          </CenteredArea>
        </View>
      </CenteredArea>

      <CenteredArea horizontal marginTop={16}>
        <BigButton
          backgroundColor={colors.bluePastel}
          text='Ara'
          onPress={handleSearchPress}
        />
      </CenteredArea>

      <CenteredArea horizontal marginTop={8}>
        <BigButton
          backgroundColor={colors.greenPastel}
          text='Rastgele Ara'
          onPress={handleRandomSearchPress}
        />
      </CenteredArea>
    </View>
  )
}

export default SearchScreen

