import { Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const LoadingCartComponent = () => {
  return (
    <LinearGradient
      colors={["#26ffe6", "#0075f2"]}
      start={[-0.3, 0]}
      end={[1, 0]}
      style={styles.container}
    >
      <Image
        resizeMode="stretch"
        style={styles.shoppingcardloadingsize}
        source={require("../assets/shoppingLoading.gif")}
      />
      <Text style={styles.loadingText}>
        Please wait while we load the products ...
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%", justifyContent: "center" },
  loadingText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  shoppingcardloadingsize: { width: 400, height: 300 },
});
export default LoadingCartComponent;
