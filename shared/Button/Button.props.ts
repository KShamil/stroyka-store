import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearance: 'cataloq-btn' | 'more-btn' | 'cards-add-to-cart' | 'stock-add-to-cart' | 'all-stock' | 'slider-btn' | 'load-more-btn' | 'documentation-card-btn' | 'not-found-btn'| 'plus-btn' | 'minus-btn' | 'delete-btn' | 'result-btn' | 'checkout-btn' | 'main-card-result-btn' | 'details-result-btn'
}