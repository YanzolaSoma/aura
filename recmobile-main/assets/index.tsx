import { Button } from "@/src/app/components/button";
import { Input } from "@/src/app/components/input";
import { Link } from "expo-router";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Signup() {

  function handleSignUp() {
    Alert.alert("Cadastrar", "Função acionada");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("@/src/app/assets/castaldi.jpg")}
            style={styles.logo}
          />

          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>Crie sua conta.</Text>

          <View style={styles.form}>
            <Input placeholder="Nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
            />

            <Input
              placeholder="Senha"
              secureTextEntry
            />

            <Input
              placeholder="Confirmar senha"
              secureTextEntry
            />

            <Button
              label="Cadastrar"
              onPress={handleSignUp}
            />
          </View>

          <Text style={styles.footer}>
            Já possui uma conta?{" "}
            <Link href="/" style={styles.link}>
              Entrar
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
    backgroundColor: "#fff",
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 30,
  },

  form: {
    gap: 20,
  },

  footer: {
    marginTop: 30,
    textAlign: "center",
  },

  link: {
    color: "#0A1172",
    fontWeight: "bold",
  },
});