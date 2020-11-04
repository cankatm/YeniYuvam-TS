import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';

import { DismissKeyboard } from '@components/dismissKeyboard';
import { Line } from '@components/lines';
import { Input } from '@components/inputs';
import { CenteredArea } from '@components/centeredAreas';
import { BigButton } from '@components/buttons';
import { MainHeader } from '@components/headers';
import styles from './styles';
import * as colors from '@helpers/colors';

const AddScreen: React.FC = () => {
  const [postValues, setpostValues] = useState({
    postLocation: 'Ankara',
    postType: '0',
    postContent: 'Yavrumuza sıcak bir yuva arıyoruz.',
    postPetName: 'Bilinmiyor',
    postPetAge: '4',
    postPetType: '0',
    postPetBreed: 'Bulldog',
    postPetGender: '1',
    postPetCastrated: '0',
  });

  const handleSendPostPress = async () => {
    const {
      postType,
      postPetAge,
      postPetType,
      postPetGender,
      postPetCastrated,
      ...values
    } = postValues;
    const input = {
      ...values,
      postType: Number(postType),
      postPetAge: Number(postPetAge),
      postPetType: Number(postPetType),
      postPetGender: Number(postPetGender),
      postPetCastrated: Number(postPetCastrated),
      postOwnerID: '1234567890',
      postOwnerName: 'Mert Cankat',
      postOwnerEmail: 'mertcankat@test.com',
      createdAt: new Date(),
    };

    // await API.graphql(graphqlOperation(createPost, { input }));
  };

  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <CenteredArea horizontal>
          <MainHeader title='İLAN EKLE' />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postContent: string) =>
              setpostValues({ ...postValues, postContent })
            }
            value={postValues.postContent}
            autoCapitalize='none'
            returnKeyType='next'
            label='postContent'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postType: string) =>
              setpostValues({ ...postValues, postType })
            }
            value={postValues.postType}
            autoCapitalize='none'
            returnKeyType='next'
            label='postType'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetName: string) =>
              setpostValues({ ...postValues, postPetName })
            }
            value={postValues.postPetName}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetName'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postLocation: string) =>
              setpostValues({ ...postValues, postLocation })
            }
            value={postValues.postLocation}
            autoCapitalize='none'
            returnKeyType='next'
            label='postLocation'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetGender: string) =>
              setpostValues({ ...postValues, postPetGender })
            }
            value={postValues.postPetGender}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetGender'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetAge: string) =>
              setpostValues({ ...postValues, postPetAge })
            }
            value={postValues.postPetAge}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetAge'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetType: string) =>
              setpostValues({ ...postValues, postPetType })
            }
            value={postValues.postPetType}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetType'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetBreed: string) =>
              setpostValues({ ...postValues, postPetBreed })
            }
            value={postValues.postPetBreed}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetBreed'
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            onChangeText={(postPetCastrated: string) =>
              setpostValues({ ...postValues, postPetCastrated })
            }
            value={postValues.postPetCastrated}
            autoCapitalize='none'
            returnKeyType='next'
            label='postPetCastrated'
          />
        </CenteredArea>
        <Line />

        <CenteredArea horizontal marginTop={16}>
          <BigButton
            backgroundColor={colors.greenPastel}
            text='İlan Ver'
            onPress={handleSendPostPress}
          />
        </CenteredArea>
      </View>
    </DismissKeyboard>
  );
};

export default AddScreen;
