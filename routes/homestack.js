import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';
import Header from '../shared/header';
import React from 'react';


const screens =
{
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            };
        }
    },
    ReviewDetail: {
        screen: ReviewDetail,
        navigationOptions: {
            title: 'Review Detail',
        }
    }
}

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions: {
            headerTintColor: '#eb4034',
            headerStyle: { backgroundColor: '#eee', height: 60 }
        }
    });

export default HomeStack;