export enum TodoStatus {
  NOT_DONE = "NOT_DONE", // not done
  DOING = "DOING", // doing
  DONE = "DONE", // done
}

export type Todo = {
  id: number;
  content: string;
  status: TodoStatus;
  user: any;
};

export interface TodosGroupByStatus {
  notDone: Todo[];
  doing: Todo[];
  done: Todo[];
}
