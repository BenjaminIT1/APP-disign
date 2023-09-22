import React from "react";
import{Text,View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Registrer(){
    return(
    <View>
        <Text style={styles.TextStyle}>Sign up for a new account</Text>
<Text >We just need some more informat</Text>

<Text >Name</Text>
<TextInput  style={styles.TextInputStyle} placeholder="Name"/>

<Text>Email</Text>
<TextInput  style={styles.TextInputStyle} placeholder="Email"/>

<Text>Password</Text>
<TextInput style={styles.TextInputStyle} placeholder="Password"/>

<TextInput style={styles.TextInputStyle} placeholder="Confirm Password"/>


<TouchableOpacity style ={styles.TouchableOpacitybutton}><Text style={styles.TextStyle2}>Next</Text></TouchableOpacity>

    </View>
    )
}
const styles = StyleSheet.create({
    TextStyle:{
    fontSize:30,
    Color:"#000000",
    flex:0.8,
    resizeMode: 'cover',

    },

    TextInputStyle:{
        color:'#a9a9a9',
        fontSize:15,
        borderWidth:1,
    borderColor:'#777',
    padding: 8,
    margin:10,
    width:200
    },
    TouchableOpacitybutton:{
        backgroundColor:'hotpink',
        borderRadius: 10,
        width:200,
        height:50
    },

    TextStyle2:{
        color:'white',
        fontSize:25,
        textAlign:'center'
    }
   
    }


)










