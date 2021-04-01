import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'

interface CategoryGridTileT{
    title: string,
    onSelect: () => void,
    color: string
}

const CategoryGridTile = (props: CategoryGridTileT) => {
    //TODO: find a cleaner way to do this. Typescript doesnt like dynamically switching a variable between TouchableNativeFeedback and TouchableOpacity
    if(Platform.OS === 'android' && Platform.Version >= 21){
        return (
            <View style={{flex: 1}}>
                <TouchableNativeFeedback
                    style={styles.gridItem}
                    onPress={props.onSelect}
                >
                    <View style={{...styles.container, ...{ backgroundColor: props.color}}}>
                        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            
        )
    } else {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={props.onSelect}
            >
                <View style={{...styles.container, ...{ backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
}

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
      borderRadius: 10,
      overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile
