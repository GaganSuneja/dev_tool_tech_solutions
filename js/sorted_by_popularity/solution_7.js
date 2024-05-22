/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-19 16:11:38
 * @modify date 2024-05-19 16:11:38
 * @desc [description]
 */


/**
 * URL - https://devtools.tech/questions/s/what-is-the-output-of-the-following-code-promise-scheduling-or-event-loop-or-javascript-quiz---qid---LKBco8e783sP5ZGrjgxw
 */

console.log(1);  // 1 [Immediate]

setTimeout(() => console.log(2)); // [Macrotask] [0]

Promise.resolve().then(() => console.log(3)); //3 [Mircotask] [0]

Promise.resolve().then(() => setTimeout(() => console.log(4)));  // [Microtask] [1] -> [Macrotask] [2]
 
Promise.resolve().then(() => console.log(5)); // 5 [Microtask] [2]

setTimeout(() => console.log(6)); // [Macrotask][1]

console.log(7); // 7 [Immediate]


// 1 7 3 5 2 4 6

// immediate 

