import { FontAwesome5 } from '@expo/vector-icons'; 

import { FlatList,StyleSheet, Text, View, Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NavBar = ()=>{
  const navigation = useNavigation();

    return(
  <View style = {styles.navbar}>
    <Text>Shopping Hub </Text>
    {/* <FontAwesome5 name="shopping-cart" size={24} color="black" /> */}
    <Button title='cart' onPress={()=>navigation.navigate('Cart')}/>


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