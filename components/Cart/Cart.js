import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const cartState = useSelector((state) => state.cart);


    return (
        <View>
            <FlatList
                data={cartState.cartItems}
                renderItem={({ item }) => {
                    const { image, title, price } = item;
                    return (
                        <View style={styles.cartstyle}>
                            <Image style={{ width: 50, height: 50 }}
                                source={{ uri: `${image}` }} />
                            <View>

                                <Text>{title}</Text>
                                <Text>${price}</Text>
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
        textAlign:"center"
        

      }
     
  });
export default Cart;
