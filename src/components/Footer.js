import React from 'react';
import { Text, View } from 'react-native';

const Footer= (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.footerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#b3cccc',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        paddingBottom: 10,
        paddingTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 2,
        elevation: 10
    },
    textStyle: {
        fontSize: 20
    }
};

export default Footer;
