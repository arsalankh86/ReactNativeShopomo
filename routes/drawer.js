import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homestack';
import AboutStack from './aboutstack';


const drawerStackNavigator = createDrawerNavigator({

    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
});

export default createAppContainer(drawerStackNavigator)