import React, { useEffect } from "react";
import { View, Text, StatusBar } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate, withSequence } from 'react-native-reanimated';
import styles from './style';
import heroImg from '../../assets/hero.png'

export default function Login() {

  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30)

  useEffect(() => {
    imagePosition.value = withTiming(0, {
      duration: 500,
      easing: Easing.circle
    }, 
    () => {
      titlePosition.value = withSequence(
        withTiming(0, {
        duration: 1000,
        easing: Easing.bounce
      }),
      withTiming(-320, {
        duration: 500,
        easing: Easing.circle
      }),
      );
    },
    );
  }, [])

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      )
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }],

    }
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#13131A' />
      <Animated.Image source={heroImg} style={[styles.hero, heroStyle]} />
      <Animated.Text style={[styles.title, titleStyle]}>Bem-Vindo ao App</Animated.Text>
    </View>
  )
}

