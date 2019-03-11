import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>m00иSiTe</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#b3cccc',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
