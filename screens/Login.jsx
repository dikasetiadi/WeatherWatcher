import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import InputField from '@components/InputField';

export const Login = () => (
  <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
    <View style={styles.scrollViewWrapper}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.loginHeader}>Login</Text>
        <InputField
          labelText="EMAIL ADDRESS"
          labelTextSize={14}
          labelColor="white"
          textColor="white"
          borderBottomColor="white"
          inputType="email"
          customStyle={{ marginBottom: 30 }}
        />
        <InputField
          labelText="PASSWORD"
          labelTextSize={14}
          labelColor="white"
          textColor="white"
          borderBottomColor="white"
          inputType="password"
          customStyle={{ marginBottom: 30 }}
        />
      </ScrollView>
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'green',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: '300',
    marginBottom: 40,
  },
});
