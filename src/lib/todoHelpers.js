export const addTodo = (list, item) => {
  // return list.concat(item);
  // this also works
  return [...list, item];
};

export const generateId = () => {
  return Math.floor(Math.random() * 100000);
}