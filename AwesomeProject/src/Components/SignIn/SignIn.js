import React, {useState, useCallback} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
    Alert,
    StyleSheet,
} from 'react-native';

const AppButton = ({onSave, title}) => (
    <TouchableOpacity onPress={onSave} style={s.appButtonContainer}>
        <Text style={s.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSave = () => {
        Alert.alert(`login:${login}, password:${password}`);
        setLogin('');
        setPassword('');
    };

    return (
        <View style={s.bl}>
            <TextInput
                style={s.input}
                onChangeText={(text) => setLogin(text)}
                placeholder="Login"
                value={login}
                editable
            />
            <TextInput
                style={s.input}
                value={password}
                onChangeText={(passw) => setPassword(passw)}
                placeholder="Password"
                editable
            />

            <View style={s.screenContainer}>
                <AppButton
                    title="Send"
                    onSave={onSave}
                    size="sm"
                    backgroundColor="#007bff"
                />
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    bl: {
        backgroundColor: 'silver',
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        borderRadius: 20,
        width: '90%',
        marginTop: 15,
    },

    screenContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        margin: 16,
        width: 380,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#5AA6FF',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 135,
    },
    appButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});

export default SignIn;
