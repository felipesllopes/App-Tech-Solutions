import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AuthRoute from './AuthRoute';
import HomeRoute from './HomeRoute';

export default function Routes() {

    const { signed } = useContext(AuthContext);

    // fazer condicional para chamar uma rota ou outra
    return (
        signed ? <HomeRoute /> : <AuthRoute />
    )
}