import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, TextInput, Keyboard, } from "react-native";
import { connect } from "react-redux";
// import API from "../../API/APIconfig";
import { saveUserData } from "../../store/action";
import CustomHeader from "../CustomHeader/CustomHeader";
import style from "./style";


class AccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { user } = this.props
        const { profileImage, } = this.state
            return (
                <ScrollView style={style.container}>
                     <CustomHeader headertxt="ACCOUNT" />
                </ScrollView>
            )
        }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => {
    return {
        saveUserData: data => {
            dispatch(saveUserData(data));
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);