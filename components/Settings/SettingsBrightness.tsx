import React, { useEffect, useState } from "react";
import { ThemedView } from "../ThemedView";
import Slider from "@react-native-community/slider";
import { ThemedText } from "../ThemedText";
import BrightnessBar from "./BrightnessBar";

type Props = {};

const SettingsBrightness = (props: Props) => {
  const [brightnessValue, setBrightnessValue] = useState<Promise<number>>();

  return (
    <ThemedView style={{ width: "100%", gap: 10 }}>
      <ThemedText>Brightness</ThemedText>
      <BrightnessBar />
    </ThemedView>
  );
};

export default SettingsBrightness;
