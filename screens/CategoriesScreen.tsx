import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/Category'
import CategoryGridTile from '../components/CategoryGridTile'
interface CategoriesScreenT {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const CategoriesScreen = (props: CategoriesScreenT) => {
  const renderGridItem = (itemData: { item: Category }) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }}
      />
    )
  }

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen
