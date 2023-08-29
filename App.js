import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  // Function to calculate heart rate limits
  const calculateHeartRateLimits = (ageValue) => {
    const ageNum = parseInt(ageValue, 10);
    if (isNaN(ageNum)) {
      setLowerLimit(0);
      setUpperLimit(0);
      return;
    }
    const lower = (220 - ageNum) * 0.65;
    const upper = (220 - ageNum) * 0.85;
    setLowerLimit(Math.floor(lower));
    setUpperLimit(Math.floor(upper));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => {
          setAge(text);
          calculateHeartRateLimits(text);
        }}
      />
      <Text style={styles.result}>
        Lower Limit: {lowerLimit}
      </Text>
      <Text style={styles.result}>
        Upper Limit: {upperLimit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
  },
});

export default App;
