import axios from "axios";
import { ResponseEntity } from "@/types/ResponseEntity";
import { Todo, TodosGroupByStatus } from "@/types/Todo";

const API_URL = "/api/todo";

class TodoService {
  /**
   * Todo 생성
   * @param todo
   */
  createTodo = (todo: Todo) =>
    axios.post(`${API_URL}/createTodo`, {
      content: todo.content,
      status: todo.status,
    });

  /**
   * 모든 Todo 조회 (group by status)
   * @param todo
   */
  getAllTodosGroupByStatus = () =>
    axios.get<ResponseEntity<TodosGroupByStatus>>(`${API_URL}/status`, {
      withCredentials: true,
    });

  /**
   * 하나의 Todo 조회
   */
}

// export service instance
export default new TodoService();
