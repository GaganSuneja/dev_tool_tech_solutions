/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-19 16:26:50
 * @modify date 2024-05-19 16:26:50
 * @desc [description]
 */

/**
 * url - https://devtools.tech/questions/s/what-would-be-the-output-of-the-following-code-snippet-or-promise-based-output-question-or-part-one---qid---TQBJFJPPHX4VxH0MrxBt
 */

function init() {
    throw new Error("I am an error");
    return Promise.resolve(1);
  }
  
  init()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log("Error caught -- ", err));

// O/P: Uncaught Error:  I am an error
// Reason: this is because init is not a promise and catch will not work here
