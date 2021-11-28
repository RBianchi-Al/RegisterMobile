import React, { useEffect, useState } from 'react';
import { ButtonSubmit } from '../../components/Button';
import { InputText } from '../../components/Inputs';
import {Container, Text, Header, Inputs,Check} from './styles'
import userService  from '../../services/login'
import api from '../../services/api';
interface PropsRegister {
    navigation: any
  }

export function Register({navigation}: PropsRegister){
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [isSelect, setIsSelect] = useState(false)
    async function handle() {
        const response = await api.get('/user/list')
        .then((response) => {
            console.log(response)    
           })
           .catch((error) => {
             console.log(error)  
             console.log("pqp")  
             console.log(email, username)
         })
    }

   const handleRegister = () => {
        let data = {
           email: email,
           cpf: cpf,
           name: username,
           password: password           
       }
   
      userService.registerUser(data)
      .then((response) => {
       console.log(response.data.email)    
      })
      .catch((error) => {
        console.log(error.data)  
        console.log("pqp")  
        console.log(email, username)
    })
    }
     
    
    


    return (
        <Container>
            <Header>
                <Text>Cadastre-se</Text>
            </Header>
            <Inputs>
            <InputText
                    placeholder="CPF"
                  
                    keyboardType="number-pad"
                    returnKeyType="done"
                    value={cpf}
                    onChangeText={value => {
                        setCpf(value)
                     }}
                /> 
                <InputText
                    placeholder="Name"
                    value={username}
                    onChangeText={value => {
                        setUsername(value)
                     }}
                /> 
                 <InputText
                    placeholder="Email"
                    value={email}
                    onChangeText={value => {
                        setEmail(value)
                     }}
                    keyboardType="email-address"
                /> 
                 <InputText
                    placeholder="Password"
                    value={password}
                    onChangeText={value => {
                        setPassword(value)
                     }}
                    keyboardType="visible-password"
                    secureTextEntry={true}
                /> 
                <Check
                    title="Aceita termos de uso"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checked={isSelect}
                    onPress={() => setIsSelect(!isSelect)}
                />
                <ButtonSubmit
                    title="Cadastrar"
                    onPress={handle}
                />
            </Inputs> 
        </Container>
    )
}