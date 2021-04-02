import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  array,
  number,
  object,
  oneOfType,
  string,
} from 'prop-types';
import { styles } from './styles';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword() {
    this.setState((prevState) => ({ secureInput: !prevState.secureInput }));
  }

  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
    } = this.props;
    const { secureInput } = this.state;
    const color = labelColor;
    const fontSize = labelTextSize;
    const inputColor = textColor;
    const borderBottom = borderBottomColor;

    return (
      <View style={[customStyle, styles.wrapper]}>
        {labelText && (
          <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        )}
        {inputType === 'password' && (
          <TouchableOpacity style={styles.showButton} onPress={this.toggleShowPassword}>
            <Text style={styles.showButtonText}>
              {secureInput ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled,
          ]}
          secureTextEntry={secureInput}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: string,
  labelTextSize: number,
  labelColor: string,
  textColor: string,
  borderBottomColor: string,
  inputType: string,
  customStyle: oneOfType([object, array]),
};

InputField.defaultProps = {
  labelText: '',
  labelTextSize: 14,
  labelColor: 'white',
  textColor: 'white',
  borderBottomColor: 'transparent',
  inputType: 'text',
  customStyle: {},
};

export default InputField;
