import { FlatList, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onChangeUserName = (userName) => {
    setUserName(userName)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onSuccess = (token)=>{
    if(token!==undefined){
        navigation.navigate('Home');
    }
   
  }
  const onLogin = async () => {
    const obj = JSON.stringify({
      username: userName,
      password:  password,
    });

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
      
    };

    try {
      let result = await axios.post(
        "https://fakestoreapi.com/auth/login",
        obj,
        customConfig
      
      );

      onSuccess(result.data.token)
    } catch (error) {
      console.log('login error : ', error);
      alert("plase Enter username and password Correctly")
    }

 

  
  }

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
      <Button title='login' onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
