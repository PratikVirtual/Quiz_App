import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native'


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    const getQuiz = async () => {
        setIsLoading(true)
        // const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.results[0]);
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };
    useEffect(() => {
        getQuiz();
    }, [])

    const handleNextPress = () => {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques + 1]))

    }


    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)

        shuffleArray(options)

        return options
    }

    const handlSelectOptions = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 10)
        }
        if (ques !== 9) {
            setQues(ques + 1)
            setOptions(generateOptionsAndShuffle(questions[ques + 1]))
        }
        if (ques === 9) {
            handleShowResult();
        }

        // console.log(_option === questions[ques].correct_answer)
    }

    const handleShowResult = () => {
        navigation.navigate('Result', {
            score: score
        })
    }

    return (
        <View style={styles.container}>
            {isLoading ? <View style={{ flex: 1 }}><LottieView source={require('../assets/loading.json')} autoPlay loop /><Text style={styles.loadingtxt}>Loading..</Text></View> : questions && (
                <View style={styles.bodyWrapper}>
                    <View style={styles.question}>
                        <Text style={styles.Quetxt}>Q. {decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.Options}>
                        <TouchableOpacity style={styles.OptionsWrapper} onPress={() => handlSelectOptions(options[0])}>
                            <Text style={styles.optiontxt}>{decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OptionsWrapper} onPress={() => handlSelectOptions(options[1])}>
                            <Text style={styles.optiontxt}>{decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OptionsWrapper} onPress={() => handlSelectOptions(options[2])}>
                            <Text style={styles.optiontxt}>{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.OptionsWrapper} onPress={() => handlSelectOptions(options[3])}>
                            <Text style={styles.optiontxt}>{decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonsWrapper}>
                        {ques !== 9 &&
                            <TouchableOpacity
                                onPress={handleNextPress}
                                style={styles.buttonWrapper}>
                                <Text>SKIP</Text>
                            </TouchableOpacity>
                        }

                        {ques === 9 &&
                            <TouchableOpacity
                                onPress={handleShowResult}
                                style={styles.buttonWrapper}>
                                <Text>SHOW RESULTS</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            )
            }
        </View >
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%'
    },
    question: {
        paddingVertical: 20,
    },
    Quetxt: {
        fontSize: 30,
    },
    Options: {
        paddingVertical: 20,
        flex: 1
    },
    buttonsWrapper: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        // backgroundColor: '#0096c7',
    },

    buttonWrapper: {
        backgroundColor: '#0096c7',
        padding: 30,
        borderRadius: 20
    },
    OptionsWrapper: {
        marginVertical: 20,
        backgroundColor: '#0096c7',
        padding: 10,
        borderRadius: 10,
    },
    optiontxt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFFFFF'
    },
    bodyWrapper: {
        height: '100%'
    },
    loadingtxt: {

        alignItems: 'center',
        justifyContent: 'center'
    }

});

// {isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><Text style={{ fontSize: 32, fontWeight: '700' }}> LOADING...</Text></View> : questions && (
