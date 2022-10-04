import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomHeader from '../screens/CustomHeader/CustomHeader';
import Colors from '../utils/Colors';
import ProgressDialog from './ProgressDialog';


class MyWebComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2500);
    }

    render() {
        const { header, url } = this.props.route.params
        return (
            <View style={{
                flex: 1,
                backgroundColor: Colors.themeColor6
            }}>
                <CustomHeader headertxt={header} />
                <WebView source={{ uri: url }} />
                {this.state.isLoading && <ProgressDialog size="large" />}
            </View>
        )
    }
}

export default MyWebComponent;