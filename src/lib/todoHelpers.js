export const addTodo = (list, item) => {
  // return list.concat(item);
  // this also works
  return [...list, item];
};

export const generateId = () => {
  let i, random;
  let uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16); 
  }
  return uuid;
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