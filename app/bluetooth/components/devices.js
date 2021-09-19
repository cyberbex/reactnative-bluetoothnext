import React from "react";
import {
    View,
    Text,
    Switch,
    StyleSheet,
    TouchableOpacity,
    Image
}from 'react-native'

function Device(props){
    return(
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}> 
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={props.iconLeft}/>
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Image style={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:"space-between"
    },
    wrapperLeft:{
        width:40,
        height:40,
        borderRadius:20,
        borderColor:'gray',
        borderWidth:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center'

    },
    wrapperName:{
       flex:1,
       justifyContent:'flex-start',
       marginLeft:15 
    },
    name:{
        fontSize:20
    },
    iconRight:{
        width:50,
        height:50,
    },
    iconLeft:{
        width:50,
        height:50,

    }


})
export default Device