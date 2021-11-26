import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View `
margin-bottom: 200px;
flex: 1;

`
export const Filds = styled.View `
  
   
 
  `

export const Input = styled.View `

 
`

export const Text = styled.TextInput `
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 32px;
    color: ${({theme}) => theme.colors.title_h1};
    margin-bottom: 10px;
   
    
 
`

export const ContainerPrimary = styled.View `
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content:flex-end;
  height: ${RFPercentage(20)}px;
  margin-bottom: 90px;
  padding: 10px;

`