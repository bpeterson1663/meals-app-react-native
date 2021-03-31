import React from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { View, Text, StyleSheet, Button } from 'react-native'
interface CategoryMealsScreenT {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const CategoryMealsScreen: React.FC<CategoryMealsScreenT>  = ({navigation}): JSX.Element => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button onPress={() => { 
                navigation.navigate({routeName: 'MealDetail'})
            }} title="Go To Meal Details"></Button>
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

export default CategoryMealsScreen