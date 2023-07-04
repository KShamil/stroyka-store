import { ICardData } from '@/interfaces/interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AddToCartCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product:ICardData
}