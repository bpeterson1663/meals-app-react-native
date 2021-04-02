import React from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Meal from '../models/Meal'
import MealItem from '../components/MealItem'

interface CategoryMealsScreenT {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const CategoryMealsScreen = (props: CategoryMealsScreenT) => {
    const renderMealItem = (itemData: {item: Meal}) => {
        return <MealItem title={itemData.item.title} onSelect={() => {
            props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    mealId: itemData.item.id
                }
            })
        }} duration={itemData.item.duration} affordability={itemData.item.affordability} complexity={itemData.item.complexity} image={itemData.item.imageUrl} />
    }
    const catId = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item, index) => item.id} style={{width: '100%'}} />
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