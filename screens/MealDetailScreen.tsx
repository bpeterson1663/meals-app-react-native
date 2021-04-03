import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { MEALS } from '../data/dummy-data'

interface MealDetailScreenT {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const MealDetailScreen = (props: MealDetailScreenT): JSX.Element => {
    const mealIdParam = props.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealIdParam)
    return (
        <View style={styles.screen}>
            <Text>Meal Details Screen</Text>
            <Text>{meal?.title}</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData: MealDetailScreenT) => {

    const mealIdParam = navigationData.navigation.getParam('mealId')
    const meal = MEALS.find(meal => meal.id === mealIdParam)
    return {
        headerTitle: meal?.title,
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen