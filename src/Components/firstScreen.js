import { Button, View, ScrollView, Text } from "react-native";
import STYLE_GROUP from "../styles/quantityOfMedicationsStyles"

const FirstScreen = ({navigation}) =>{

return(
    <ScrollView style={STYLE_GROUP.containerMain} >
        <Text style={STYLE_GROUP.text}> Primera Pantalla</Text>
        <Button title="Siguiente pantalla" onPress={() => navigation.navigate("Dosis Del Medicamento")}/>
    </ScrollView>
    
);
};

export default FirstScreen;