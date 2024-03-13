import axios from 'axios';

export async function deleteTodo(id: string) {
  try {
    const { data } = await axios.delete(`http://localhost:4000/todos/${id}`);
    return data;
  } catch (error) {
    return console.log(error);
  }
}
