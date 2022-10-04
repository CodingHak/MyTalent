import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, TextInput, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
import styles from "./style";
import CustomHeader from "../CustomHeader/CustomHeader";
import { connect } from "react-redux";
import ProgressDialog from "../../controls/ProgressDialog";
import { getOrderData, filteredData, unFilteredData } from "../../store/action";


class OrderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <CustomHeader headertxt="ORDER" />

            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    wishlist: state.wishlist,
    user: state.user,
    orders: state.orders
});

const mapDispatchToProps = dispatch => {
    return {

        // getOrderData: data => {
        //     dispatch(getOrderData(data));
        // },
        // filteredData: data => {
        //     console.log('daaa filtered', data);
        //     dispatch(filteredData(data));
        // },
        // unFilteredData: data => {
        //     console.log('daa unfiltere', data);
        //     dispatch(unFilteredData(data));
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);