import { Stack } from "expo-router";
import React from "react";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='htabsSettings' />
      <Stack.Screen name='termsAndConditions' />
    </Stack>
  );
};

export default _layout;
