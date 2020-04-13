import { StyleSheet, Dimensions } from 'react-native'
import { Color } from './color'
const DEVICE_WIDTH = Dimensions.get("window").width

const Common = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    alignStart: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textbox: {
        width: 300,
        height: 50,
        borderWidth: .8,
        borderColor: Color.gray500,
        padding: 20,
        fontSize: 16,
    },
    textInput: {
        width: 300,
        height: 50,
    },
    textArea: {
        width: 300,
        height: 80,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 45
    },

    //paper elements
    divider: {
        width: DEVICE_WIDTH,
        color: Color.gray900,
    }
})

const Scroll = StyleSheet.create({

    scrollMain: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#00bfa5',
    },
    scrollItems: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 0,

    },
    scrollImage: {
        height: 200,
        width: 200,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#00897B',
        shadowOpacity: .5,
    }
});

const FlatList = StyleSheet.create({

    flatList: {
        height: 200
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: '5%',
        height: 60
    },
    listItemsTouchable: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    listItemsText: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    separator: {
        height: .5,
        width: "100%",
        backgroundColor: "gray"
    },
    FlatListHeader: {
        height: 100,
        backgroundColor: '#f1ece5',
        alignItems: "center",
        justifyContent: 'center',
    },
})

Common.Scroll = Scroll
Common.FlatList = FlatList

export {
    Common
}
