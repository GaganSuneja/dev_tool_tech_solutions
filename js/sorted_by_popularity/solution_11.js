/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-19 16:30:53
 * @modify date 2024-05-19 16:30:53
 * @desc [description]
 */


// URL - https://devtools.tech/questions/s/how-to-implement-custom-map-function-with-limit-on-number-of-operations-or-paytm-frontend-interview-question-or-javascript-interview-questions-or-frontend-problem-solving---qid---ZVNw2lUMguEZIsnvzjC1

/**
 * Read FAQs section on the left for more information on how to use the editor
**/
/** Do not delete or change any function name **/

function getUserById(id, callback) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200;
   
    setTimeout(() => {
      callback("User" + id)
    }, randomRequestTime);
  }
  
  function mapLimit(inputs, limit, iterateeFn, callback) {
    // write your solution here
  }
  
  mapLimit([1,2,3,4,5], 2, getUserById, (allResults) => {
    console.print('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
  })


/// Skipping
