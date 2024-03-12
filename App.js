import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Header from "./src/components/Header";
import Cards from "./src/components/Cards";

function App(){
  const [img, setImg] = useState('');
  const [selectedCamera, setSelectedCamera] = useState();
  const [cameras, setCameras] = useState([
    {key: 1, name: 'Canon T7+'  , model: 'Canon', state: 'New' , price: 3.500 , cameraImage: require('./src/assets/img/canon_t7_plus.png')},
    {key: 2, name: 'Canon SL3'  , model: 'Canon', state: 'New' , price: 4.500 , cameraImage: require('./src/assets/img/canon_sl3.jpg')    },
    {key: 3, name: 'Nikon D3500', model: 'Nikon', state: 'Used', price: 12.000, cameraImage: require('./src/assets/img/nikon_d3500.jpg')  },
    {key: 4, name: 'Sony ZV-E10', model: 'Sony' , state: 'New' , price: 5.700 , cameraImage: require('./src/assets/img/sony_zv_e10.jpg')  }
  ])

  let camerasItem = cameras.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.name} />
  })

  return(
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Header />

        <Text style={styles.text}> Select the Model you're interested in: </Text>

        <View style={styles.pickerStyle} >
          <Picker
            selectedValue={selectedCamera}
            onValueChange={ (itemValue, itemIndex) =>  setSelectedCamera(itemValue)}
          >
            {camerasItem}
          </Picker>
        </View>
        {selectedCamera !== undefined && <Cards camera={cameras[selectedCamera]} />}

      </ScrollView>
      

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D222C',
    paddingHorizontal: 24,
  },
  modelArea: {
    backgroundColor: '#575757'
  },
  text: {
    color: '#F1F5F9',
    fontSize: 18,
    marginVertical: 12,
  },
  pickerStyle: {
    backgroundColor: '#FFF',
    marginVertical: 24,
    borderRadius: 10,
    borderWidth: 1,
  }
})


export default App;
