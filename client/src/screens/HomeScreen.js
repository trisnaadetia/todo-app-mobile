import React, { useEffect } from 'react'
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
import { 
  setFilterTodoHome,
  setFilterTodoMusic, 
  setFilterTodoShopping, 
  setFilterTodoSport, 
  setFilterTodoStudy, 
  setFilterTodoTravel, 
  setFilterTodoWork 
} from '../../store/action/actionTodo'
import CardAll from '../components/CardAll'
import CardCategory from '../components/CardCategory'
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const category = useSelector(state => state.category.category)
  const allTodo = useSelector(state => state.todo.allTodo)

  useEffect(() => {
    passingFilter()
  },[allTodo])

  const filterTodo = (category) => {
    const newListTodo = [...allTodo]
    const filter = newListTodo.filter(x => x.category === category)
    if(category === 'Work') {
      dispatch(setFilterTodoWork(filter))
    } else if(category === 'Music') {
      dispatch(setFilterTodoMusic(filter))
    } else if(category === 'Travel') {
      dispatch(setFilterTodoTravel(filter))
    } else if(category === 'Study') {
      dispatch(setFilterTodoStudy(filter))
    } else if(category === 'Home') {
      dispatch(setFilterTodoHome(filter))
    } else if(category === 'Sport') {
      dispatch(setFilterTodoSport(filter))
    } else if(category === 'Shopping') {
      dispatch(setFilterTodoShopping(filter))
    }
  }

  const passingFilter = () => {
    const newCategory = [...category]

    newCategory.forEach(x => {
      filterTodo(x.name)
    })
  }

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
            <CardCategory category={category} navigation={navigation}/>
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