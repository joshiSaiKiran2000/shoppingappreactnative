import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../StoreAndReducer/Reducer';

const Cart = () => {
    const cartState = useSelector((state) => state.cart);
    const dispatch=useDispatch();
    const deleteHandler = (id) => {
        dispatch(deleteFromCart(id))
       
      };

    return (
        <View>
            <FlatList
                data={cartState.cartItems}
                renderItem={({ item }) => {
                    const {id, image, title, price } = item;
                    return (
                        <View style={styles.cartstyle}>
                            <Image style={{ width: 50, height: 50 }}
                                source={{ uri: `${image}` }} />

                            <View >

                                <Text style={{width:270,marginLeft:10}}>{title}</Text>
                                <Text style={{marginLeft:10}}>${price}</Text>
                                <Button title='Remove' onPress={() => deleteHandler(id)}/>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
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

    
     
     
  });
export default Cart;
