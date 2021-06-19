import React from 'react'
import { 
  StyleSheet, 
  View
} from 'react-native'
import { 
  Icon,
  Text,
} from '@ui-kitten/components'

export default function CardCategory({category}) {
  return (
    <>
    {
      category.map(x => {
        return (
          <View key={x.id} style={styles.card}>
          <Icon
            style={styles.icon}
            fill={x.fill}
            name={x.code}
          />
          <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
            <Text
              category="c1"
              style={{ fontSize: 25, marginBottom: 3 }}
            >
              {x.name}
            </Text>
            <Text
              category="c1"
              style={{ fontSize: 15, color: 'gray' }}
            >
              23 Tasks
            </Text>
          </View>
        </View>
        )
      })
    }
    </>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10
  },
  card: {
    height:200,
    width:"44.5%",
    backgroundColor:"white",
    borderRadius:5,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})