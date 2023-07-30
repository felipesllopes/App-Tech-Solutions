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

    async function addDepartment(department) {

        let key = firebase.database().ref('departamento').push().key;

        await firebase.database().ref('departamento').child(key).set({
            departamento: department,
        })
            .catch((e) => {
                console.log(e)
                console.log("Ocorreu um imprevisto!")
            })
    }

    async function getDepartment() {
        let array = []
        firebase.database().ref("departamento").on('value', (snapshot) => {
            array = [];
            snapshot.forEach((item) => {
                let data = {
                    departamento: item.val().departamento,
                }
                array.push(data)
            })
        })
        return array;
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
            addDepartment,
            getDepartment,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
