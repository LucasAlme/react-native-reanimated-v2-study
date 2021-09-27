import React, { useEffect } from "react";
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import styles from './style';
export default function Scroll() {

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
    });

    const headerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 150],
                [300, 50],
                Extrapolate.CLAMP
            )
        }

    })

    const avatarStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [100, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    const titleStyle = useAnimatedStyle(() =>{
        return {
            opacity: interpolate(
                scrollY.value,
                [100, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })
    return (
        <View>
            <Animated.ScrollView contentContainerStyle={{ paddingTop: 300 }} onScroll={scrollHandler} scrollEventThrottle={16}>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
                <Text style={styles.listItem}>Item da lista</Text>
            </Animated.ScrollView>
            <Animated.View style={[styles.header, headerStyle]}>
                <Animated.Image style={[styles.avatar, avatarStyle]} source={{ uri: 'https://github.com/LucasAlme.png' }} />
                <Animated.Text style={[styles.name, titleStyle]}>Lucas Almeida</Animated.Text>
            </Animated.View>
        </View>
    )
}

