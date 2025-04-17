import { useState, useEffect } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { styles } from './styles';

export default function WelcomeAlert() {
  const [name, setName] = useState<string>('');
  const [submittedName, setSubmittedName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (submittedName) {
      timer = setTimeout(() => {
        setMessage(`Welcome, ${submittedName}!`);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [submittedName]);

  return (
    <View>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        testID="name-input"
      />
      <Pressable
        onPress={() => setSubmittedName(name)}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        testID="submit-button"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
      <View testID="message-container">
        <Text>{message}</Text>
      </View>
    </View>
  );
}
