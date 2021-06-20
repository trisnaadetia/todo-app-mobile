import React, { useState } from 'react'
import { 
  StyleSheet, 
  View,
} from 'react-native'
import {
  Text,
  CheckBox
} from '@ui-kitten/components'

export default function CardDetail({allTodo}) {
  const [checked, setChecked] = useState(false)

  return (
    <>
      {
        allTodo.map(x => {
          return (
            <View key={x.id} style={styles.card}>
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
              {
                x.status !== 'completed' && (
                  <View>
                    <CheckBox
                      checked={checked}
                      onChange={nextChecked => setChecked(nextChecked)}>
                    </CheckBox>
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
    backgroundColor:"white",
    borderRadius:5,
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
  }
})