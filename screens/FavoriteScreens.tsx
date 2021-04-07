import React from 'react'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
interface FavoriteScreensT {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
const FavoriteScreens = (props: FavoriteScreensT) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')
  return <MealList listData={favMeals} navigation={props.navigation} />
}

FavoriteScreens.navigationOptions = {
  headerTitle: 'Your Favorites',
}

export default FavoriteScreens
