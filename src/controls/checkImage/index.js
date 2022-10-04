import React from "react";
import {View, Text, Image} from 'react-native'
import PropTypes from 'prop-types';
import Images from "../../utils/Images";

class Thumb extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}

    render(){
        const {source, style} = this.props
        return(
            <View style={{width:'100%'}}>
                <Image style={style} 
                    // defaultImg={{uri:source}} 
                    source={source}
                    onError={(error)=>console.log("the error in image is ==+>",error)}
                />
            </View>
        )
    }
}

Thumb.propTypes = {
    type:PropTypes.string,
    label:PropTypes.string,
    defaultImg:PropTypes.string,
    style:PropTypes.object,
    disabledBtn:PropTypes.bool,
    fullScrnView:PropTypes.bool,
    onPressFunc:PropTypes.func,
    errorType:PropTypes.func,
    source:PropTypes.string
}

Thumb.defaultProps = {
    source:'https://image.shutterstock.com/z/stock-vector-logo-combining-letter-g-and-dragon-1683498391.jpg',
};

export default Thumb