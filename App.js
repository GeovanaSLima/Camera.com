import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Header from "./src/components/Header";
import Cards from "./src/components/Cards";

function App(){
  const [img, setImg] = useState('');
  const [selectedCamera, setSelectedCamera] = useState();
  const [cameras, setCameras] = useState([
    {key: 1, name: 'Canon T7+'  , model: 'Canon', state: 'New' , price: 3.500 , cameraImage: require('./src/assets/img/canon_t7_plus.png'), description: 'Take your first steps in photography and start telling your stories with the EOS Rebel T7+ DSLR and the compact zoom lens EF-S 18-55mm IS II. This easy-to-use and intuitive camera is suitable for beginners and enthusiasts alike.\n\n The Photography Guide app offers the best suggestions and tutorials on how to get the most out of your camera, including beautiful photos and Full HD videos full of detail, color, and depth of field, as well as great performance in low-light conditions, with an incredible 24.1-megapixel sensor and a zoom lens for different subjects.\n\n Sharing photos on social media is very easy, and you can also take remote shots from the Canon Camera Connect app. Just connect your smartphone via Wi-Fi or NFC.\n\n It also comes with the central pin (X-Syncro) for greater compatibility with flashes and external adapters.'},
    {key: 2, name: 'Canon SL3'  , model: 'Canon', state: 'New' , price: 4.500 , cameraImage: require('./src/assets/img/canon_sl3.jpg')    , description: "The EOS Rebel SL3 camera with EF-S 18-55mm IS STM lens is your best ally for capturing incredible moments.\n\n It is equipped with the ability to record videos in 4K, equipped with Dual Pixel AF focus technology, and a vari-angle LCD screen for recording videos, taking selfies, and photographs from unusual angles.\n\n Lightweight, intuitive, and equipped with a 24.1-megapixel CMOS (APS-C) sensor, it works together with the powerful DIGIC 8 processor to achieve excellent performance and results.\n\n Explore your creativity with options for 4K videos, Time-lapse, and the Creative Filter Assistant.\n\n Wherever you are and wherever you go, the EOS Rebel SL3 camera simplifies the capture of amazing videos and photos for viewing and sharing.\n\n Features: 24.1-megapixel CMOS (APS-C) sensor; Dual Pixel CMOS AF; 3.0-inch vari-angle LCD touch screen; Built-in Wi-Fi, Bluetooth technology; 4K videos and external microphone input; DIGIC 8 Image Processor- ISO 100-25600 (Expandable to 51200); Optical viewfinder with a 9-point AF system; Feature Assistant; Small and lightweight body."},
    {key: 3, name: 'Nikon D3500', model: 'Nikon', state: 'Used', price: 12.000, cameraImage: require('./src/assets/img/nikon_d3500.jpg')  , description: "The Nikon D3500 is a deservedly famous beginner's DSLR. Blending portability and usability with the capacity to produce images of excellent quality, it's really everything a beginning photographer could need, and as such is a fixture among students. With the historic Nikon-F lens mount at your disposal, you've got enough lenses to realistically last a shooting lifetime, too. But with mirrorless cameras hogging the limelight and technological developments, Nikon's best beginner's DSLR is also likely its last."},
    {key: 4, name: 'Sony ZV-E10', model: 'Sony' , state: 'New' , price: 5.700 , cameraImage: require('./src/assets/img/sony_zv_e10.jpg')  , description: "Perfect for vloggers, the Sony ZV-E10 pairs a large APS-C sensor and mirrorless versatility with a specialized feature-set built just for content creators. Improving upon the ubiquitous smartphone, the ZV-E10 is an Alpha camera that brings improved image quality, greater choice of lenses, and increased control to up your creativity when shooting.\n\n Taking a concept that originated with the ZV-1, the ZV-E10 is the mirrorless continuation of this idea of a camera built around the concept of vlogging.\n\n It's a highly capable and portable camera but incorporates a series of design choices and shooting modes that are ideal for single-person productions. A vari-angle screen lets you accurately frame up shots, the integrated directional mic is purpose-built for recording more accurate sound from front-facing subjects, and shooting modes like Background Defocus and Product Showcase help you highlight specific subjects with ease.\n\n In terms of specs, the ZV-E10 revolves around a 24.2MP APS-C Exmor CMOS sensor, which enables UHD 4K video recording up to 30p, Full HD recording at 120p, and stills shooting up to 11 fps.\n\n Sensitivity ranges from 100-32000 for working in a variety of lighting conditions and the sensor's design also integrates a 425-point Fast Hybrid AF system for accurate tracking and detection of subjects.\n\n The body design is reminiscent of Sony's other Alpha E-mount cameras and features an intuitive control layout along with the functional 3.0″ vari-angle touchscreen LCD for intuitive settings control and framing.\n\n With audio being a main concern of vlogging and creative content, the ZV-E10 focuses on this aspect of recording by including a 3-capsule directional mic into the camera design as well as incorporating both 3.5mm mic and headphone ports and having the top Multi Interface shoe support a digital audio interface for improved audio quality."}
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
