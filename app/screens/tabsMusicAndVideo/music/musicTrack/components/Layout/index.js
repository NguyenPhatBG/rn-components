import React from 'react'
import { View } from 'react-native'
import Logo from '../Logo'
import Header from '../Header'

export default function Layout({ children }) {
	return (
		<View style={styles.container}>
			<Header />
			{children}
			<Logo />
		</View>
	)
}

const styles = {
	container: {
		flex: 1
	}
}