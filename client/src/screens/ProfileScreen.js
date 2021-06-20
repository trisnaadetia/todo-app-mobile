import React, { useEffect } from 'react'
import { 
  StyleSheet, 
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Platform,
  ScrollView
} from 'react-native'
import { 
  Icon,
  Text,
} from '@ui-kitten/components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfile } from '../../store/action/actionUserProfile'
import TopNavigation from '../components/TopNavigation'

export default function UserProfile({navigation}) {
  const dispatch = useDispatch()
  const namePage = 'Profile'
  const userProfile = useSelector(state => state.user.userProfile)
  const loading = useSelector(state => state.user.loadingUser)

  useEffect(() => {
    dispatch(fetchUserProfile())
  },[])

  if(loading) {
    return (
      <View style={{flex: 1}}>
        <Text>Loading..</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}/>
      <TopNavigation navigation={navigation} namePage={namePage}/>
      <View style={styles.container}>
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Image
            source={{uri: userProfile.picture.large}}
            style={{width: 300, height: 500}}
          />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.profile}>
            <View>
              <Text style={{color: 'white', fontSize: 25}}>
                {`${userProfile.name.title} ${userProfile.name.first} ${userProfile.name.last}`}
              </Text>
            </View>
            <View>
              <View style={{
                marginTop: 20, 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
                <Icon
                  style={{width: 20, height: 20}}
                  fill='white'
                  name='email-outline'
                />
                <Text style={{fontSize: 20, color: 'white', marginHorizontal: 10}}>
                  { userProfile.email}
                </Text>
              </View>
              <View style={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'row'
              }}>
                <Icon
                  style={{width: 20, height: 20}}
                  fill='white'
                  name='phone-call-outline'
                />
                <Text style={{fontSize: 20, color: 'white', marginHorizontal: 10}}>
                  { userProfile.phone}
                </Text>
              </View>
              <View style={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'row'
              }}>
                <Icon
                  style={{width: 20, height: 20}}
                  fill='white'
                  name='pin'
                />
                <Text style={{fontSize: 20, color: 'white', marginHorizontal: 10}}>
                  { `${userProfile.location.city}, ${userProfile.location.country}` }
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white'
  },
  content: {
    backgroundColor: '#5784fc',
    marginTop: 30,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  profile: {
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap'
  }
})
