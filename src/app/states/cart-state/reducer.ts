import { createReducer, on } from '@ngrx/store';

import { Product } from 'src/app/models/product.model';
import { Add, ChangeAmount, Delete } from './actions';

const initialState: Array<Product> = <Array<Product>>JSON.parse(localStorage.getItem('cart')) || [];

export const cartReducer = createReducer(
    initialState,
    on(Add, (state, action) => {
        if (state.find(i => i.id == action.product.id)) {
            const cart = state.map(i => i.id == action.product.id ? ({...i, quantity: i.quantity + 1}) : i);
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        } else {
            const cart = [...state, ({...action.product, quantity: 1})];
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        }
    }),

    on(ChangeAmount, (state, action) => {
        const product = state.find(i => i.id == action.id);
        if (action.increase) {
            const cart = state.map(i => i.id == action.id ? ({...i, quantity: i.quantity + 1}) : i);
            return cart;
        } else {
            if (product.quantity > 1) {
                const cart = state.map(i => i.id == action.id ? ({...i, quantity: i.quantity - 1}) : i);
                localStorage.setItem('cart', JSON.stringify(cart));
                return cart;
            } else {
                const cart = state.filter(i => i.id != action.id);
                localStorage.setItem('cart', JSON.stringify(cart));
                return cart;
            }
        }
    }),

    on(Delete, (state, action) => {
        const cart = state.filter(i => i.id != action.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }),
);