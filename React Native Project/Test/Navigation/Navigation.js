import React from './node_modules/react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigation } from 'react-navigation'
import { View, Text } from 'react-native'

class Navigation extends React.Component {
    render(){
        return (
            <View>
                <Text> test test test  </Text>
            </View>
        )
    }
}

const AppNavigation = createStackNavigation({
    Accueil: {
        screen: Accueil,
        navigationOptions: ({
            title: 'Accueil',
        }),
    }
});
export default createAppContainer(AppNavigation)