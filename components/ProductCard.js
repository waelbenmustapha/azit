import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ProductCard = (props) => {
  const element = props.product;
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.productImage}
        resizeMode="contain"
        source={{ uri: element.image }}
      />
      <View style={styles.textDescriptionPriceContainer}>
        <View style={styles.titleAndDescription}>
          <Text numberOfLines={1} style={styles.titleText}>
            {element.title}
          </Text>
          <LinearGradient
            colors={["#26ffe6", "#0075f2"]}
            start={[-0.3, 0]}
            end={[1, 0]}
            style={styles.priceTag}
          >
            <Text style={styles.priceTagText}>{element.price} $</Text>
          </LinearGradient>
        </View>
        <Text numberOfLines={3} style={styles.descriptionText}>
          {element.description}
        </Text>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textDescriptionPriceContainer: {
    paddingLeft: 5,
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  productImage: { flex: 1, height: 80 },
  card: {
    borderColor: "#0075f2",
    borderWidth: 0.5,
    margin: 10,
    padding: 6,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  shoppingcardloadingsize: { width: 400, height: 300 },
  titleAndDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    flex: 3,
    fontSize: 14,
    padding: 3,
    fontWeight: "bold",
    opacity: 0.75,
  },
  priceTag: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    color: "white",
    marginTop: -6,
    marginRight: -6,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  priceTagText: {
    textAlign: "center",
    color: "white",
  },
  descriptionText: {
    fontSize: 12,
    paddingRight: 10,
    paddingVertical: 10,
  },
});
export default ProductCard;
