import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProfileModalItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    openModal: () => void
}