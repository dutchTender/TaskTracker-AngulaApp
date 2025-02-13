import {createEntityAdapter} from '@ngrx/entity';


export interface Task{
  id?: number;
  text: string;
  day: Date;
  reminder: boolean;
}

export const taskStoreAdapter = createEntityAdapter<Task>();

