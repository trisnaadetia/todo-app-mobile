import React, { useState } from 'react'
import { 
  Icon,
  MenuItem, 
  OverflowMenu, 
  TopNavigation, 
  TopNavigationAction,
} from '@ui-kitten/components'



export default function TopNavigationComponent({navigation, namePage}) {
  const [menuVisible, setMenuVisible] = useState(false)

  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' fill={namePage === 'Detail' ? 'white' : 'black'}/>
  )
  
  const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' fill={namePage === 'Detail' ? 'white' : 'black'}/>
  )
  
  const InfoIcon = (props) => (
    <Icon {...props} name='info'/>
  )

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
  )

  const renderRightActions = () => (
    <>
      <TopNavigationAction/>
      {
        namePage === 'Detail' && (
          <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}
          >
            <MenuItem accessoryLeft={InfoIcon} title='Profile'
              onPress={() => {
                setMenuVisible(!menuVisible)
                navigation.navigate('Profile')
              }}
            />
          </OverflowMenu>
        )
      }
    </>
  )

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon}
      onPress={() => navigation.navigate('Home')}
    />
  )

  return (
    <>
      {
        namePage === 'Detail' ? (
          <TopNavigation
            accessoryLeft={renderBackAction}
            accessoryRight={renderRightActions}
            style={{backgroundColor: '#5784fc'}}
          />
        ) : (
          <TopNavigation
            accessoryLeft={renderBackAction}
            accessoryRight={renderRightActions}
            style={{backgroundColor: 'white'}}
          />
        )
      }
    </>
  )
}