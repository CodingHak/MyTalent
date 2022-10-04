import React, { Component } from 'react';
import {
  View,
  TouchableNativeFeedback,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Constants from '../../constant/Constants.js';
import styles from './PackagePayment.style';
import { showMessage } from 'react-native-flash-message';
import AppviewModel from '../../utils/AppviewModel.js';
import { CustomHeader, Icon } from '../../controls/index.js';
import stripe from 'tipsi-stripe';
import { CustomButton } from '../../controls';
import CustomText from '../../controls/CustomText';
import CountryCodes from '../../constant/CountryCodes.js';
import ActionPicker from '../../controls/ActionPicker/ActionPicker';
import CountryCodeDropdown from '../../controls/CountryCodeDropdown/CountryCodeDropdown';
import { connect } from 'react-redux';
import { saveCardData } from '../../store/action';
import CardView from 'react-native-cardview';

stripe.setOptions({
  publishableKey: 'pk_test_J4XUJvB2kYThTokytgwMmiLb00Rnk6G2uw',
});

const actions = [
  {
    action: 'EDIT',
    label: 'EDIT CARD',
    icon: 'edit',
    type: 'Entypo',
  },
  {
    action: 'DELETE',
    label: 'DELETE CARD',
    icon: 'delete',
    type: 'AntDesign',
  },
];

const countryCodeData = CountryCodes.data;
var planId = '',
  productId = '',
  userAccessToken = '',
  planName = '',
  tempTknStripe = '',
  completeCardDetailJSON = [];

class PackagePayment extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.state = {
      fillDetail: false,
      loading: false,
      id: 0,
      name: this.props.user.first_name+ this.props.user.last_name,
      add1: '',
      add2: '',
      city: '',
      stateName: '',
      // country: '',
      pcode: '',
      email: this.props.user.email,
      loading: false,
      token: '',
      stripGeneratedToken: '',
      cardHolderName: '',
      cardNumber: '',
      cardExpiryMonth: '',
      cardExpiryYear: '',
      cardCvvNo: '',
      editCardName: '',
      editCardNumber: '',
      editCardExpiryDate: '',
      editCardExpiryYear: '',
      editCardCvvNo: '',
      userCards: [],
      cardModalVisible: false,
      editCardModalVisible: false,
      editItem: '',
      selectedIndex: 0,
      country: {
        Id: '+1',
        Title: 'United States of America',
        Image: require('../../assets/images/flags/us.png'),
      },
      selectedCard: null,
      selectedItem: null
    };

    planId = this.props.route.params.paramOne;
    productId = this.props.route.params.paramTwo;
    planName = this.props.route.params.paramThree;
    planName = planName.charAt(0).toUpperCase() + planName.slice(1);
    completeCardDetailJSON = [];
  }

  componentDidMount() {
    this.getUserCards();
  }

  handleActionPress = item => {
    let { selectedItem } = this.state;
    switch (item.action) {
      case 'EDIT':
        let data = selectedItem.expire.split('/');
        this.setState({
          cardHolderName: selectedItem.card_holder,
          cardNumber: selectedItem.card_number,
          cardCvvNo: selectedItem.cvv,
          cardExpiryMonth: data[0],
          cardExpiryYear: data[1],
          id: selectedItem.id,
          cardModalVisible: true,
        });
        break;
      case 'DELETE':
        this.deleteCard(selectedItem.id)
        break;
    }
  };

  addCard = () => {
    let expire = `${this.state.cardExpiryMonth}/${this.state.cardExpiryYear}`;
    if (!this.state.cardHolderName || this.state.cardHolderName.length <= 0) {
      showMessage({
        message: 'Please Enter Card Holder Name',
        type: 'danger',
      });
      return;
    } else if (!this.state.cardNumber || this.state.cardNumber.length <= 0) {
      showMessage({
        message: 'Please Enter Card Number',
        type: 'danger',
      });
      return;
    } else if (!expire || expire.length <= 0) {
      showMessage({
        message: 'Please Enter Card Expiry Month & Year',
        type: 'danger',
      });
      return;
    } else if (!this.state.cardCvvNo || this.state.cardCvvNo.length <= 0) {
      showMessage({
        message: 'Please Enter Card CVV NUmber',
        type: 'danger',
      });
      return;
    } else {
      let payload = new FormData();
      payload.append('card_holder', this.state.cardHolderName);
      payload.append('card_number', this.state.cardNumber);
      payload.append('expire', expire);
      payload.append('cvv', this.state.cardCvvNo);
      AppviewModel.sendApiCall(
        '/v1/auth/add_card',
        payload,
        null,
        response => {
          let card = this.state.userCards
          card.push({
            "id": response.card.id,
            "card_holder": response.card.card_holder,
            "card_number": response.card.card_number,
            "cvv": response.card.cvv,
            "expire": response.card.expire
          })
          this.setState({ userCards: card })
          this.setState({
            cardModalVisible: false,
          });
        },
        error => {
        },
        true,
      );
    }
  };

  editCard = () => {
    let payload = new FormData();
    var expire = `${this.state.cardExpiryMonth}/${this.state.cardExpiryYear}`;
    payload.append('id', this.state.id);
    payload.append('card_holder', this.state.cardHolderName);
    payload.append('card_number', this.state.cardNumber);
    payload.append('expire', expire);
    payload.append('cvv', this.state.cardCvvNo);
    AppviewModel.sendApiCall(
      '/v1/auth/edit_card',
      payload,
      null,
      response => {
        let data = this.state.userCards
        let i = data.findIndex(item => item.id == this.state.id)
        data[i] = {
          "id": this.state.id,
          "card_holder": this.state.cardHolderName,
          "card_number": this.state.cardNumber,
          "expire": expire,
          "cvv": this.state.cardCvvNo
        }
        this.setState({ userCards: data })
        this.setState({ cardModalVisible: false });
      },
      error => {
      },
      true,
    );
  };

  deleteCard = id => {
    let payload = new FormData();
    payload.append('id', id);
    AppviewModel.sendApiCall(
      '/v1/auth/delete_card',
      payload,
      null,
      response => {
        let data = this.state.userCards
        let i = data.findIndex(item => item.id == id)
        data.splice(i, 1);
        this.setState({ userCards: data })
      },
      error => {
      },
      true,
    );
  };

  doPayment = () => {
    var subId = this.props.route.params.subId;
    let payload = {};
    AppviewModel.sendApiCall(
      `/v1/stripepayment?stripeToken=${tempTknStripe}&packages_id=${planId}&
      sub_id=${subId}`,
      payload,
      null,
      response => {
        showMessage({
          message: response.data.message,
          type: 'success',
        });
        // this.props.navigation.navigate('Home');
      },
      error => {
      },
      true,
    );
  };

  buySubscription = () => {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (!this.state.name || this.state.name.length <= 0) {
      showMessage({
        message: 'Please Enter Your Name',
        type: 'danger',
      });
      return;
    } else if (!this.state.email || this.state.email.length <= 0) {
      showMessage({
        message: 'Please Enter Your Email Address',
        type: 'danger',
      });
      return;

    } else if (regex.test(this.state.email) === false) {
      showMessage({
        message: "Please Enter valid email id",
        type: "danger",
      });
      return;
    } else if (!this.state.add1 || this.state.add1.length <= 0) {
      showMessage({
        message: 'Please Enter Your Address',
        type: 'danger',
      });
      return;
    } else {
      var name = this.state.name;
      var add1 = this.state.add1;
      var add2 = this.state.add2;
      var city = this.state.city;
      var stateName = this.state.stateName;
      var country = this.state.country.Title;
      var pcode = this.state.pcode;
      var email = this.state.email;
      var expiry = this.state.selectedItem.expire.split('/')

      this.goToStripeView(
        name,
        add1,
        country,
        email,
        this.state.selectedItem.card_number,
        expiry[0],
        expiry[1],
        this.state.selectedItem.cvv,
      );
    }

    // var tempdetails = completeCardDetailJSON;
    // if (Object.keys(tempdetails).indexOf('values') == 0) {
    //   var obj = tempdetails.values;
    //   tempCardNo = obj.number;
    //   var ab = tempCardNo.split(' ');
    //   tempCardNo = ab[0] + ab[1] + ab[2] + ab[3];
    //   if ((tempCardNo.length < 16) || (tempCardNo.length > 16)) {
    //     return null;
    //   }
    //   var tempA = obj.expiry;
    //   var tempB = tempA.split('/');
    //   tempExpMonth = tempB[0];
    //   tempExpYear = tempB[1];
    //   tempCVV = obj.cvc;
    // } else {
    // }

    // if ((name != '') && (add1 != '') &&
    //   (country != '') && (email != '') && (tempCardNo != '') && (tempExpMonth != '') &&
    //   (tempExpYear != '') && (tempCVV != '')) {
    //   this.goToStripeView(name, add1, country, email, tempCardNo, tempExpMonth, tempExpYear, tempCVV);
    // } else {
    // }
  };

  goToStripeView = async (
    name1,
    add1,
    country1,
    email1,
    tempCardNo1,
    tempExpMonth1,
    tempExpYear1,
    tempCVV1,
  ) => {
    const params = {
      number: tempCardNo1,
      expMonth: parseInt(tempExpMonth1),
      expYear: parseInt(tempExpYear1),
      cvc: tempCVV1.toString(),
      name: name1,
      currency: 'usd',
      addressLine1: add1,
      addressLine2: '', //add2,
      addressCity: '', //city1,
      addressState: '', //stateName,
      addressCountry: country1,
      addressZip: '', //pcode,
    };
    stripe.createTokenWithCard(params)
      .then((res) => {
        tempTknStripe = res.tokenId;
        this.doPayment();
      })
      .catch((err) => {
        let error = JSON.parse(JSON.stringify(err))
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  getUserCards = () => {
    this.setState({ loading: true });
    AppviewModel.sendApiCall(
      '/v1/auth/get_card',
      null,
      'GET',
      response => {
        this.setState({ loading: false });
        this.setState({ userCards: response.card, selectedItem: response.card[0] });
      },
      error => {
        this.setState({ loading: false });
      },
    );
  };

  expiryDateFunction = cardExpiryDate => {
    if (cardExpiryDate.length < 2) {
      return cardExpiryDate;
    } else {
      cardExpiryDate.substr(0, 2);
      return cardExpiryDate;
    }
  };

  handleFunction = () => {
    if (this.state.id) {
      this.editCard()
    } else {
      this.addCard()
    }
  }

  cardModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.cardModalVisible}
        onRequestClose={() => this.setState({ cardModalVisible: false })}>
        <TouchableOpacity
          onPress={() => this.setState({ cardModalVisible: false })}
          style={styles.cardModalContainer}>
          <TouchableNativeFeedback>
            <View
              style={{
                width: '85%',
                borderRadius: 20,
              }}>
              <ImageBackground
                imageStyle={{ borderRadius: 20 }}
                source={Constants.backg1}
                style={styles.modalBgImg}>
                <View style={{ padding: 20, width: '100%' }}>
                  <TouchableOpacity
                    onPress={() => this.setState({ cardModalVisible: false })}
                    style={{ marginTop: 5, alignSelf: 'flex-end' }}>
                    <Icon
                      name="cross"
                      type="Entypo"
                      style={{ fontSize: 24, color: Constants.blackColor }}
                    />
                  </TouchableOpacity>
                  <View style={{ marginBottom: 5 }}>
                    <CustomText
                      style={styles.headingTxt}>
                      {this.state.id ? 'Edit' : 'Add'} Card
                    </CustomText>
                  </View>
                  <View style={{}}>
                    <View style={{ marginVertical: 5 }}>
                      <CustomText
                        style={{
                          color: Constants.whiteColor,
                          fontSize: 18
                        }}>
                        Name:
                      </CustomText>
                    </View>
                    <View>
                      <TextInput
                        style={styles.txtInput}
                        onChangeText={text => this.setState({ cardHolderName: text })}
                        placeholder="Enter Your Name"
                        secureTextEntry={false}
                        placeholderTextColor={Constants.blackColor}
                        value={this.state.cardHolderName}
                        maxLength={100}
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ marginVertical: 5 }}>
                      <CustomText
                        style={{ color: Constants.whiteColor, fontSize: 18 }}>
                        Card Number:
                      </CustomText>
                    </View>
                    <View>
                      <TextInput
                        style={styles.txtInput}
                        onChangeText={text => this.setState({ cardNumber: text })}
                        placeholder="Enter Your Card Number"
                        secureTextEntry={false}
                        maxLength={16}
                        keyboardType={'number-pad'}
                        placeholderTextColor={Constants.blackColor}
                        value={this.state.cardNumber}
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <View style={{ marginVertical: 5 }}>
                        <CustomText
                          style={{ color: Constants.whiteColor, fontSize: 18 }}>
                          Expiry Date
                        </CustomText>
                      </View>
                      <View
                        style={styles.expiryContainer}>
                        <TextInput
                          ref={this.myRef1}
                          style={styles.expiryTxtInput}
                          onChangeText={text => {
                            if (text.length == 2) {
                              this.myRef2.current.focus();
                            }
                            this.setState({ cardExpiryMonth: text });
                          }}
                          placeholder="MM"
                          secureTextEntry={false}
                          maxLength={2}
                          numberOfLines={1}
                          keyboardType={'number-pad'}
                          placeholderTextColor={Constants.blackColor}
                          value={this.state.cardExpiryMonth}
                        />
                        <CustomText
                          style={styles.txt}>
                          /
                        </CustomText>
                        <TextInput
                          ref={this.myRef2}
                          style={styles.expiryYr}
                          onChangeText={text => {
                            if (text.length == 0) {
                              this.myRef1.current.focus();
                            }
                            this.setState({ cardExpiryYear: text });
                          }}
                          placeholder="YY"
                          secureTextEntry={false}
                          maxLength={2}
                          numberOfLines={1}
                          keyboardType={'number-pad'}
                          placeholderTextColor={Constants.blackColor}
                          value={this.state.cardExpiryYear}
                        />
                      </View>
                    </View>

                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <View style={{ marginVertical: 5 }}>
                        <CustomText
                          style={{ color: Constants.whiteColor, fontSize: 18 }}>
                          CVV
                        </CustomText>
                      </View>
                      <View>
                        <TextInput
                          style={styles.txtInput}
                          onChangeText={text =>
                            this.setState({ cardCvvNo: text })
                          }
                          placeholder="CVV Number"
                          secureTextEntry={false}
                          maxLength={3}
                          numberOfLines={1}
                          keyboardType={'number-pad'}
                          placeholderTextColor={Constants.blackColor}
                          value={this.state.cardCvvNo}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <CustomButton
                      title={'Save Card'}
                      style={styles.cardBtn}
                      textStyle={{ color: Constants.blackColor }}
                      onPress={() => this.handleFunction()}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableNativeFeedback>
        </TouchableOpacity>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.cardModal()}
        <CustomHeader headertxt="Package Payment" menu {...this.props} />
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <ScrollView>
            <View style={styles.billingContainer}>
              <View
                style={{
                  flex: 1,
                  borderWidth: 0.5,
                  borderColor: Constants.color1,
                }}>
                <View style={styles.borderDesign}>
                  <CustomText style={styles.text3}>Sub Total:</CustomText>
                </View>
                <View style={styles.borderDesign}>
                  <CustomText style={styles.text3}>Discount:</CustomText>
                </View>
                <View style={[styles.borderDesign, { borderBottomWidth: 0 }]}>
                  <CustomText style={styles.text3}>Total Amount:</CustomText>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 0.5,
                  borderColor: Constants.color1,
                }}>
                <View style={styles.borderDesign}>
                  <CustomText style={styles.text3}>
                    $ {this.props.route.params.amount}
                  </CustomText>
                </View>
                <View style={styles.borderDesign}>
                  <CustomText style={styles.text3}>
                    $ {this.props.route.params.discount.toFixed(2)}
                  </CustomText>
                </View>
                <View style={[styles.borderDesign, { borderBottomWidth: 0 }]}>
                  <CustomText style={styles.text3}>
                    ${' '}
                    {(
                      this.props.route.params.amount -
                      this.props.route.params.discount
                    ).toFixed(2)}
                  </CustomText>
                </View>
              </View>
            </View>

            {/* Billing Address */}
            <View style={{ marginHorizontal: 10, marginTop: -5 }}>
              <View style={styles.view4}>
                <CustomText style={styles.text2}>Billing Address :-</CustomText>
              </View>

              {/* name */}
              <View style={[styles.view5, { marginTop: -5 }]}>
                <TextInput
                  style={styles.loginTextInput1}
                  onChangeText={text => this.setState({ name: text })}
                  placeholder="Full Name"
                  secureTextEntry={false}
                  placeholderTextColor={Constants.color1}
                  value={this.state.name}
                />
              </View>
              {/* email */}
              <View style={styles.view5}>
                <TextInput
                  style={styles.loginTextInput1}
                  onChangeText={text => this.setState({ email: text })}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  secureTextEntry={false}
                  placeholderTextColor={Constants.color1}
                  value={this.state.email}
                />
              </View>

              <View style={styles.view5}>
                <TextInput
                  style={styles.loginTextInput1}
                  onChangeText={text => this.setState({ add1: text })}
                  placeholder="Address"
                  secureTextEntry={false}
                  placeholderTextColor={Constants.color1}
                  value={this.state.add1}
                />
              </View>
              <View style={[styles.view5, { marginTop: 10 }]}>
                <CountryCodeDropdown
                  showImage={true}
                  showIdInLabel={false}
                  selectedValue={this.state.country}
                  defaultText={'Country'}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({ country: itemValue });
                  }}
                  Data={countryCodeData}
                  style={styles.countryDropDown}
                  itemStyle={[{ fontSize: 14, color: '#808080' }]}
                  showCaret={true}
                />
              </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View style={styles.view4}>
                  <CustomText style={styles.text2}>Saved Cards</CustomText>
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({
                    cardModalVisible: true,
                    cardHolderName: '',
                    cardNumber: '',
                    cardCvvNo: '',
                    cardExpiryMonth: '',
                    cardExpiryYear: '',
                    id: 0
                  })}
                  style={styles.newCardBtn}>
                  <CustomText>+ New Card</CustomText>
                </TouchableOpacity>
              </View>
              {!this.state.loading && (
                <View style={{ paddingBottom: 10 }}>
                  {this.state.userCards &&
                    this.state.userCards.map((item, index) => {
                      return (
                        <CardView
                          cardElevation={5}
                          style={[
                            styles.cardView1,
                            {
                              paddingVertical: 10,
                              paddingHorizontal: 20,
                              backgroundColor: Constants.whiteColor,
                            },
                          ]}
                          cornerRadius={10}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({ selectedItem: item })
                            }}
                            style={{
                              flexDirection: 'row',
                              flex: 1,
                              alignItems: 'center',
                            }}>
                            <View>
                              {this.state.selectedItem && this.state.selectedItem.id == item.id ? (
                                <Icon
                                  name="dot-circle-o"
                                  type="FontAwesome"
                                  style={{
                                    fontSize: 30,
                                    color: Constants.color1,
                                  }}
                                />
                              ) : (
                                <Icon
                                  name="circle-o"
                                  type="FontAwesome"
                                  style={{
                                    fontSize: 30,
                                    color: Constants.color1,
                                  }}
                                />
                              )}
                            </View>
                            <View style={{ marginLeft: 30, flex: 1 }}>
                              <View>
                                <CustomText style={styles.text3}>
                                  {item.card_number}
                                </CustomText>
                              </View>
                              <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View>
                                  <CustomText style={styles.text3}>
                                    {item.card_holder}
                                  </CustomText>
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                  <CustomText style={styles.text3}>
                                    {item.expire}
                                  </CustomText>
                                </View>
                              </View>
                            </View>
                            <View
                              style={{
                                marginLeft: 10,
                              }}>
                              <ActionPicker
                                data={actions}
                                onPress={() => this.setState({ selectedItem: item })}
                                onActionPress={(item) => this.handleActionPress(item)}
                                {...this.props}
                              />
                            </View>
                          </TouchableOpacity>
                        </CardView>
                      );
                    })}
                </View>
              )}
              {this.state.loading && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator color={Constants.color1} size="large" />
                </View>
              )}
            </View>
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.buySubscription()}>
            <View style={styles.btn}>
              <CustomText style={{ color: Constants.whiteColor }}>PAY</CustomText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  card: state.card,
});

const mapDispatchToProps = dispatch => {
  return {
    saveCardData: data => {
      dispatch(saveCardData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PackagePayment);
