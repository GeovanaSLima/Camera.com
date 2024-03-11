import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
    return(
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>Camera.com</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 12,
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'OleoScript-Bold',
        fontSize: 26,
        color: '#FC5C65',
        justifyContent: 'center',
    }
})

export default Header;