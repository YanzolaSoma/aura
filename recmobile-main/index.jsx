
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email.trim() || !password.trim()) {
      return Alert.alert(
        "Entrar",
        "Preencha e-mail e senha para entrar"
      );
    }

    Alert.alert("Sucesso", "Login realizado!");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>E-mail</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Text>Senha</Text>
      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Entrar" onPress={handleSignIn} />
    </View>
  );
}
