import React, { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { 
  Icon,
  Text,
  MenuItem, 
  OverflowMenu, 
  TopNavigation, 
  TopNavigationAction,
} from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import CardDetail from '../components/CardDetail'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' fill="white"/>
)

const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical' fill="white"/>
)

const InfoIcon = (props) => (
  <Icon {...props} name='info'/>
)


export default function DetailScreen({ navigation, route }) {
  const { name } = route.params
  const [menuVisible, setMenuVisible] = useState(false)
  const [iconName, setIconName] = useState('briefcase-outline')
  const [filterTodo, setFilterTodo] = useState([])
  const category = useSelector(state => state.category.category)
  const allTodo = useSelector(state => state.todo.allTodo)

  useEffect(() => {
    filterIcon()
    passingFilter()
    if(name === 'All') {
      setFilterTodo(allTodo) 
      setIconName('clipboard-outline')
    }
  },[name, allTodo])


  const filterTodoByCategory = (category) => {
    const newListTodo = [...allTodo]
    const filter = newListTodo.filter(x => x.category === category)
    filter && setFilterTodo(filter)
  }

  const passingFilter = () => {
    const newCategory = [...category]

    newCategory.forEach(x => {
      if(name === x.name) {
        filterTodoByCategory(x.name)
      } 
    })
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  )

  const renderRightActions = () => (
    <>
      <TopNavigationAction/>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title='Profile'/>
      </OverflowMenu>
    </>
  )

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon}
      onPress={() => navigation.navigate('Home')}
    />
  )

  const filterIcon = () => {
    const newCategory = [...category]

    newCategory.forEach(x => {
      if(name === x.name) {
        setIconName(x.code)
      }
    })
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#5784fc' }}/>
        <TopNavigation
          accessoryLeft={renderBackAction}
          accessoryRight={renderRightActions}
          style={{backgroundColor: '#5784fc'}}
        />
        <View style={styles.container}>
          <View style={{marginHorizontal: 30, marginTop: 30}}>
            <TouchableOpacity style={styles.category}>
              <Icon
                style={styles.icon}
                fill='#5784fc'
                name={iconName}
              />
            </TouchableOpacity>
            <View style={{marginVertical: 20}}>
              <Text
                category="h4"
                style={{ fontSize: 30, marginBottom: 3, color: 'white' }}
              >
                {name}
              </Text>
              <Text
                category="c1"
                style={{ fontSize: 15, color: '#e5e5e5' }}
              >
                {filterTodo.length} Tasks
              </Text>
            </View>
          </View>
          <ScrollView style={styles.content}>
            <View>
              <Text
                category="s1"
                style={{color: 'gray'}}
              >
                List of todos
              </Text>
              <CardDetail allTodo={filterTodo}/>
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: '#5784fc'
  },
  icon: {
    width: 30,
    height: 30,
  },
  category: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius: 50,
    padding: 10
  },
  content: {
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 30,
    padding: 30
  },
  button: {
    position: 'absolute', 
    bottom: 30, 
    right: 30,
    borderRadius: 50,
    zIndex: 99,
    backgroundColor: '#4076d6',
    padding: 20
  },
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
