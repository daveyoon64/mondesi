export const addTodo = (list, item) => {
  // return list.concat(item);
  // this also works
  return [...list, item];
};

export const generateId = () => {
  return Math.floor(Math.random() * 100000);
}

export const findById = (id, list) => {
  return list.find(item => item.id === id);
}

export const toggleTodo = (todo) => {
  // {id:1, name: 'one', isComplete: true};
  return {...todo, isComplete: !todo.isComplete}; 
}

export const updateTodo = (list, updatedTodo) => {
  const updatedIndex = list.findIndex(item => item.id === updatedTodo.id);
  return [
    ...list.slice(0, updatedIndex),
    updatedTodo,
    ...list.slice(updatedIndex + 1)
  ];
}

export const removeTodo = (list, id) => {
  const indexToDelete = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, indexToDelete),
    ...list.slice(indexToDelete+1)
  ]
}

export const filterTodos = (list, routeString ) => {
  switch(routeString) {
    case '/active':
      return list.filter(item => !item.isComplete);
    case '/complete':
      return list.filter(item => item.isComplete);
    default:
      return list;
  }
}