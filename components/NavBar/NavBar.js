import { FontAwesome5 } from '@expo/vector-icons'; 
import {  useSelector } from "react-redux";

import { FlatList,StyleSheet, Text, View, Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NavBar = ()=>{
  const navigation = useNavigation();
  const cart = useSelector((state) => state.productItem.cart);
  const lengthofcart =cart.length

    return(
  <View style = {styles.navbar}>
    <Text>Shopping Flair</Text>
    <View style ={{flexDirection:"row", backgroundColor:"#FFFFFF"}}>
    
    <Button title='cart' onPress={()=>navigation.navigate('Cart')}/>
    <FontAwesome5 name="shopping-cart" size={24} color="black" />
    <Text>{lengthofcart}</Text>

    </View>

  </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
  });

export default NavBar