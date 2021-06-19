import React from 'react'
import { 
  StyleSheet, 
  View,
  TouchableOpacity
} from 'react-native'
import { 
  Icon,
  Text,
} from '@ui-kitten/components'

export default function CardAll({allTodo, navigation}) {
  return (
    <TouchableOpacity style={styles.card}
      onPress={() => navigation.navigate('Detail', { name: 'All' })}
    >
      <Icon
        style={styles.icon}
        fill='#4076d6'
        name='clipboard-outline'
      />
      <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
        <Text
          category="c1"
          style={{ fontSize: 25, marginBottom: 3 }}
        >
          All
        </Text>
        <Text
          category="c1"
          style={{ fontSize: 15, color: 'gray' }}
        >
          {allTodo.length} Tasks 
        </Text>
      </View>
    </TouchableOpacity>
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