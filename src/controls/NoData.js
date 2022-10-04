import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { CustomFont } from '../controls'
import Colors from '../utils/Colors';

class Recordnotfound extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 550, }}>
                    <CustomFont style={{
                        fontFamily: Colors.font1,
                        fontSize: 14,
                        color: Colors.txtColorblack
                    }} Text={'No data found'} />
                </View>
            </View>
        );
    }
}

export default Recordnotfound;