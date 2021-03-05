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