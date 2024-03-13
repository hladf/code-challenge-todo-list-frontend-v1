import axios from 'axios';
export async function getAllTodos() {
  try {
    const { data } = await axios.get('http://localhost:4000/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
