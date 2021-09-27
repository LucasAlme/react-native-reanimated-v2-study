import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Drag from "./src/pages/drag";
import Login from "./src/pages/login";
import Scroll from "./src/pages/scroll";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Drag />
    </GestureHandlerRootView>
  )
}

