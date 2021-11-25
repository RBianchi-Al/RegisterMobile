import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons"

export const Container = styled.View `
    background-color: ${({theme}) => theme.colors.subtitle };
    width: ${RFPercentage(40)}px;
    border-radius: 9px;
    padding: 19px 19px;
    padding-bottom: ${RFValue(30)}px;
 
    
 `

export const Header = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
`
export const Icon = styled(Feather) `
    color: ${({theme}) => theme.colors.container};
    font-size: ${RFValue(27)}px;
`

export const TitleHours = styled.Text `
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(45)}px;
    margin-left: 1px;
    
`
export const HoursNow = styled.Text `
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.background_one};
    font-size: ${RFValue(12)}px;
`
export const CardHours = styled.ScrollView.attrs({
    
}) `
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`