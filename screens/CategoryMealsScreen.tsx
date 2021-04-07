import React from 'react'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

interface CategoryMealsScreenT {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const CategoryMealsScreen = (props: CategoryMealsScreenT) => {
  const catId = props.navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CategoryMealsScreen.navigationOptions = (navigationData: CategoryMealsScreenT) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
  return {
    headerTitle: selectedCategory?.title,
  }
}

export default CategoryMealsScreen
