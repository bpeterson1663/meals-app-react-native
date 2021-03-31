import React from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { View, Text, StyleSheet, Button} from 'react-native'
interface CategoriesScreenT{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const CategoriesScreen: React.FC<CategoriesScreenT>  = ({navigation}): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button onPress={() => { 
                navigation.navigate({routeName: 'CategoryMeals'})
            }} title="Go To Meals Screen"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen