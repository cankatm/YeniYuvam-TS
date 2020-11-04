import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DismissKeyboard } from '@components/dismissKeyboard';
import { MainHeader } from '@components/headers';
import { Line } from '@components/lines';
import { Input } from '@components/inputs';
import { BigButton } from '@components/buttons';
import { CenteredArea } from '@components/centeredAreas';
import * as colors from '@helpers/colors';

const SignupScreen = () => {
  const navigation = useNavigation();
  const nameRef = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const phoneRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const [signValues, setSignValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  async function handleSignUpPress() {
    const { name, email, phone, password } = signValues;
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email, // optional
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <CenteredArea horizontal>
          <MainHeader title='KAYDOL' />
        </CenteredArea>
        <Line />
        <CenteredArea horizontal>
          <Input
            ref={nameRef}
            onChangeText={(name: string) => setSignValues({ ...signValues, name })}
            value={signValues.name}
            autoCapitalize='none'
            returnKeyType='next'
            label='Name'
            onSubmitEditing={() => emailRef.current && emailRef.current.focus()}
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            ref={emailRef}
            onChangeText={(email: string) => setSignValues({ ...signValues, email })}
            value={signValues.email}
            autoCapitalize='none'
            returnKeyType='next'
            keyboardType='email-address'
            label='Email'
            onSubmitEditing={() => phoneRef.current && phoneRef.current.focus()}
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            ref={phoneRef}
            onChangeText={(phone: string) => setSignValues({ ...signValues, phone })}
            value={signValues.phone}
            autoCapitalize='none'
            returnKeyType='next'
            label='Phone'
            onSubmitEditing={() =>passwordRef.current && passwordRef.current.focus()}
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            ref={passwordRef}
            onChangeText={(password: string) =>
              setSignValues({ ...signValues, password })
            }
            value={signValues.password}
            autoCapitalize='none'
            returnKeyType='done'
            label='Password'
            secureTextEntry={true}
            onSubmitEditing={() => console.log(signValues)}
          />
        </CenteredArea>
        <Line />

        <CenteredArea horizontal marginTop={16}>
          <BigButton
            backgroundColor={colors.greenPastel}
            text='Sign Up'
            onPress={handleSignUpPress}
          />
        </CenteredArea>

        <CenteredArea horizontal marginTop={16}>
          <BigButton
            backgroundColor={colors.bluePastel}
            text='Login'
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </CenteredArea>
      </View>
    </DismissKeyboard>
  );
};

export default SignupScreen;
