import React from 'react'
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native'

const colorGithub = '#010409'
const colorFontGithub = '#C9D1D9'
const colorDarkGithub = '#4F565E'

const imageProfileGitgub = 'https://media-exp1.licdn.com/dms/image/C4D03AQGHP5BJ3DxTXw/profile-displayphoto-shrink_200_200/0/1651378318375?e=1659571200&v=beta&t=xZjlJa1t3a-OZZwWOphRrRhT0jpnHNJYgXdHDQ38Nwg'

const urlGithub = 'https://github.com/JulioCesarNSM'

const App = () => {

    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlGithub)
        if(res) {
            await Linking.openURL(urlGithub)
        }
    }

    return (
        <SafeAreaView style={style.container}> 
        <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
            <View style={style.content}>
                <Image 
                    accessibilityLabel='Júlio com fundo verde e roxo'
                    style={style.avatar} 
                    source={{uri: imageProfileGitgub}}
                />
                <Text 
                    accessibilityLabel='Nome: Júlio César' style={[style.defaultText, style.name]} >Júlio  César
                </Text>
                <Text 
                    accessibilityLabel='Nickname: JulioCesarNSM' style={[style.defaultText, style.nickname]}>JulioCesarNSM
                </Text>
                <Text 
                    accessibilityLabel='Descrição: Desenvolvedor Front-end e Acadêmico de redes certificado internacionalmente pela Fortinet em segurança da informação.' 
                    style={[style.defaultText, style.description]}>

                    Desenvolvedor Front-end e Acadêmico de redes certificado internacionalmente pela Fortinet em segurança da informação.
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default App

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1, // expandir para tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    nickname: {
        marginBottom: 10,
        fontSize: 16,
        color: colorDarkGithub,
    },
    description: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})