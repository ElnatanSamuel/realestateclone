import {GestureHandlerRootView} from 'react-native-gesture-handler'
import React from "react";
import { Drawer } from "expo-router/drawer"
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreensLayout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
        <Drawer>
        <Drawer.Screen name="home"   
          options={{
            headerShown: false,
            drawerLabel:"Home",
            title:"Home"
          }}
          />
        <Drawer.Screen name="(tabs)"   
          options={{
            drawerLabel:"Search",
            title:"Search"
          }}
          />
          <Drawer.Screen name="add listing"
          options={{
            drawerLabel:"Add listing",
            title:"Add listing"
          }}
          />
          <Drawer.Screen name="saved"  
          options={{
            drawerLabel:"Saved",
            title:"Saved"

          }}
          />
          <Drawer.Screen name="settings"  
          options={{
            drawerLabel:"Settings",
            title:"Settings"
          }}
          />
          {/* <Drawer.Screen name="details"  component={Details} /> */}
        {/* <StatusBar barStyle="light-content" style="dark" /> */}
      </Drawer>
      </GestureHandlerRootView>
  );
};

export default ScreensLayout;
