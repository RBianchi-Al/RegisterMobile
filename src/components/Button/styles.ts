

import { TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity) `

    background-color: ${({theme}) => theme.colors.secundary };
    border-radius: 5px;
    padding: ${RFValue(8)}px;
    margin: 8px 24px;
    border: 2px ${({theme}) => theme.colors.container };
   
    
`

export const Title = styled.Text `

    color: ${({theme}) => theme.colors.title_h1 };
    font-size: ${RFValue(18)}px;
    padding: ${RFValue(8)}px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.bold };
`

