import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../components";
import Profilepage from "../components/home/profile/profile";
import Home from "../app/home";


const Stack = createNativeStackNavigator();

const stackNavigator =()=>{
    return(
        <NavigatorContainer>
        <Stack.Navigator screenOptions={{ headerShown:false}}>
            <Stack.Group>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Profile" component={Profilepage}/>
                <stack.Screen name="Home" component={Home}/>
            </Stack.Group>
        </Stack.Navigator>
        </NavigatorContainer>
    );
};

export default stackNavigator;