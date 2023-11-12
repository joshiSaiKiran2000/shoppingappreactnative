import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../StoreAndReducer/Reducer";

import NavBar from "../NavBar/NavBar";
import axios from "axios";

import { FlatList,StyleSheet, Text, View, Button,Image} from 'react-native';

const Home = () => {
    const [products, setProducts] = useState([]);


    async function apiCall() {
        try {
            const prod = await axios.get("https://fakestoreapi.com/products");
            setProducts(prod.data);
         
        } catch (error) {
            console.log("error ", error);
            
        }
    }

    useEffect(() => {
        apiCall();
    }, []);
    const dispatch = useDispatch();
    const buttonCart= (cartItem)=>{
        dispatch(addToCart(cartItem));
    }

  

    return (
        <View>
        <NavBar/>
        <FlatList data = {products} renderItem={(element)=>{
            const{id,image,title,price,rating} = element.item
            return (
               <View style={styles.card}>
              
                
                <Image style={{ width: 200, height: 150 }} 
                 source={{ uri: `${image}` }} />
                 <Text>{title}</Text>
                 <Text>${price}</Text>
                  <View  style = {styles.ratingAndCount}>
                    <Text>Rating: {rating.rate}</Text>
                    <Text>Count: {rating.count}</Text>
                    </View>
                    <Button title="Add to Cart" onPress={()=>buttonCart(element.item)}/>
               </View>
            )
        }}  />
          </View>
    )
  
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        borderWidth: 1,
        borderColor: "lightgray",
        padding:20,
        margin:10,
        height:300,
        borderRadius:5,
        borderStyle:"solid",
        borderWidth:1,
        textAlign: 'center',
        

      },

      ratingAndCount:{
       
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom :5,
        marginTop:10

      }
     
  });
  
export default Home

