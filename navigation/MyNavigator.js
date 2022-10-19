import React from "react";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
// สร้าง navigator ตามโจทย์กำหนด
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function 	MealNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Stack.Navigator initialRouteName="Categories"
      screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor: "white", headerShown:false}}>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
        />
        <Stack.Screen 
          name="MealDetail" 
          component={MealDetailScreen} />
      </Stack.Navigator>
  );
}
function FavNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor: "white", headerShown:false}}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
          }} 
        />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen} />
    </Stack.Navigator>
  )
  
} 
// อาจกำหนด Navigator เพิ่มได้
function MealsFavTabNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="Meals"
        component={MealNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-restaurant" color={color} size={size}/>;
          },
          }}/>
        <Tab.Screen
        name="Favorites"
        component={FavNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => {
          return <Ionicons  name="ios-star" color={color} size={size}  />;
          },
          }}/>
    </Tab.Navigator>
  );
}
function FiltersNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor: "white", headerShown:false } }>
      <Stack.Screen
        name="Filters Meals"
        component={FiltersScreen}/>
    </Stack.Navigator>
)
}
function MainNavigator(){
  return(
    <Drawer.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },headerTintColor: "white",}}>
      <Drawer.Screen 
        name="Meals"
        component={MealsFavTabNavigator}w
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
      />
    </Drawer.Navigator>
  )
}
// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      {/* <MealsFavTabNavigator /> */}
      <MainNavigator />
    </NavigationContainer>
  );
}
