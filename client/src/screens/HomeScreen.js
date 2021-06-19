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

export default function HomeScreen({ navigation }) {
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
        </View>
        <View style={styles.containerCard}>
          <View style={styles.card}>
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
                style={{ fontSize: 15 }}
              >
                23 Tasks
              </Text>
            </View>
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
  card: {
    height:200,
    width:"45%",
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