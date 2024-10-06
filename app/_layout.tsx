import React from 'react'
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs, useRouter } from "expo-router";
import { Image } from "expo-image";
import { useEffect } from "react";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const homeFocused = require("../../assets/icons/home-active.svg");
const home = require("../../assets/icons/home-inactive.svg");
const calendarFocused = require("../../assets/icons/calendar-active.svg");
const calendar = require("../../assets/icons/calendar-inactive.svg");
const profileFocused = require("../../assets/icons/profile-active.svg");
const profile = require("../../assets/icons/profile-inactive.svg");

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const [loaded] = useFonts({
    Righteous: require("../assets/fonts/Righteous.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingHorizontal:0,
          height: 80,
        },
        tabBarItemStyle: {
          width: "auto",
          padding: 2,
          flexGrow: 1,
          alignSelf: 'flex-start'
        },
        tabBarShowLabel: false,
    
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <Image contentFit="contain" source={homeFocused} style={{ width: 24, height: 24 }} />
              );
            } else {
              return <Image contentFit="contain" source={home} style={{ width: 24, height: 24 }} />;
            }
          },
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: "Task",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <Image
                  contentFit="contain"
                  source={calendarFocused}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image contentFit="contain" source={calendar} style={{ width: 26, height: 26 }} />
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <Image
                  contentFit="contain"
                  source={profileFocused}
                  style={{ width: 26, height: 26 }}
                />
              );
            } else {
              return (
                <Image contentFit="contain" source={profile} style={{ width: 26, height: 26 }} />
              );
            }
          },
        }}
      />
    </Tabs>
    </>
  );
}