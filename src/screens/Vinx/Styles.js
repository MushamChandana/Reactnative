import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    silde: {
        height: '20%',
        backgroundColor: '#F9D915'

    },
    icon: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    icon2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 10,
        marginHorizontal: 15


    },
    text: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: "500",
        color: 'black'

    },
    wall: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flex: 1,
        padding: 20,

    },




    set: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    set2: {
        flexDirection: 'row',
        marginHorizontal: 5,
        alignItems: 'center',
        marginVertical: 5
    },
    set3: {
        marginHorizontal: 15,
        fontSize: 18

    },
    set4: {
        marginHorizontal: 10,
        fontSize: 16
    },
    set5: {
        borderWidth: 1,
        height: 25,
        width: 70,
        borderColor: '#0091EA',
        borderRadius: 10

    },
    set6: {
        color: '#0091EA',
        alignSelf: 'center',
        fontSize: 16

    },
    qrpay: {
        fontSize: 10,
        marginHorizontal: 15,
        color: '#515151'
    },
    privacy: {
        color: '#515151',
        alignSelf: 'center',
        marginTop: 40
    },
    profile: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10
    }
})
export default Styles;