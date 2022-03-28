import React, { Component }  from "react";
import{
  View,
  Text,
  StyleSheet,
  TextImput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
}from 'react-native';
import{Ionicons} from "@expo/vector-icons";

class app1 extends Component{
  reader(){
    return(
      <SafeAreaView style = {style.conteiner}>
  
        <StatusBar backgroundColor ='171d31' barStyle='light-content'>
          
          <View style ={Style.content} >
  
            <Text style = {style.Text}>tarefas</Text>
          
          </View>
          <View>
            <image Style = {Style.image}>
              source ={require('./assets/pokxmon_day_crop1645714480434.png_1055622710.webp')}
            </image>
            
          </View>
          
  
  
          <TouchableOpacity style = {style.fab}>
  
            <Ionicons name='ios-add' size ='{35}'color ='#fff'/>
          
          </TouchableOpacity>
  
        </StatusBar>
  
      </SafeAreaView>
    )
  }
  const = Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#171d31'
    },
    title:{
      marginTop:10,
      paddingBottom:10,
      fontSize: 25,
      textAlign:'center',
      color:'#fff'
    },
    fab:{
      position:"absolute",
      width: 60,
      height: 60,
      backgroundColor:'#0094FF',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:30,
      right:25,
      bottom:25,
      elevation:2,
      zIndex:9,
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    },
    image:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      width:12,
      height:12,
     }  
 })
}
 
export default app1;