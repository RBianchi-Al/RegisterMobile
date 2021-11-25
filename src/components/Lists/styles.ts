import styled, { css } from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"

import {Feather} from '@expo/vector-icons'

interface IconProps {
    type: 'check' | 'clock'
}
export const Container = styled.View `

    background-color: ${({theme}) => theme.colors.container };
    height: ${RFPercentage(10)}px;
    width: ${RFPercentage(46)}px;
    border-radius: 8px;
    padding: ${RFValue(9)}px;
    margin: 8px 24px;
    
   
`
export const DetailsPointer = styled.View `

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    
`
export const Icon = styled(Feather) <IconProps> `

font-size: ${RFValue(19)}px;
${({type}) => type === 'check' && css `

color: ${({theme}) => theme.colors.success};
`}
${({type}) => type === 'clock' && css `
color: ${({theme}) => theme.colors.attention};
`}

`

export const TitlePointer = styled.Text `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.title_h1};


`
export const Hour = styled.Text `
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title_h1};
    margin-left: 10px;    
`
export const Date = styled.Text `
    font-family: ${({theme}) => theme.fonts.mediun};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.text};    
`

export const Pointer = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10px;
    align-items: center;
    
  
    
`
export const DetailsText = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    
`