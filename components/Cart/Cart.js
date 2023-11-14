import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../StoreAndReducer/productActions';


const Cart = () => {
    const dispatch=useDispatch();
    const cart = useSelector((state) => state.productItem.cart);

    console.log("Cart State:", cart);

    const deleteHandler = (id) => {
        dispatch(removeFromCart(id))
       
      };

    return (
        <View>
            <FlatList
                data={cart}
                renderItem={({ item }) => {
                    const {id, image, title, price } = item;
                    return (
                        <View style={styles.cartstyle}>
                            <Image style={{ width: 50, height: 50 }}
                                source={{ uri: `${image}` }} />

                            <View >

                                <Text style={{width:270,marginLeft:10}}>{title}</Text>
                                <Text style={{marginLeft:10}}>${price}</Text>
                                <Button title='Remove' onPress={() => deleteHandler(id) }   />
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    cartstyle:{
       
        flexDirection:"row",
        
        alignItems:"center",
        textAlign:"center",
        padding:10,
        margin:10,
        borderColor: "lightgray",
        borderWidth:2 
        

      },
      button:{
        width:40,
        backgroundColor: 'yellow',

      }

    
     
     
  });
export default Cart;
