
//1. Performing mathematical calculations -> calculations
import { calculateDiscount } from '../Calculations/calculateDiscount.js'
console.log(calculateDiscount(200, 30));

//2. Formatting -> formatter
import { formatDate } from '../Formatters/formatDate.js'
console.log(formatDate('2024-01-01'))

//3. Handling API requests -> api
import { fetchUserData } from '../Api/fetchUserData.js'
const testFetchUserData = async (userId) => {
  const userData = await fetchUserData(userId);
  console.log('User data fetched successfully', userData);

}
testFetchUserData(1);


//4. Validating inputs -> validators
import { validateEmail } from '../Validators/validateEmail.js'
const correct = 'sumaiya@gmail.com';
const wrong = '12ksajd...';

console.log(validateEmail(correct));
console.log(validateEmail(wrong));


//  5. Working with local storage -> Store  ... not working.....
// import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../Store/localStorage.js';
// const userData = { name: 'John Doe', age: 30 };

// // Save data
// saveToLocalStorage('user', userData);

// // Retrieve data
// const storedUser = getFromLocalStorage('user');
// console.log(storedUser);  // Output: { name: 'John Doe', age: 30 }

// // Remove data
// removeFromLocalStorage('user');


//6. Use of helper functions -> Helpers
import { capitalizeFirstLetter } from '../Helpers/capitalizeFirstLetter.js'
console.log(capitalizeFirstLetter('sumaiya'));


//7. using hook for react project -> Hooks
import React from 'react'
import { useFetch } from '../Hooks/useFetch.js'

const TestComponent = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <h1>Fetched Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default TestComponent;
