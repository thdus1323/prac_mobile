import Icon from '@react-native-vector-icons/fontawesome6';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Cart from '../Screens/Cart';
import Category from '../Screens/Category';
import Home from '../Screens/Home';
import Mypage from '../Screens/Mypage';
import Search from '../Screens/Search';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName="마이페이지">
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <Icon
                  name="house"
                  iconStyle="solid"
                  color={focused ? '#4285F4' : '#E1E1E1'}
                  size={20}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="카테고리"
        component={Category}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center'}}>
                <Icon
                  name="border-all"
                  iconStyle="solid"
                  color={focused ? '#4285F4' : '#E1E1E1'}
                  size={20}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Icon
                  name="magnifying-glass"
                  iconStyle="solid"
                  color={focused ? '#4285F4' : '#E1E1E1'}
                  size={20}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Icon
                  name="user"
                  color={focused ? '#4285F4' : '#E1E1E1'}
                  size={20}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="카트"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Icon
                  name="cart-shopping"
                  iconStyle="solid"
                  color={focused ? '#4285F4' : '#E1E1E1'}
                  size={20}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
