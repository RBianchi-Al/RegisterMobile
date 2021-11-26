

import { TextInput } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput) `

background-color: ${({theme}) => theme.colors.container };
    height: ${RFPercentage(8)}px;
    font-size: ${RFValue(15)}px;
    border-radius: 8px;
    padding: ${RFValue(8)}px;
    margin: 8px 24px;
    border: 1px ${({theme}) => theme.colors.text };
    margin-bottom: 8px;
    font-family: ${({theme}) => theme.fonts.regular };
`


