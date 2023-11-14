import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../StoreAndReducer/productActions";
import NavBar from "../NavBar/NavBar";

import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';

const Home = () => {
  const dispatch = useDispatch();
   
  const products = useSelector(state => state.productItem.products);
//   const cart = useSelector(state => state.products.cart);
  const error = useSelector((state) => state.error);
console.log(error)

    
  useEffect(() => {
       dispatch(fetchProducts());
      }, []);


    //Add Item Dispatch
  const buttonCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }

  return (
    error?<View><Text>Server Error</Text></View>:<View>
      <NavBar />
      <FlatList
        data={products}
        renderItem={({ item }) => {
          const { id, image, title, price, rating } = item;
          return (
            //Displaying Products
            <View style={styles.card}>
              <Image style={{ width: 200, height: 150 }} source={{ uri: `${image}` }} />
              <Text>{title}</Text>
              <Text>${price}</Text>
              <View style={styles.ratingAndCount}>
                <Text>Rating: {rating.rate}</Text>
                <Text>Count: {rating.count}</Text>
              </View>
              <Button title="Add to Cart" onPress={() => buttonCart(item)} />
            </View>
          )
        }}
      />
    </View>
  )
}


//styles

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    margin: 10,
    height: 300,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: 'center',
  },

  ratingAndCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 10
  }
});

export default Home;
