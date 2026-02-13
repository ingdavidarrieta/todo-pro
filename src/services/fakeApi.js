export const fakeDelay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));
  
  export async function saveTodo(todo) {
    await fakeDelay(500);
    return todo;
  }
  
  export async function deleteTodo(id) {
    await fakeDelay(400);
    return id;
  }
  