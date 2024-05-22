/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-18 20:35:42
 * @modify date 2024-05-18 20:35:42
 * @desc [description]
 */


/** 
 * URL https://devtools.tech/questions/s/what-would-the-output-of-the-following-code-snippet-promises-in-javascript---qid---bZEq6flSA5fB61P2ylHN
*/

function processing() {
    return Promise.reject("Something went wrong!");
  }
  
  function init() {
    try {
      return processing();
    } catch (err) {
      console.log("Error in processing.");
    }
  }
  
  init().then(() => {
    console.log("End");
  });
  
  // (Uncaugh in promise): Something went wrong!

  // even though we have a catch and try block but its not a promised function 
  // as it does not have an async await wrapper hence the promise reject is still uncaught