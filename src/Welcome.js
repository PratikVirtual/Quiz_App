import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import LottieView from 'lottie-react-native'


const Welcome = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: '#FFFFFF',
        }}>
            <Header />
            <View style={styles.container}>
                <LottieView source={require('../assets/welcome.json')} autoPlay loop />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Quiz")}
                style={styles.buttonWrapper}>
                <Text style={styles.buttontxt}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '75%',     
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    Icon1: {
        height: 300,
        width: 300
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0096c7',
        padding: 20,
        borderRadius: 20,
        // marginBottom: 20
        // marginTop: //,
        // paddingHorizontal: 10
    },
    buttontxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '800',
    }

})
