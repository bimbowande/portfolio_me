import { DefaultTheme } from "styled-components"


declare module "styled-components" {

    export interface DefaultTheme{
        primaryColor: string,
        secondaryColor: string
    }
}


export const lightTheme: DefaultTheme = {
    primaryColor: '',
    secondaryColor:''
}

export const darkTheme: DefaultTheme = {
    primaryColor: '',
    secondaryColor:''
}