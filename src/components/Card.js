import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

function Card(props) {

    return(
        <View>
            <Image source={ props.camera.cameraImage } style={styles.image} />
            <Text style={{color: '#FFF', fontSize: 24}}> { props.camera.name } </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        
    },
    image: {
        width: Dimensions.get('screen').width,
        resizeMode: 'contain'
    }
})

export default Card;