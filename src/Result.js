import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({ navigation, route }) => {
    const { score } = route.params
    // console.log(params)

    // const resultIcon = score > 10 ?  : "https://cdni.iconscout.com/illustration/premium/thumb/business-rating-and-review-2357705-2004278.png"
    // const resultIcon = score > 10 ? "https://cdni.iconscout.com/illustration/premium/th…-for-bad-academic-performance-4743239-3951696.png" : "https://cdni.iconscout.com/illustration/premium/thumb/business-rating-and-review-2357705-2004278.png"
    const resultIcon = score > 10 ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"


    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Result</Text>
            <Text>{score}</Text>


            <View style={styles.iconWrapper}>
                {/* <Image style={styles.Icon1}
                    source={require('../assets/Icon1.png')}
                    resizeMode="contain"
                /> */}

                <Image style={styles.Icon1}
                    source={{
                        // uri: 'https://cdni.iconscout.com/illustration/premium/thumb/team-victory-5303612-4423551.png',
                        uri: resultIcon,
                        // uri: "https://cdnl.iconscout.com/lottie/premium/thumb/error-500-4876285-4055543.mp4"
                    }} />

                {/* <video loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/error-500-4876285-4055543.mp4" width="250" height="250" type="video/mp4" autoplay="autoplay" loop="loop"></video> */}
            </View>

            <View>
                <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttontxt}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    txt: {
        fontSize: 20,
        fontWeight: '800'
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon1: {
        height: 300,
        width: 300
    },
    buttonWrapper: {
        width: '100%',
        backgroundColor: '#0096c7',
        padding: 30,
        borderRadius: 20,
        // width: '100%        '
    },

    buttontxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '800',
    }

})