// import React from 'react'
// // import { createStackNavigator } from '@react-navigation/stack';
// import Quiz from '../src/Quiz';
// import Result from '../src/Result';
// import Welcome from '../src/Welcome';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

// function Navi() {
//     return (
//         <Stack.Navigator>
//             {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
//             <Stack.Screen name="Welcome" component={Welcome}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen name="Quiz" component={Quiz} />
//             <Stack.Screen name="Result" component={Result} />
//         </Stack.Navigator>
//     );
// }

// export default Navi;

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../src/Welcome';
import Quiz from '../src/Quiz';
import Result from '../src/Result';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Quiz"
                component={Quiz}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Result"
                component={Result}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default MyStack;
