import React from 'react';
import { TextArea,InputBox } from './style';

export interface InputI{
    boxType?: string,
    inputType?: string,
    placeholder?: string,
    inputName: string,
    changeValue?:(e:any) =>void,
    inputValue?: any
}


export const Input: React.FC<InputI> = 
(InputI) => InputI?.boxType === 'textArea' ? <TextArea value={InputI?.inputValue} onChange={InputI?.changeValue} name={InputI?.inputName}  placeholder={InputI?.placeholder}></TextArea> : <InputBox value={InputI?.inputValue} onChange={InputI?.changeValue} name={InputI?.inputName} placeholder={InputI?.placeholder}/>


