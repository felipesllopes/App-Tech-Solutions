import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthProvider from './src/Context/AuthContext';
import Routes from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar backgroundColor={'#000'} />
      </AuthProvider>
    </NavigationContainer>
  );
}