import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '../../../../../components/form/message/error.message';

type LoginType = UserType & {
  readonly password: string;
  readonly confirmPassword: string;
};

function Login() {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginType>({mode: 'onChange'});

  const onLoginSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: 'Email is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="email"
            style={styles.input}
          />
        )}
        name="email"
      />
      {errors.email && errors.email.message && (
        <ErrorMessage message={errors.email.message} />
      )}

      <Controller
        control={control}
        rules={{
          required: 'Password is required',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && errors.password.message && (
        <ErrorMessage message={errors.password.message} />
      )}

      <Pressable style={styles.submit} onPress={handleSubmit(onLoginSubmit)}>
        <Text style={styles.submit_value}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    margin: 12,
    padding: 12,
    borderRadius: 8,
  },
  submit: {
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 12,
    padding: 12,
  },
  submit_value: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
