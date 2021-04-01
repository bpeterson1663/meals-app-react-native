import React from 'react'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/Category'
interface CategoriesScreenT{
    navigationOptions?: Object,
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
interface NavStatelessComponent extends React.StatelessComponent {
    navigationOptions?: Object
    navigation: NavigationScreenProp<NavigationState, NavigationParams>

}

const CategoriesScreen: React.StatelessComponent<CategoriesScreenT>  = ({navigation}): JSX.Element => {
    const renderGridItem = (itemData: {item: Category}) => {
        return ( 
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    navigation.navigate({routeName: 'CategoryMeals'})
                }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>)
    }
    return (
        <FlatList numColumns={2} renderItem={renderGridItem} data={CATEGORIES} />
       
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15
    }
})

export default CategoriesScreen