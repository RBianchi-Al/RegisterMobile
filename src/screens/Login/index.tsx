import React, { useState } from 'react';
import { ButtonSubmit } from '../../components/Button';
import { InputText } from '../../components/Inputs';
import {Container, Text, Filds, ContainerPrimary, Input, Icon, Link} from './styles'



interface LoginProps {
    navigation: any
  }
export function LoginUser({navigation}: LoginProps){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] =  useState(true)


    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
          })
    
    }
   
    return (
        <Container>      
            <ContainerPrimary/>      
            <Icon
                source={require("../../assets/clock.json")}
                loop
                autoPlay
            />
            <Filds>
                <InputText
                    placeholder="Email"
                    onChangeText={setEmail}
                />
                <InputText
                    placeholder="Password"
                    onChangeText={setPassword}
                />                
                <ButtonSubmit
                    title="Entrar"
                    onPress={handleLogin}
                />
                 <Input>
                    <Text>Ainda não tem conta?</Text>
                        <Link  
                            onPress={handleLogin}
                        >Cadastre-se
                        </Link>
                </Input>
            </Filds>
               
        </Container>
    )
}