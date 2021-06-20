import React from 'react'
import { 
  StyleSheet, 
  View,
  TouchableOpacity
} from 'react-native'
import {
  Text,
  Icon
} from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'
import { setUpdateTodo } from '../../store/action/actionTodo'
import Toast from 'react-native-toast-message'

export default function CardDetail({allTodo}) {
  const dispatch = useDispatch()
  const listTodo = useSelector(state => state.todo.allTodo)

  const updateTodo = (id) => {
    const newListTodo = [...listTodo]
    let result = []

    newListTodo.forEach(x => {
      if(x.id == id) {
        x.status = 'completed'
        result.push(x)
      } else {
        result.push(x)
      }
    })
    
    dispatch(setUpdateTodo(result))
    successToast()
  }

  const successToast = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Good job',
      text2: 'Your todo has been updated 👋',
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 50,
      bottomOffset: 50,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {}
    })    
  }

  return (
    <>
      {
        allTodo.map(x => {
          return (
            <View key={x.id}>
            {
              x.status === 'uncompleted' ? (
                <View style={{
                  backgroundColor: 'white',
                  borderRadius:20,
                  padding:10,
                  elevation:10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  marginVertical: 10,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <View>
                    <Text
                      category="s1"
                      style={{ fontSize: 15, marginBottom: 3 }}
                    >
                      {x.title}
                    </Text>
                
                    {
                      x.note === 'urgent' ? (
                        <Text
                          category="s1"
                          style={{ fontSize: 13, marginBottom: 3, color: 'red' }}
                        >
                          {x.note}
                        </Text>
                      ) : (
                        <Text
                          category="s1"
                          style={{ fontSize: 13, marginBottom: 3, color: 'blue' }}
                        >
                          {x.note}
                        </Text>
                      )
                    }
    
                    <Text
                      category="c1"
                      style={{ fontSize: 13, marginBottom: 3, color: 'gray' }}
                    >
                      {x.deadline}
                    </Text>
                    
                    {
                      x.status === 'uncompleted' ? (
                        <Text
                          category="s1"
                          style={{ fontSize: 10, color: 'orange' }}
                        >
                          {x.status}
                        </Text>
                      ) : (
                        <Text
                          category="s1"
                          style={{ fontSize: 10, color: 'green' }}
                        >
                          {x.status}
                        </Text>
                      )
                    }
                  </View>
                  <TouchableOpacity
                    onPress={() => updateTodo(x.id)}
                  >
                    <Icon
                      style={styles.icon}
                      fill='green'
                      name='checkmark-circle-outline'
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{
                  backgroundColor: '#5784fc',
                  borderRadius:20,
                  padding:10,
                  elevation:10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  marginVertical: 10,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <View>
                    <Text
                      category="s1"
                      style={{ fontSize: 15, marginBottom: 3, color: 'white' }}
                    >
                      {x.title}
                    </Text>
                
                    {
                      x.note === 'urgent' ? (
                        <Text
                          category="s1"
                          style={{ fontSize: 13, marginBottom: 3, color: 'red' }}
                        >
                          {x.note}
                        </Text>
                      ) : (
                        <Text
                          category="s1"
                          style={{ fontSize: 13, marginBottom: 3, color: 'blue' }}
                        >
                          {x.note}
                        </Text>
                      )
                    }
    
                    <Text
                      category="c1"
                      style={{ fontSize: 13, marginBottom: 3, color: '#e5e5e5' }}
                    >
                      {x.deadline}
                    </Text>
                    
                    {
                      x.status === 'uncompleted' ? (
                        <Text
                          category="s1"
                          style={{ fontSize: 10, color: 'orange' }}
                        >
                          {x.status}
                        </Text>
                      ) : (
                        <Text
                          category="s1"
                          style={{ fontSize: 10, color: 'yellow' }}
                        >
                          {x.status}
                        </Text>
                      )
                    }
                  </View>
                </View>
              )
            }
            </View>
          )
        })
      }
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    
  },
  icon: {
    width: 30,
    height: 30,
  }
})