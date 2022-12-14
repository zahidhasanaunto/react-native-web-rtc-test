import * as React from 'react';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import type { RootStackParamList } from './App';
import { useTheme } from '@react-navigation/native';

export const PreJoinPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'PreJoinPage'>) => {
  const [url, setUrl] = useState('wss://livekit.appxify.com');
  const [token, setToken] = useState<string>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6InJvb20xIiwiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlfSwiaWF0IjoxNjYwNTQ3NzEzLCJuYmYiOjE2NjA1NDc3MTMsImV4cCI6MTY2OTE4NzcxMywiaXNzIjoiQVBJWXlIQ2ZrRGNTUGdkIiwic3ViIjoidXNlcjIiLCJqdGkiOiJ1c2VyMiJ9.wVavM23t6XVcqG5gc3_sBI-MKrKQk9o95ovGzEKN6zQ');

  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: colors.text }}>URL</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setUrl}
        value={url}
      /> */}

      <Text style={{ color: colors.text }}>Token</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setToken}
        value={token}
      />

      <Button
        title="Connect"
        onPress={() => {
          navigation.push('RoomPage', { url: url, token: token });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
