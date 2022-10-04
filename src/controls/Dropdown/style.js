import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center'
    },
    dropdown: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%'
    },
    dropdownLabel: {
        fontSize: 16
    },
    popupContainer: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 0,
        paddingBottom:10,
        position: 'absolute',
        bottom: 0
    },
    label: {
        fontSize: 16,
        color: '#262626',
    },
    closeButton: {
        fontSize: 16,
        marginBottom: 3,
        color: '#b5b2b2'
    },
    listItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,        
    },
    selectedIcon: {
        fontSize: 16,
        color: 'green'
    }
});