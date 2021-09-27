import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        height: 300,
        backgroundColor: '#6C63FF',
        paddingVertical: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        top: 0,

    },
    avatar: {
        height: 140,
        width: 140,
        borderRadius: 70,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        color: '#FFF'
    },
    listItem: {
        padding: 20,
        fontSize:18,
        color: '#FFF'
    }
})