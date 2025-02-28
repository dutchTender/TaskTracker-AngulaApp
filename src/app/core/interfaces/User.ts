import {Task} from './Task';

export interface User{
  id?: number;
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string[];
  tasks: Task[];
}
