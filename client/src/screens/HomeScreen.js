import React from 'react'
import { 
  StyleSheet, 
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native'
import { 
  Icon,
  Text,
} from '@ui-kitten/components'
import CardAll from '../components/CardAll'
import CardCategory from '../components/CardCategory'
import { useSelector } from 'react-redux'

export default function HomeScreen({ navigation }) {
  const category = useSelector(state => state.category.category)
  const allTodo = useSelector(state => state.todo.allTodo)

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}/>
      <ScrollView style={styles.container}>
        <View style={{ marginHorizontal: 10, marginTop: 10 }}>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='list-outline'
          />
          <Text category="h3"
            style={{ marginBottom: 10, marginHorizontal: 3 }}
          > 
            Lists
          </Text>
          <View style={styles.containerCard}>
            <CardAll allTodo={allTodo} navigation={navigation}/>
            <CardCategory category={category}/>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('NewTask')}
      >
        <Icon
          style={{ width: 30, height: 30 }}
          fill='white'
          name='plus-outline'
        />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 5,
    backgroundColor: 'white'
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10
  },
  containerCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    position: 'absolute', 
    bottom: 30, 
    right: 30,
    borderRadius: 50,
    zIndex: 99,
    backgroundColor: '#4076d6',
    padding: 20
  }
})