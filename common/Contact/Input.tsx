import React from 'react';
import { TextArea,InputBox } from './style';

export interface InputI{
    boxType?: string,
    inputType?: string,
    placeholder?: string

}

export const Input: React.FC<InputI> = 
(InputI) => InputI?.boxType === 'textArea' ? <TextArea  placeholder={InputI?.placeholder}></TextArea> : <InputBox placeholder={InputI?.placeholder}/>


