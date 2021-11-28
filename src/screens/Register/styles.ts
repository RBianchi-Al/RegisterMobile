import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"
import { TextInput } from "react-native-gesture-handler";
import {CheckBox, CheckBoxProps} from "react-native-elements"
import { KeyboardAvoidingView } from "react-native";


export const Container = styled(KeyboardAvoidingView) `   
    flex: 1;
    
`
export const Text = styled.TextInput `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.colors.title_h1};
    margin: 0 30px;    
`
export const Header = styled.View `
   background-color: ${({theme}) => theme.colors.primary};
   align-items: center;
    justify-content:center;
    height: ${RFPercentage(25)}px;
`
export const Input = styled(TextInput) `
   background-color: ${({theme}) => theme.colors.primary};
   align-items: center;
    justify-content:center;
    height: ${RFPercentage(25)}px;

`


export const Inputs = styled.View `
    justify-content: space-between;
    margin-top: ${RFPercentage(8)}px;
`

export const Check  = styled(CheckBox)<CheckBoxProps> `

`