import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

export interface IPlayerTest { //только описание методов класса
    onSeek: (seek: number) => void 
}

type TVideoScreenType = "stretch" | "contain" | "cover" | "none"

interface PlayerTestType {
    currentTime: number,
    duration: number,
    isFullScreen: boolean,
    isLoading: boolean,
    paused: boolean,
    playerState: object,
    screenType: TVideoScreenType,
}

class PlayerTest extends Component<any, PlayerTestType> implements IPlayerTest {
    videoPlayer: any;

    public state = {
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        paused: true,
        playerState: PLAYER_STATES.PLAYING,
        screenType: "none" as TVideoScreenType
    };


    onSeek = (seek: any) => {
        this.videoPlayer.seek(seek);
    };

    onPaused = (playerState: any) => {
        this.setState({
            paused: !this.state.paused,
            playerState,
        });
    };

    onReplay = () => {
        this.setState({ playerState: PLAYER_STATES.PLAYING });
        this.videoPlayer.seek(0);
    };

    onProgress = (data: any) => {
        const { isLoading, playerState } = this.state;
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currentTime: data.currentTime });
        }
    };

    onLoad = (data: any) => this.setState({ duration: data.duration, isLoading: false });

    onLoadStart = () => this.setState({ isLoading: true });

    onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

    onError = () => console.log('Oh! ');

    exitFullScreen = () => {
        console.log('Exit full screen');
    };

    enterFullScreen = () => { };

    onFullScreen = () => {
        if (this.state.screenType == 'contain')
            this.setState({ screenType: 'cover' });
        else this.setState({ screenType: 'contain' });
    };
    renderToolbar = () => (
        <View>
            <Text> toolbar </Text>
        </View>
    );
    onSeeking = (currentTime: any) => this.setState({ currentTime });

    render() {
        return (
            <View style={styles.container}>
                <Video
                    onEnd={this.onEnd}
                    onLoad={this.onLoad}
                    onLoadStart={this.onLoadStart}
                    onProgress={this.onProgress}
                    paused={this.state.paused}
                    ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                    resizeMode={this.state.screenType as TVideoScreenType}
                    // onFullScreen={this.state.isFullScreen}
                    source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    style={styles.mediaPlayer}
                    volume={10}
                />
                <TouchableOpacity style={styles.buttons} onPress={() => this.onPaused(null)}><Text style={{ flex: 1 }}>{this.state.paused ? 'Play' : 'Stop'}</Text></TouchableOpacity>

                {/* <MediaControls
                    duration={this.state.duration}
                    isLoading={this.state.isLoading}
                    mainColor="#333"
                    onFullScreen={this.onFullScreen}
                    onPaused={this.onPaused}
                    onReplay={this.onReplay}
                    onSeek={this.onSeek}
                    onSeeking={this.onSeeking}
                    playerState={this.state.playerState}
                    progress={this.state.currentTime}
                    toolbar={this.renderToolbar()}
                /> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    buttonsCont: {
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 5
    },
    buttons: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        opacity: 0.5
    }
});
export default PlayerTest;