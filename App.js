import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import AuthProvider from './src/Context/AuthContext';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <Routes />
        <StatusBar backgroundColor={'#000'} />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
