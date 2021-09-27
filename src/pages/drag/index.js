import React from "react";
import { View, Text } from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import styles from './style';

export default function Drag() {

    const posX = useSharedValue(0);
    const posY = useSharedValue(0);


    const onGestureEvent = useAnimatedGestureHandler({
        onStart() {},
        onActive(event) {
            posX.value = event.translationX;
            posY.value = event.translationY;
        },
        onEnd() {},
    })

    const positionStyle = useAnimatedStyle(() => {
        return{
            transform: [
                { translateX: posX.value},
                { translateY: posY.value}
            ]
        }
    })

    return (
        <View style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[styles.container, positionStyle]} />

            </PanGestureHandler >
        </View >
    )
}

