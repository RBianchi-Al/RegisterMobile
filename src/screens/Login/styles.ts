import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import LottieView from  "lottie-react-native";


export const Container = styled.View `
margin-bottom: 200px;
flex: 1;
justify-content: space-between;

`

export const ContainerPrimary = styled.View `
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content:center;
  height: ${RFPercentage(30)}px;
`


export const Text = styled.TextInput `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 15px;
    color: ${({theme}) => theme.colors.text};
    
`


export const Icon = styled(LottieView)  `
  margin-top: ${RFPercentage(-10)}px; 
  position: absolute;  
  justify-content: center;
`


export const Filds = styled.View `
   margin-top: ${RFPercentage(20)}px; 
 
`

export const Input = styled.View `
  margin: 0 ${RFPercentage(3)}px; 
  flex-direction: row;
    justify-content: center;
    align-items: center;
  
 
`
export const Link = styled.Text`
      color: ${({theme}) => theme.colors.primary_black};
      font-family: ${({theme}) => theme.fonts.bold};
      text-decoration: underline;
      font-size: 15px;
      margin-left: 10px;
      background: ${({theme}) => theme.colors.background};
      
`