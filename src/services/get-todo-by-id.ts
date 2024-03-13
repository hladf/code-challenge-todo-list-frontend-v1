import axios from 'axios';

export async function getTodoById(id: string) {
  try {
    const response = await axios.get(`http://localhost:4000/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todo por ID:', error);
    throw error;
  }
}
