import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import Video from 'react-native-video';

class PlayerTest extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            duration: 0,
            currentTime: 0,
            isBuffering: false
        }
    }

    onLoad = (data) => {
        console.log('On load fired!');
        this.setState({ duration: data.duration });
    }

    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    }

    onBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
        this.setState({ isBuffering });
    }

    onVideoError = () => {
        console.log('An error is present')
    }

    render() {
        return (
            <View style={styles.container}>
                <Video
                    source={{ uri: "background" }}   // Can be a URL or a local file.
                    //ref={(ref) => { this.player = ref }}     // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.onVideoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />

            </View>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
});

export default PlayerTest