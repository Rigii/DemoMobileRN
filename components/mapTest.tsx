
import React, {Component} from 'react';
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

class MapTest extends Component { 
    constructor(){
        super()
        this.state = {
            coordInfo: []
        }
    }
    
componentDidMount(){
    this.getCurrentLocation()
}

    getCurrentLocation = () => {
        let getInfoSucces = (info) => this.setState({coordInfo: info.coords});
        let getInfoErr = () => console.log('Coords request failed')
        Geolocation.getCurrentPosition(getInfoSucces, getInfoErr);
    };

render(){
   // console.log(this.state.coordInfo.longitude)
    let long = this.state.coordInfo.longitude;
    let lat = this.state.coordInfo.latitude;
        return (      
            <MapView        
            style={{flex: 1}}        
            region={{          
            latitude: lat,          
            longitude: long,          
            latitudeDelta: 0.0922,          
            longitudeDelta: 0.0421,        
        }}        
        showsUserLocation={true}
        /> 
        );  
    }}

export default MapTest