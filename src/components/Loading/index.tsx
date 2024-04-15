import React from 'react';
import { Text } from 'react-native';

type LoadingState = {
  status: 'loading' | 'success' | 'error';
};

function LoadingComponent({ status }: LoadingState) {
  if (status === 'loading') return <Text>Loading...</Text>;
  if (status === 'success') return <Text>Data loaded successfully!</Text>;
  if (status === 'error') return <Text>Something went wrong.</Text>;

  return null;
}

export default LoadingComponent;
