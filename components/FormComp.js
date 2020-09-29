import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormComp = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.form}>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        label="First name"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text}>Last Name</Text>
      <TextInput
        label="Last name"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text}>Year of Birth</Text>
      <TextInput
        label="birth"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text}>Address</Text>
      <TextInput
        label="address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text}>Email</Text>
      <TextInput
        label="email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.text}>Phone number</Text>
      <TextInput
        style={styles.input}
        label="enumbermail"
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'grey',
    padding: 25,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
  },
  input: {
    borderColor: 'black',
  },
});

export default FormComp;
