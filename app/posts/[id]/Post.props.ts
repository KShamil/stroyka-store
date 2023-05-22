import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    params: {
        id:string
    }
}