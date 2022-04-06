import { Button, View, ScrollView, Text } from "react-native";
import STYLE_GROUP from "../styles/quantityOfMedicationsStyles"

const FirstScreen = (navi) =>{

return(
    <ScrollView style={STYLE_GROUP.containerMain} >
        <Text style={STYLE_GROUP.text}> Primera Pantalla</Text>
        <Button title="Siguiente pantalla" onPress={() => navi.navigate("Dosis Del Medicamento")}/>
    </ScrollView>
    
);
};

export default FirstScreen;