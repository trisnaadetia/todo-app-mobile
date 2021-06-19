import React, { useState } from 'react'
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
  SelectItem
} from '@ui-kitten/components'
import Textarea from 'react-native-textarea'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native-gesture-handler'

export default function NewTaskScreen({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [selectedIndex, setSelectedIndex] = useState()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
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
                mode="datetime"
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
                selectedIndex={selectedIndex}
                placeholder="Category"
                onSelect={index => setSelectedIndex(index)}
              >
                <SelectItem title='Work'/>
              </Select>
            </View>
          </View>
        </View>
        <Button>
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