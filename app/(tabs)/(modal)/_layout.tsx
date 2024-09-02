import { Stack } from "expo-router";
import React from "react";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='settings' />
      <Stack.Screen name='generalSettings' />
      <Stack.Screen name='databaseSettings' />
      <Stack.Screen name='UserSettings' />
      <Stack.Screen name='PersonalInformations' />
      <Stack.Screen name='EditAccount' />
      <Stack.Screen name='ChangePassword' />
      <Stack.Screen name='editPage' />
    </Stack>
  );
};

export default _layout;
