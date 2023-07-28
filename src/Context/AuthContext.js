import { createContext, useState } from "react";
import { Alert } from "react-native";
import firebase from "../Firebase/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    async function authRegister(name, cpf, email, password) {

        setLoading(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {

                let uid = value.user.uid;
                await firebase.database().ref("usuario").child(uid).set({
                    nome: name,
                    cpf: cpf,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: name,
                            cpf: cpf,
                            email: value.user.email,
                        }
                        setUser(data);
                        setLoading(false)
                    })
                    .catch((e) => {
                        setLoading(false)
                        console.log(e)
                        alert("Um erro inesperado aconteceu.")
                    })
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
                alert("Um erro inesperado aconteceu.")
            })
    }


    async function authLogin(email, password) {

        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {

                let uid = value.user.uid;

                await firebase.database().ref('usuario').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            name: snapshot.val().nome,
                            cpf: snapshot.val().cpf,
                            email: value.user.email,
                        }
                        setUser(data);
                        setLoading(false)
                    })
                    .catch((e) => {
                        setLoading(false)
                        console.log(e);
                        alert("Um erro inesperado aconteceu.");
                    })
            })
            .catch((e) => {
                setLoading(false)
                console.log(e);
                alert("Um erro inesperado aconteceu.");
            })
    }


    async function authLogout() {
        Alert.alert(
            'Sair',
            'Deseja sair do aplicativo?',
            [{
                text: 'Cancelar',
                style: 'cancel',
            }, {
                text: 'Sair',
                onPress: async () => {
                    await firebase.auth().signOut()
                        .then(() => setUser(null))
                        .catch((e) => {
                            console.log(e)
                            alert("Um erro inesperado ocorreu!")
                        })
                }
            }])
    }


    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            authLogin,
            authRegister,
            authLogout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
