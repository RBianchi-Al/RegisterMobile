import React, { useState } from 'react';
import { ButtonSubmit } from '../../components/Button';
import { InputText } from '../../components/Inputs';
import {Container, Text, Filds, ContainerPrimary, Input} from './styles'

interface LoginProps {
    navigation: any
  }
export function LoginUser({navigation}: LoginProps){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
          })
    
    }
    return (
        <Container>
            <ContainerPrimary>
              <Text>Login</Text>
            </ContainerPrimary>
            <Filds>
                <Input> 
                    <InputText
                        placeholder="Email"
                        onChangeText={setEmail}
                    />
                    <InputText
                        placeholder="Password"
                        onChangeText={setPassword}
                    />
                </Input>
            
                <ButtonSubmit
                title="Entrar"
                onPress={handleLogin}
                />
            </Filds>
            
        </Container>
    )
}