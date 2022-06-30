import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>WELLCOME TO QUIZ APP</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 20,
        fontWeight: '800'
    }
})