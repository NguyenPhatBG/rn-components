import React, { useEffect } from 'react'
import { AppState, Animated, Dimensions, View } from 'react-native'
import { Provider } from 'react-redux'
import TrackPlayer from 'react-native-track-player'
import RNBootSplash from "react-native-bootsplash";

import store from './store'
import Header from '../Header';
import HeaderPage from '../components/Header';
import Logo from '../components/Logo';
import Record from '../Record';
import Handle from '../Handle';
import Lists from '../Lists';

import { _panResponder, positionY, miniPos } from '../animations/Animation';
import { updatePlayback, initializePlayback } from '../reducers/Player/actions'

import Service from './service'
import Colors from './../constants';

const { width, height } = Dimensions.get('window');

export default function withProvider() {
	const animation = {
		miniPos,
		positionY
	}
	store.dispatch(initializePlayback())

	AppState.addEventListener('change', appState => {
		if (appState == 'active') {
			store.dispatch(updatePlayback())
		}
	})

	TrackPlayer.registerPlaybackService(() => Service(store.dispatch));

	useEffect(() => {
		RNBootSplash.hide({ duration: 250 });
	}, []);

	return (
		<Provider store={store}>
			<View style={styles.container}>
				<HeaderPage />
				<View style={styles.containerList}>
					<Lists />
				</View>
				<Animated.View style={styles.containerPlayer}>
					<Header {...animation} />
					<Record {...animation} />
					<Handle {...animation} {..._panResponder.panHandlers} />
				</Animated.View>
				<Logo />
			</View>
		</Provider>
	);
}

const styles = {
	container: {
		flex: 1
	},
	containerList: { 
		flex: 1, 
		backgroundColor: Colors.layoutBG 
	},
	containerPlayer: {
		width,
		height,
		top: 0,
		left: 0,
		position: 'absolute',
		zIndex: 9998,
		backgroundColor: 'rgb(35, 40, 44)',
		transform: [{ translateY: positionY }]
	}
}