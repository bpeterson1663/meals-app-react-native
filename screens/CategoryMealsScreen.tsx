import React from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { View, Text, StyleSheet, Button } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
interface CategoryMealsScreenT {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const CategoryMealsScreen = (props: CategoryMealsScreenT) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Text>{selectedCategory?.title}</Text>
            <Button onPress={() => { 
                props.navigation.navigate({routeName: 'MealDetail'})
            }} title="Go To Meal Details"></Button>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData: CategoryMealsScreenT) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory?.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen