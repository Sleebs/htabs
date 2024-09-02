import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import * as Brightness from "expo-brightness";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {};

const BrightnessBar = (props: Props) => {
  const [sliderValue, setSliderValue] = useState<number>();
  const updateBrightnesst = (value: number) => {
    Brightness.setBrightnessAsync(value);
    setSliderValue(value);
  };
  const [a, setA] = useState<Promise<number>>();
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status !== "granted") return;

      const brightness = await Brightness.getBrightnessAsync();
      updateBrightnesst(brightness);
    })();
  }, [sliderValue]);
  return (
    <ThemedView style={{ alignItems: "center", gap: 10 }}>
      <ThemedView style={{ flexDirection: "row", gap: 13 }}>
        <MaterialIcons name='brightness-low' size={24} color='white' />
        <Slider
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='#FFFFFF'
          maximumTrackTintColor='#FFFF00'
          thumbTintColor='#FFFFFF'
          value={sliderValue}
          onValueChange={updateBrightnesst}
          step={0.01}
          style={{ width: "80%" }}
        />
        <MaterialIcons name='brightness-high' size={24} color='white' />
      </ThemedView>
      <ThemedText>
        {sliderValue ? Math.floor(sliderValue * 100) : null}
        {/* {permissionResponse?.granted} */}
      </ThemedText>
    </ThemedView>
  );
};

export default BrightnessBar;
