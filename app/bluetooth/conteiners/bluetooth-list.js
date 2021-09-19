import React, { useEffect , useState} from "react";
import{
    View,
    Text,
    FlatList,
    InteractionManager,
    
}from 'react-native'
import Layout from '../components/bluetooth-list-layout'
import Empty from '../components/empty'
import Toggle from '../components/toggle'
import Subtitle from "../components/subtitle";
import Device from "../components/devices";
import BluetoothSerial from "react-native-bluetooth-serial-next";


function BluetoothList(props){

    const[lista, setLista] = useState([]);
    const[bolEnable, setBolEnable] = useState(false);

    const renderEmpty = ()=> <Empty text='Lista esta vazia'/>
    const renderItem=({item})=>{
        return <Device {...item} iconLeft={require('../../icones/ic_laptop.png')} iconRight={require('../../icones/ic_settings.png')}/>
    }
    useEffect(()=>{
        async function init(){
            const enable = await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            setLista(lista)
        }
        
        init();

        return()=>{

            async function remove(){
                await BluetoothSerial.stopScanning();
                console.log('terminou o scanner');
            }
        remove();
        }
    }, [])

    return(
        
        <Layout title='Bluetooth'>
            <Toggle/>
            <Subtitle title='Lista de Dispositivos'/> 
            <FlatList
                data={lista}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
        </Layout>
        
            
       
    )
}

export default BluetoothList;