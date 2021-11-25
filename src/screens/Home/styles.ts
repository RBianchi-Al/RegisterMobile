import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"

import {Feather} from '@expo/vector-icons'

export const Container = styled.View `
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    
`


export const Header = styled.View `
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: ${RFPercentage(40)}px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`
export const Photo = styled.Image `
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 12px;
`

export const UserInfo = styled.View `
    flex-direction: row;
    align-items: center;

`
export const UserDetail = styled.View `
   margin-left: 17px;

`
export const TextName = styled.Text `
color: ${({theme}) => theme.colors.title_h1};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};

`
export const TextHello = styled.Text `
color: ${({theme}) => theme.colors.title_h1};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.regular};

`
export const UserWrapper = styled.View `
    width: 100%;
    margin-top: ${RFPercentage(10)}px;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
`

export const Icon = styled(Feather) `
    color: ${({theme}) => theme.colors.subtitle};
    font-size: ${RFValue(27)}px;
`

export const HighlightCards = styled.View`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(25)}px;
    align-items: center;
`

export const HighlightList = styled.ScrollView.attrs({
    horizontal: false,
    showsHorizontalScrollIndicator: false,
}) `
    width: 100%;
    margin-top: ${RFPercentage(8)}px;
   
`