import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoriteScreens'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  },
)

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor,
    },
  },
}

const MealsFavTabNavigation =
  Platform.ios === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      })
export default createAppContainer(MealsFavTabNavigation)
