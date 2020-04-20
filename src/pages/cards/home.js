import React from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, FlatList, LayoutAnimation, Platform, UIManager } from 'react-native'
import { Divider, Colors, Button } from 'react-native-paper'
import { Common, Color } from 'src/styles/main'
import CustomNavBar from 'src/components/customNavBar'
import CardItem from 'src/components/cards'
import SearchBar from 'src/components/searchBar'
import ItemList from 'src/pages/cards/itemList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const DEVICE_WIDTH = Dimensions.get("window").width
const navbarTypes = ['list', 'grid']

class home extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedTab: 0,
            type: navbarTypes[0],
            title: ''
        }
        if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }
    }
    render() {
        const isGridView = this.state.type == navbarTypes[0] ? false : true
        return (
            <SafeAreaView style={styleThis.container}>
                <SearchBar onChangeText={(val) => { this.onSearch(val) }} />
                <Divider style={Common.divider} />
                <View style={styleThis.contain} >
                    <CustomNavBar
                        types={navbarTypes}
                        activeType={this.state.type}
                        onToggle={this.onToggle}
                    />
                    <View style={{ ...styleThis.viewRows, marginBottom: 50 }}>
                        <ItemList isGridView={isGridView} title={this.state.title} />
                    </View>
                </View>
            </SafeAreaView >
        )
    }
    componentDidUpdate = () => {
    }
    onToggle = (type) => {
        LayoutAnimation.configureNext(LayoutAnimation.create(300, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity))
        this.setState({ type })
    }
    onSearch = (val) => {
        this.setState({ title: val })
    }
}
export default home

const styleThis = StyleSheet.create({
    container: {
        flex: 1,
        ...Common.alignCenter,
        //backgroundColor: Color.gray100
    },
    contain: {
        flex: 1,
        ...Common.flexColoumn,
        ...Common.alignStart,
    },
    viewRows: {
        ...Common.flexColoumn,
        ...Common.alignCenter,
        width: DEVICE_WIDTH,
        paddingVertical: 10,
    },
})

