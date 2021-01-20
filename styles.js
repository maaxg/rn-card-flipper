import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        transform: [{ scale: 1 }],
    },
    card: {
        position: 'relative',
        height: Dimensions.get('window').height / 3 + 20,
        width: Dimensions.get('window').width / 3 + 60,
        backgroundColor: 'royalblue',
        elevation: 1,
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 5,
        overflow: 'hidden',
    },
    face: {
        position: 'relative',
        height: Dimensions.get('window').height / 3 + 20,
        width: Dimensions.get('window').width / 3 + 60,
        backgroundColor: 'white',
        elevation: 1,
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 5,
        overflow: 'hidden',
    },
    cardImage: {
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    }
})