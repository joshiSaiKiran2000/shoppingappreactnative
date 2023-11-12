import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector((state) => state.cart); 
  

  return (
    <View>
      <FlatList
        data={cartState.cartItems} 
        renderItem={({ item }) => {
          const { title } = item;
          return (
            <View>
              <Text>{title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  );
};

export default Cart;
