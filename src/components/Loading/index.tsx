import React from 'react';
import { Text } from 'react-native';

type LoadingState = {
  status:  'success' | 'error' | 'loading'
};

function LoadingComponent({ status }: LoadingState) {
  if (status === 'loading') return <Text accessibilityElementsHidden>Loading...</Text>;
  if (status === 'success') return <Text>Loaded successfully!</Text>;
  if (status === 'error') return <Text>Error!</Text>;

  return null;
}

export default LoadingComponent;
