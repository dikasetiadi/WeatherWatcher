import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { func, shape } from 'prop-types';

const App = ({ navigation }) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

App.propTypes = {
  navigation: shape({
    navigate: func.isRequired,
  }).isRequired,
};

export default App;
