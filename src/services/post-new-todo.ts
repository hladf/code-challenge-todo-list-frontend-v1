import { TodoProps } from '@types';
import axios from 'axios';
export async function createTodo({ title, description }: Partial<TodoProps>) {
  try {
    const data = await axios.post('http://localhost:4000/todos', {
      title,
      description,
    });
    return `Todo ${data.data.id} created`;
  } catch (error) {
    console.log(error);
  }
}
