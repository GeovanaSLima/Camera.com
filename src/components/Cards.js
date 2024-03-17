import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Card } from 'react-native-paper';

function Cards(props) {

    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <View style={styles.imageCard}>
                    <Card.Cover source={ props.camera.cameraImage } style={ styles.image } resizeMode="contain" />
                </View>
                <Card.Title title={ props.camera.name } subtitle={ props.camera.model } style={ styles.title } />
                <Card.Content>
                    <Text> { props.camera.description } </Text>
                </Card.Content>
            </Card>

        </View>
    );

}


const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    card: {
        backgroundColor: '#FFF',
        width: screenWidth - 48,
        borderRadius: 10,
        borderWidth: 1,
    },
    imageCard: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 250,
        width: screenWidth - 48,
    },
    image: {
        backgroundColor: '#FFF',
        width: 280,
        height: 220,
    },
    title: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    
    }
})

export default Cards;