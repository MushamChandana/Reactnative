import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, HelperText } from 'react-native-paper';

export default class Loginscreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailerror: false,
            passworderror: false,
            emailvalue: '',
            passwordvalue: '',
            ispasswordicon: true
        }
    }
    LoginButtonPressed = () => {
        this.props. navigation.navigate('Dashboard')
        if (this.state.emailvalue == '') {
            this.setState({
                emailerror: true
            })
        }
        else {
            this.setState({
                emailerror: false
            })
        }
        if (this.state.passwordvalue == '') {
            this.setState({
                passworderror: true
            })
        }
        else {
            this.setState({
                passworderror: false
            })
        }
    }

    emailvaluechange = (value) => {
        console.log("email value is....", value)
        this.setState({
            emailvalue: value
        })
        this.validateEmail(value)

    }
    passwordvaluechange = (value) => {
        console.log("password value is....", value)
        this.setState({
            passwordvalue: value
        })
        this.validatePassword(value)
    }
    validateEmail = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) == false) {
            this.setState({
                emailerror: true
            })

        }
        else {
            this.setState({
                emailerror: false
            })
        }
    }
    validatePassword = (password) => {
        const reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (reg.test(password) == false) {
            this.setState({
                passworderror: true
            })

        }
        else {
            this.setState({
                passworderror: false
            })
        }
    }
    showpasswordicon = () => {
        this.setState({
            ispasswordicon: !this.state.ispasswordicon
        })
    }
    render() {
        return (
            <KeyboardAvoidingView
                behavior="height"
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: '#A9A2B0' }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', margin: '10%' }}>
                            <Image source={require('../assets/tatasky.jpeg')}
                                style={styles.img} />
                            <Text style={styles.text}>SIRI CABLE NETWORK</Text>
                        </View>
                        <View style={{ margin: '5%' }}>
                            <TextInput
                                placeholder="Email"
                                mode='outlined'
                                label="Email"
                                value={this.state.emailvalue}
                                error={this.state.emailerror}
                                onChangeText={this.emailvaluechange}
                            />
                            <HelperText type="error" visible={this.state.emailerror}>
                                Email address is invalid!
                            </HelperText>

                            <TextInput
                                placeholder="password"
                                mode="outlined"
                                label="password"
                                value={this.state.passwordvalue}
                                error={this.state.passworderror}
                                onChangeText={this.passwordvaluechange}
                                secureTextEntry={this.state.ispasswordicon}
                                right={<TextInput.Icon name={this.state.ispasswordicon ? "eye" : "eye-off"} onPress={this.showpasswordicon} />}
                                error={this.state.passworderror}
                            />
                            <HelperText type="error" visible={this.state.passworderror}>
                                password not meet the required validations
                            </HelperText>
                            <Button
                                style={{ margin: '10%' }}
                                mode="contained"
                                onPress={this.LoginButtonPressed}
                            >
                                Login
                            </Button>

                        </View>


                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    img: { width: 200, height: 200, borderRadius: 35 },
    text: { color: '#350467', fontSize: 30, fontWeight: 'bold' }
}) 