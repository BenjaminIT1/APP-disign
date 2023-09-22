import React from "react";
import{Text,View, TextInput, TouchableOpacity, StyleSheet, Image, Button } from "react-native"


export default function Login(){
return (
<View style={styles.container}>
<Text style={styles.Texth1}>Trevelo</Text>
<Image source = { require('./img/estos-son-los-requisitos-para-viajar-a-italia-siendo-mexicanos.jpg')}
    style={styles.imageStyle} 
/>
<Text style={styles.Text}>E-mail Address</Text>
<TextInput style={styles.inputs} placeholder="E-Mail Address"/>

<Text style={styles.Text}>Password</Text>
<TextInput style={styles.inputs} placeholder="Password"/>

<TouchableOpacity style ={styles.TouchableOpacitybutton}><Text style={styles.TextStyle}>Login</Text></TouchableOpacity>

<Text style={styles.TextPass}>Forgot Password?</Text>

<Text style={styles.TextP}>Don´t have an account?   <Text style={styles.TextP2}>Sing up</Text></Text>

</View>
);
}


const styles = StyleSheet.create({
container: {
    flex:1, 
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"white"
},
Texth1: {
        color:'#a9a9a9',
        fontSize:30,
    },
Text: {
    color:'#a9a9a9',
    fontSize:20,
},
imageStyle:{
    width:200,
    height: 200,
    marginTop:30,
    position:"absolute",
    top:0,
    width:'100%',
    height:200,
    resizeMode: 'cover',
    flex: 1,

},
TouchableOpacitybutton:{
    backgroundColor:'hotpink',
    borderRadius: 10,
    width:200,
    height:50
},
TextStyle:{
color:'white',
fontSize:25,
textAlign:'center'
},
inputs:{
    borderWidth:1,
    borderColor:'#777',
    padding: 8,
    margin:10,
    width:200
},
TextPass:{
    color:'#000000',
    fontSize:13,
    
},

TextP:{
    color:'#a9a9a9',
},
TextP2:{
    color:'hotpink'
}
}
);


