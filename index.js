import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/app'
import { AplloClient, ApolloProvider } from 'src/config/apollo'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Color } from 'src/styles/main'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'tomato',
        // accent: 'yellow',
        primary: '#3f50b5',
        accent: '#f1c40f',
    },
}

const StarterApp = () => (
    <ApolloProvider client={AplloClient}>
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    </ApolloProvider>
)

AppRegistry.registerComponent('ImageCard', () => StarterApp)