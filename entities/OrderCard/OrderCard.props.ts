import { ICardData } from '@/interfaces/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OrderCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ICardData
}