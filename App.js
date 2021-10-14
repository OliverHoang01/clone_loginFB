import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import facebook from './assets/facebook.jpeg';

export default function App() {
  return (
    <>
    <Image source={facebook} style={{
      width: "100%",
      height: null,
      aspectRatio: 750/460,
    }}/>
    <SafeAreaView style = {styles.container}>
    <StatusBar style='dark'/>
    <View style={styles.content}>
      <View style = {styles.head}>
        <TextInput style={styles.input} placeholder='Số điện thoại hoặc email'/>
        <TextInput style={styles.input} placeholder='Mật khẩu'/>
        <TouchableOpacity style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2d88ff',
          borderRadius: 7,
          marginTop: 10,
        }}>
          <Text style={{
            ...TEXt,
            color: '#fff',
          }}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
          <Text style={{
            ...TEXt,
            color: '#2d88ff',
          }}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 15,
        }}>
          <Text style={{
            ...TEXt,
            color: '#2d88ff',
          }}>Quay lại</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.tail}>
        <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
          <View style={{borderColor: 'gray', borderWidth: 1,width: '30%',height: 1, alignItems: 'center'}}></View>
          <Text style={{textAlign:'center', width: 50}}>HOẶC</Text>
          <View style={{borderColor: 'gray', borderWidth: 1,width: '30%',height: 1, alignItems: 'center'}}></View>
        </View>

        <TouchableOpacity style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ccffff',
          borderRadius: 7,
          marginTop: 10,
        }}>
          <Text style={{
            ...TEXt,
            color: '#2d88ff',
          }}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    </>
  );
}
 
const TEXt ={
  fontWeight: 'bold',
  textAlign: 'center',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    margin: 22,
    justifyContent: 'space-between',
  },
  head: {
    marginTop: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
