'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ExampleCamera extends PureComponent {
  constructor(){
    super()
    this.state = {
      isRecording: false
    }
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log([data]);
    }
  };

  takeVideo = async() => {
    if (this.camera) {
      const options = { 
        quality: RNCamera.Constants.VideoQuality['1080p'],
        videoBitrate: 25,
        maxFileSize: 100 * 1024 * 1024,
        orientation: 'portrait',
        //mirrorVideo: false,
        maxDuration: 120,
        doNotSave: false
      }
   try {
     const promise = this.camera.recordAsync(options);
     if (promise) {
       this.setState({ isRecording: true });
       const data = await promise;
       this.setState({ isRecording: false });
       console.warn('takeVideo', data);
       console.log(data)
     }
   } catch (e) {
     console.error(e);
   }
    }
  };

  stopVideo = async() => {
    if (this.camera) {
      this.setState({ isRecording: false });
      this.camera.stopRecording();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takeVideo.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> VIDEO START </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.stopVideo.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> VIDEO STOP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ExampleCamera;