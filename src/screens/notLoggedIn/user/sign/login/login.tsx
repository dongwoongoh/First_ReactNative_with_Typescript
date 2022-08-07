import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

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
    <SafeAreaView>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} />
        )}
        name="confirmPassword"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} />
        )}
        name="nickname"
      />

      <Pressable onPress={handleSubmit(onLoginSubmit)}>
        <Text>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Login;
