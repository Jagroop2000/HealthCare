import React from "react";
import {View  , Text , StyleSheet , Image , Dimensions} from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class RegisterUser extends React.Component {
         

     Gender = [
        {id: "0" , value:"Gender"},
         {id: "1" , value:"Male"},
         {id: "2" , value:"Female"},
         {id: "3" , value:"Other"},
     ];

    render(){
        return(
            <View style={{flex :1 , backgroundColor : "white"}}>
                <ScrollView>
               <View style={styles.headerDesign}>
                   <TouchableOpacity
                   onPress={()=> this.props.navigation.goBack()}
                   >
                    <Image source={require('../../Images/Back_Arrow.png')} 
                  style={styles.arrowImage}
                  />
                  </TouchableOpacity>

                  <Text style={styles.textStyle}> Register Yourself</Text>
               </View>
 <View>
     <Image  source={require('../../Images/Register.png')}
     style={styles.registerImage}
     />
 </View>
               <View style={{alignItems :"center"}}>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Enter your Name"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Enter your Email"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   <View style={{flexDirection :"row"}}>
                   <View style={styles.containerHalf}>
                       <Picker
                      style={{color :"#817e7d"}}
                     >
                    {
                        this.Gender.map((data) => {
                            return(
                            <Picker.Item label={data.value} value={data.id} /> 
                            );
                        })
                    }
                     </Picker>
                
                   </View>
                   <View style={styles.containerHalf}>
                   <TextInput
                        placeholder="Age"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   </View>
                <View style={{flexDirection :"row"}}>
                       <View style={styles.containerHalf}>
                       <TextInput
                        placeholder="Height (cm)"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   <View style={styles.containerHalf}>
                   <TextInput
                        placeholder="Weight (KG)"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   </View>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Enter your Password"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                   <View style={styles.containerStyle}>
                       <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={"#817e7d"}
                        style={{marginLeft : windowHeight*0.02}}
                       />
                   </View>
                  
               </View>
               <TouchableOpacity style={styles.buttonStyle}
                     onPress={()=> { this.props.navigation.navigate("SuccessfulRegister")}}
                    >
                    <Text   style={styles.smallTextStyle}>Register</Text>
                    </TouchableOpacity>
               </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    headerDesign :{
        flexDirection : "row",
        height : windowHeight*0.08,
        borderWidth:1,
        borderColor:"#e5dddb"

    } ,
    arrowImage :{
        marginLeft: windowHeight*0.02,
        marginTop: windowHeight*0.01,
    },
    textStyle :{
        fontSize : 26,
        fontWeight:"600",
        marginLeft:windowHeight*0.045,
        marginTop: windowHeight*0.014,
        color:"#211c1b"
    },
    containerStyle:{
        height : windowHeight*0.06,
        width :"95%",
        marginTop: windowHeight*0.03,
        borderRadius : 20,
        borderWidth :1,
        borderColor :"#00B0FF"
    },
    containerHalf:{
        height : windowHeight*0.065,
        width :"45%",
        marginTop: windowHeight*0.03,
        borderRadius : 20,
        borderWidth :1,
        borderColor :"#00B0FF",
        marginRight : windowHeight*0.01,
        maringLeft: windowHeight*0.01
    },
    registerImage :{
        height : windowHeight*0.2,
        width: "95%",
        resizeMode: 'contain' , 
    },
    buttonStyle:{
        height : windowHeight*0.06,
        width:"96%",
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 10,
        marginTop : 20,
        backgroundColor :"#00B0FF",
        borderRadius : 20,
        justifyContent:"center",
        alignItems:"center"
    
    },
    smallTextStyle:{
        fontSize : 18,
        color:"black",
        padding : 10,
        fontWeight :"bold"
    } ,
});