import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import QuantityOfMedicationsScreen from "./src/Components/quantityOfMedications";
import FirstScreen from './src/Components/firstScreen';
import ThirdScreen from './src/Components/thirdScreen';
import {useNavigation} from '@react-navigation/native'

const navi = useNavigation();



const Stack = createNativeStackNavigator() // contien nuestra navegación
function MyStack(){
  return(
    <Stack.Container>
      <Stack.Screen name="Primera Pantalla" component={FirstScreen} options={{headerTintColor: 'white',
                                                                              headerStyle:{ backgroundColor: "#0093B7"},headerTitleAlign:'center'}}/>
      <Stack.Screen name="Dosis Del Medicamento" component={QuantityOfMedicationsScreen} options={{headerTintColor: 'white',
                                                                                              headerLeft: null,
                                                                                               headerStyle:{ backgroundColor: "#0093B7"}}}/>
      <Stack.Screen name="Tercera Pantalla" component={ThirdScreen} options={{headerTintColor: 'white',
                                                                                                  headerStyle:{ backgroundColor: "#0093B7"}}}/>
    </Stack.Container>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
