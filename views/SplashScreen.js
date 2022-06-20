import { View, StyleSheet, Easing, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const SplashScreen = ({ navigation }) => {
  //animation starts from 0 opacity
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //after 1200 ms replace splash screen with Home
    const itnerval = setTimeout(() => {
      navigation.replace("Home");
    }, 1200);

    //Start the animation on page start
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      easing: Easing.linear, // the style of animation
      duration: 450,
    }).start();

    // Use Effect Cleanup function , to clear interval on Exit
    return () => {
      clearInterval(itnerval);
    };
  }, [fadeAnim]);

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          styles.animationFadeInStyle,
          {
            transform: [
              {
                scale: fadeAnim,
              },
            ],
          },
        ]}
      >
        <Image
          resizeMode="stretch"
          style={styles.splashScreenSize}
          source={require("../assets/azit-logo.png")}
        />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreenSize: { width: "80%", height: "40%" },
  animationFadeInStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "#333",
  },
});

export default SplashScreen;
