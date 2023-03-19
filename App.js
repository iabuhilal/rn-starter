import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import GetStartedExample1Screen from "./src/screens/GetStartedExample1Screen";
import ListScreen from "./src/screens/ListScreen";
import ListScreenSec3Ex from "./src/screens/ListScreenSec3Ex";
import ImageScreen from "./src/screens/ImageScreen";









const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    GetStartedExample1: GetStartedExample1Screen,
    List:ListScreen,
    ListSec3Ex: ListScreenSec3Ex,
    Images :ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
