import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import { DismissKeyboard } from '@components/dismissKeyboard';
import { MainHeader } from '@components/headers';
import { Line } from '@components/lines';
import { Input } from '@components/inputs';
import { CenteredArea } from '@components/centeredAreas';

const LoginScreen = () => {
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const [loginValues, setLoginValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  return (
    <DismissKeyboard>
      <View style={{ flex: 1 }}>
        <CenteredArea horizontal>
          <MainHeader title='GİRİŞ YAP' />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            ref={emailRef}
            onChangeText={(email: string) => setLoginValues({ ...loginValues, email })}
            value={loginValues.email}
            autoCapitalize='none'
            returnKeyType='next'
            keyboardType='email-address'
            label='Email'
            onSubmitEditing={() => passwordRef.current && passwordRef.current.focus()}
          />
        </CenteredArea>

        <Line />
        <CenteredArea horizontal>
          <Input
            ref={passwordRef}
            onChangeText={(password: string) =>
              setLoginValues({ ...loginValues, password })
            }
            value={loginValues.password}
            autoCapitalize='none'
            returnKeyType='done'
            label='Password'
            secureTextEntry={true}
            onSubmitEditing={() => console.log(loginValues)}
          />
        </CenteredArea>
        <Line />
      </View>
    </DismissKeyboard>
  );
};

export default LoginScreen;
