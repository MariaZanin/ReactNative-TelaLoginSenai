import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default TelaLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const realizarLogin = () => {
        console.log('Email:', email);
        console.log('Senha:', password);
    };

    return (

        <View style={styles.caixa}>
            <Image style={styles.logo}
                source={require('./senailogo.png')}
            />


            <TextInput style={styles.placeholder}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"

            />

            <TextInput style={styles.placeholder}
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.botao}
                onPress={realizarLogin}>

                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    caixa: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 100,
        marginLeft: 50,
        //marginBottom: 100,
        backgroundColor: "white",
        width: 300,
        height: 300,
        borderRadius: 15,
        shadowColor: 'black',
        elevation: 5,
    },
    logosenai: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    placeholder: {
        width: 250,
        height: 50,
        borderWidth: 0.6,
        borderColor: 'darkgrey',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 9,
        fontSize: 15,


    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#00BFFF',

    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    logo: {
        width: 250,
        height: 40,
        marginBottom: 15,

    }
});

