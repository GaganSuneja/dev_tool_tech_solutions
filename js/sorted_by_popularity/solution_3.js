/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-18 20:36:46
 * @modify date 2024-05-18 20:36:46
 * @desc [description]
 */


/**
 * URL - https://devtools.tech/questions/s/how-to-create-a-flat-version-of-a-deeply-nested-array-programming-interview-question---qid---l5Qx4LJ7glelCkIxQjXB
 */

/**
 * Read FAQs section on the left for more information on how to use the editor
**/
/**
* Do not change function name
**/

function flatten() {
    // write your code here
    let flattenedArray = [];
    this.forEach((item) => {
        if(!Array.isArray(item)) {
            flattenedArray.push(item);
        } else {
            flattenedArray.push(...item.flatten());
        }
    });
    return flattenedArray;
       
}
    
Array.prototype.flatten = flatten;

console.log([1,2, [3,4, [5,6,[7,8,[9,[10]]]]]].flatten());