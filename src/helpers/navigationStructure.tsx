import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  IntroScreen,
  SearchScreen,
  SearchResultsScreen,
  SearchDetailScreen,
  FavoritesScreen,
  AddScreen,
  BlogScreen,
  BlogDetailsScreen,
  SignupScreen,
  LoginScreen,
  MyProfileScreen,
} from '@src/screens';

import {
  likeHoverIcon,
  likeNormalIcon,
  paperHoverIcon,
  paperNormalIcon,
  personHoverIcon,
  personNormalIcon,
  searchHoverIcon,
  searchNormalIcon,
  addIcon,
} from '@helpers/images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={'SearchScreen'}
    >
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
      <Stack.Screen
        name={'SearchResultsScreen'}
        component={SearchResultsScreen}
      />
      <Stack.Screen
        name={'SearchDetailScreen'}
        component={SearchDetailScreen}
      />
    </Stack.Navigator>
  );
};

const BlogStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={'BlogScreen'}
    >
      <Stack.Screen name={'BlogScreen'} component={BlogScreen} />
      <Stack.Screen name={'BlogDetailsScreen'} component={BlogDetailsScreen} />
    </Stack.Navigator>
  );
};

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={'SignupScreen'}
    >
      <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'MyProfileScreen'} component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let imgSource;

          if (route.name === 'Search') {
            imgSource = focused ? searchHoverIcon : searchNormalIcon;
          } else if (route.name === 'FavoritesScreen') {
            imgSource = focused ? likeHoverIcon : likeNormalIcon;
          } else if (route.name === 'AddScreen') {
            imgSource = addIcon;
          } else if (route.name === 'Blog') {
            imgSource = focused ? paperHoverIcon : paperNormalIcon;
          } else if (route.name === 'MyProfile') {
            imgSource = focused ? personHoverIcon : personNormalIcon;
          }

          return (
            <Image
              source={imgSource}
              style={{
                width: route.name === 'AddScreen' ? 36 : 22,
                height: route.name === 'AddScreen' ? 36 : 22,
              }}
              resizeMode='contain'
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name='Search' component={SearchStack} />
      <Tab.Screen name='FavoritesScreen' component={FavoritesScreen} />
      <Tab.Screen name='AddScreen' component={AddScreen} />
      <Tab.Screen name='Blog' component={BlogStack} />
      <Tab.Screen name='MyProfile' component={MyProfileStack} />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SearchScreen'}
      screenOptions={screenOptions}
    >
      {true ? (
        <>
          <Stack.Screen name={'IntroScreen'} component={IntroScreen} />
          <Stack.Screen name={'MainTab'} component={MainTab} />
        </>
      ) : (
        <>
          <Stack.Screen name={'MainTab'} component={MainTab} />
        </>
      )}
    </Stack.Navigator>
  );
};
