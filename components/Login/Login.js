import { FlatList, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../StoreAndReducer/authenticationActions';
import { useState } from "react";
import React, { useEffect,  } from "react";



const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const error = useSelector((state) => state.authentication.error);

  console.log(token)

  const onChangeUserName = (userName) => {
    setUserName(userName)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  // const onSuccess = ()=>{
  //   dispatch(login(userName, password));



  //   if(error){

  //       alert("please enter username or password correctly")
  //   }
  //   else{
  //     navigation.navigate('Home');
  //   //   setUserName("")
  //   // setPassword("")
  //   }

  // }
  useEffect(() => { if (error) 
    { alert('Please enter username or password correctly'); }
     else if (token) { navigation.navigate('Home')
     setUserName("")
     setPassword(""); }
     }, [error, token, ]);



const onSuccess = () => {
  dispatch(login(userName, password));
 


};

return (
  <View>
    <Text>UserName: mor_2314</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeUserName}
      value={userName}
    />
    <Text>Password: 83r5^_</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangePassword}
      value={password}
    />
    <Button title='login' onPress={onSuccess} />
  </View>
);
}


//styles

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
