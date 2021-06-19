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
import { useSelector } from 'react-redux'

export default function CardCategory({category, navigation}) {
  const todoWork = useSelector(state => state.todo.todoWork)
  const todoMusic = useSelector(state => state.todo.todoMusic)
  const todoTravel = useSelector(state => state.todo.todoTravel)
  const todoStudy = useSelector(state => state.todo.todoStudy)
  const todoHome = useSelector(state => state.todo.todoHome)
  const todoShopping = useSelector(state => state.todo.todoShopping)
  const todoSport = useSelector(state => state.todo.todoSport)

  return (
    <>
    {
      category.map(x => {
        return (
        <TouchableOpacity key={x.id} style={styles.card}
          onPress={() => navigation.navigate('Detail', { name: `${x.name}` })}
        >
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
              {
                x.name === 'Work' ? todoWork.length :
                x.name === 'Travel' ? todoTravel.length :
                x.name === 'Study' ? todoStudy.length :
                x.name === 'Home' ? todoHome.length :
                x.name === 'Shopping' ? todoShopping.length :
                x.name === 'Sport' ? todoSport.length :
                todoMusic.length

              } Tasks
            </Text>
          </View>
        </TouchableOpacity>
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