import styled from "styled-components/native";

export const Container = styled.View `
  justify-content: center;
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary}

`

export const Text = styled.TextInput `
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 32px;
    color: ${({theme}) => theme.colors.title_h1}
`

