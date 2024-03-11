import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

function Card(props) {

    return(
        <View>
            <Image source={ props.camera.cameraImage } />
            <Text style={{color: '#FFF', fontSize: 24}}> </Text>
        </View>
    );

}



export default Card;