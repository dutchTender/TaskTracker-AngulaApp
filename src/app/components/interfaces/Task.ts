import {createEntityAdapter} from '@ngrx/entity';


export interface Task{
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}

export const taskAdapter = createEntityAdapter<Task>();

