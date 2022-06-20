import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import LoadingCartComponent from "../components/LoadingCartComponent";
const Home = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    try {
      axios
        .get("https://fakestoreapi.com/products")
        .then((result) => setProducts(result.data))
        .catch((err) => console.log("An error occured in axios" + err));
    } catch (err) {
      console.log(" An error occured in get Products" + err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ width: "100%" }}>
        {products.length == 0 ? (
          <LoadingCartComponent />
        ) : (
          <ScrollView>
            {products.map((element) => (
              <ProductCard key={element.id} product={element} />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
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
});

export default Home;
