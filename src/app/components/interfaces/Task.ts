import {createEntityAdapter} from '@ngrx/entity';


export interface Task{
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}

export const taskStoreAdapter = createEntityAdapter<Task>();

