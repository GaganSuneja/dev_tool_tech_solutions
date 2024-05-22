// /**
//  * @author [Gagan Suneja]
//  * @email [gagan91suneja@gmail.com]
//  * @create date 2024-05-22 13:47:25
//  * @modify date 2024-05-22 13:47:25
//  * @desc [description]
//  */


// // URL - https://devtools.tech/questions/s/how-to-implement-lodash-groupby-functionality-from-scratch-or-javascript-interview-question-or-frontend-problem-solving---qid---RDj0FSzOBMyCIuZcgvJc


// /**
//  * Read FAQs section on the left for more information on how to use the editor
// **/
// /**
// * you can change parameters name but
// * do not change function name
// **/


const _ = require('lodash');

function groupBy(collection, property) {
    // write your answer here
    let output = {};
    // this can be checked just by checking if collection is array. Array.isArray();
    if(!collection || typeof collection !== 'object' || !collection.hasOwnProperty('length'))  {
        return output;
    }


    // use single reduce loop for iteration
    if(typeof property === 'function') {
        let value = null;
        for(let item of collection) {
            value = new String(property(item));
            if(!output[value]) {
                output[value] = [item];
            } else {
                output[value].push(item);
            }
        }
    } else if(typeof property === 'string') {
        let keys = property.split('.');
        for(let item of collection) {
            let intermediateItem = item;
            // use reducre here on the split
            for(let key of keys) {
                intermediateItem = intermediateItem[key];
            }
            const value = new String(intermediateItem);
            if(!output[value]) {
                output[value] = [item];
            } else {
                output[value].push(item);
            }
        }
    } else {
        return output;
    }

    return output;

}


