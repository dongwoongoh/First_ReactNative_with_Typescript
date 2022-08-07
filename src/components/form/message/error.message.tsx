import React from 'react';
import {Text} from 'react-native';

interface ErrorMessageInterface {
  readonly message: string;
}

function ErrorMessage({message}: ErrorMessageInterface) {
  return <Text>{message}</Text>;
}

export default ErrorMessage;
