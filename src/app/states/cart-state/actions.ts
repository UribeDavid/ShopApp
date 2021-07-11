import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const Add = createAction('[Cart Component] Add', props<{product: Product}>());

export const ChangeAmount = createAction('[Cart Component] ChangeAmount', props<{id: string, increase: boolean}>());

export const Delete = createAction('[Cart Component] Delete', props<{id: string}>());