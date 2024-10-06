import { Link, Stack, Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          headerTitleStyle: {
            color: '#FFF',
          },
          headerShown: false,
        }}>
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
            title: 'Lots tirage au sort',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
            title: 'Lots tirage au sort',
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="verification-code"
          options={{
            headerShown: false,
            title: 'Lots tirage au sort',
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="verification-success"
          options={{
            headerShown: false,
            title: 'Lots tirage au sort',
            headerTintColor: 'white',
          }}
        />
      </Stack>
    </>
  );
}
