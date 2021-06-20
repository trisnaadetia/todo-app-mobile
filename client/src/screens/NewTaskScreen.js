import React, { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { 
  Icon,
  Text,
  Button,
  Select,
  SelectItem,
  IndexPath
} from '@ui-kitten/components'
import Textarea from 'react-native-textarea'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { setPostTodo } from '../../store/action/actionTodo'
import Toast from 'react-native-toast-message'

export default function NewTaskScreen({ navigation }) {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date())
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const category = useSelector(state => state.category.category)
  const allTodo = useSelector(state => state.todo.allTodo)
  const [selectValue, setSelectValue] = useState([])
  const [inputTodo, setInputTodo] = useState({
    id: 1,
    title: '',
    deadline: '',
    note: '',
    category: '',
    status: 'uncompleted'
  })
  const displayValue = selectValue[selectedIndex.row]
  
  useEffect(() => {
    filterCategory()
  },[allTodo])

  useEffect(() => {
    setInputTodo({...inputTodo, category: displayValue})
  },[displayValue])

  useEffect(() => {
    setInputTodo({...inputTodo, deadline: conversiDate(date)})
  },[date])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  const conversiDate = (date) => {
    const newDate = date.toISOString().split('T')[0]
    return newDate
  }

  const renderOption = (id, title) => (
    <SelectItem key={id} title={title}/>
  )

  const filterCategory = () => {
    const newCategory = [...category]
    let tmp = []
    newCategory.forEach(x => {
      tmp.push(x.name)
    })
    tmp.length && setSelectValue(tmp)
  }

  const submitInputTodo = () => {
    let tmp = []
    for(let key in inputTodo) {
      if(!inputTodo[key]) {
        tmp.push('input must be required')
      } 
    } 

    if(tmp.length) {
      errorToast()
    } else {
      const payload = {
        id: allTodo.length + 1,
        title: inputTodo.title,
        deadline: inputTodo.deadline,
        note: inputTodo.note,
        category: inputTodo.category,
        status: inputTodo.status
      }
      dispatch(setPostTodo(payload))
      successToast()
    }
  }

  const successToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Good job',
      text2: 'Your todo has been updated 👋',
      visibilityTime: 50,
      autoHide: true,
      topOffset: 50,
      bottomOffset: 50,
      onShow: () => {},
      onHide: () => {navigation.navigate('Home')},
      onPress: () => {}
    })    
  }

  const errorToast = () => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Please check your input',
      text2: 'All input must be required ❗',
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}/>
      <ScrollView style={styles.container}>
        <View style={styles.containerHeader}>
          <Text
            category="s1"
            style={{ fontSize: 20 }}
          >
            New Task
          </Text>
        </View>
        <View style={styles.containerForm}>
          <Text
            category="c1"
            style={{ fontSize: 15, color: 'gray' }}
          >
            What are you planning?
          </Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            maxLength={120}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) => setInputTodo({...inputTodo, title: text})}
            defaultValue={inputTodo.title}
          />
          <View style={{marginTop: 30}}>
            <View style={styles.containerInnerForm}>
              <Icon
                style={{ width: 25, height: 25 }}
                fill='black'
                name='bell-outline'
              />
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
                is24Hour={true}
                minimumDate={Date.now()}
                style={{width: 350, marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.containerInnerForm}>
              <Icon
                style={{ width: 25, height: 25 }}
                fill='black'
                name='file-outline'
              />
              <TextInput
                placeholder="Add note"
                style={{fontSize: 20, marginHorizontal: 10}}
                onChangeText={(text) => setInputTodo({...inputTodo, note: text})}
              />
            </View>
            <View style={styles.containerInnerForm}>
              <Icon
                style={{ width: 25, height: 25 }}
                fill='black'
                name='pricetags-outline'
              />
              <Select
                style={{width: 320, marginHorizontal: 10}}
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
              >
                {selectValue.map((x, idx) => renderOption(idx, x))}
              </Select>
            </View>
          </View>
        </View>
        <Button onPress={() => submitInputTodo()}>
          <Text
            style={{color: 'white', fontSize: 18}}
          >
            Create
          </Text>
        </Button>
      </ScrollView>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon
          style={{ width: 35, height: 35 }}
          fill='black'
          name='close'
        />
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </KeyboardAvoidingView>
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
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  button: {
    position: 'absolute', 
    top: 52, 
    right: 15,
    borderRadius: 50,
    zIndex: 99,
  },
  containerForm: {
    marginTop: 20,
    padding: 20
  },
  textareaContainer: {
    height: 180,
    padding: 10,
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 20,
    color: '#333',
  },
  containerInnerForm: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30
  }
})