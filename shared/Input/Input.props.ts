import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
    appearance: 'header-input' | 'bottom-header-input' | 'info-input' | 'email-input' 
}