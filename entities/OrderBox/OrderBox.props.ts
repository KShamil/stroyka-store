import { IOrderCardData } from '@/interfaces/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OrderBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IOrderCardData
}