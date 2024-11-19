// generic, non-React-specific logic for making API requests

export const fetchUserData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const data = await res.json();
  return data;
}