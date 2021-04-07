import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation'
import MealItem from '../components/MealItem'
import Meal from '../models/Meal'
interface MealListT {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
  listData: Meal[]
}

const MealList = (props: MealListT) => {
  const renderMealItem = (itemData: { item: Meal }) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
            },
          })
        }}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    )
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealList
