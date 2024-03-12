import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Card } from 'react-native-paper';

function Cards(props) {

    return(
        <View style={styles.card}>
            <Card style={styles.card}>
                <Card.Cover source={ props.camera.cameraImage } />
                <Card.Title title="testTitle" subtitle="Subtitle" />
                <Card.Content>
                    <Text>Title</Text>
                </Card.Content>
            </Card>

            {/* <Image source={ props.camera.cameraImage } style={styles.image} />
            <Text style={{color: '#FFF', fontSize: 24}}> { props.camera.name } </Text> */}
        </View>
    );

}


const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        width: screenWidth - 48,
        borderRadius: 10,
        borderWidth: 1,
        
    },
    image: {
        width: screenWidth - 56,
        resizeMode: 'contain',
    }
})

export default Cards;