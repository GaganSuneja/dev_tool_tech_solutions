// /**
//  * @author [Gagan Suneja]
//  * @email [gagan91suneja@gmail.com]
//  * @create date 2024-05-18 20:44:16
//  * @modify date 2024-05-18 20:44:16
//  * @desc [description]
//  */


// // URL - https://devtools.tech/questions/s/how-to-implement-event-emitter-in-javascript-or-facebook-interview-question---qid---J4fNqXImp6QIdGMc7SPF\

// /**
//  * Read FAQs section on the left for more information on how to use the editor
// **/
// /**
// * Do not change the class name
// **/



// class Emitter_Solution {
//     // write your code here
    
//     constructor(){
//         this._subscriptions = new Map();
//     }

//     subscribe(eventName, callBack) {
//         let sizeOfSubscriptions = 0;
//         if(!this._subscriptions.get(eventName)) {
//            this._subscriptions.set(eventName, new Map());
//         } 

//         // creating a unique subscription id
//         const subscribtionId = Symbol();
//         const eventSubscriptions = this._subscriptions.get(eventName);
//         eventSubscriptions.set(subscribtionId, callBack);
//         return {
//             release: () => {
//                 // forming a clousure to retain values of eventName, sizeOfSubscription for later use
//                 // would be different for each of the sub's formed
//                 if(!eventSubscriptions.get(eventName)) {
//                     eventSubscriptions.delete(subscribtionId);
//                     return;
//                 }
//                 throw new Error('this susbscription has already been deleted')
//             }
//         }
//     }

//     emit(eventName, ...args) {
//         if(Array.isArray(this.subscriptionMap.get(eventName))) {
//             this.subscriptionMap.get(eventName).forEach((callBack) => {
//                 callBack(...args)
//             })
//         }
       
//     }

// }

// class Emitter {
//     // write your code here
//     subscriptionMap = new Map();
  
//     constructor() {
  
//     }
  
//     subscribe(eventName, callBack) {
//       let sizeOfSubscriptions = 0;
//       let subscribtions = []
//       if (!this.subscriptionMap.get(eventName)) {
//         this.subscriptionMap.set(eventName, [callBack]);
//         subscribtions = [callBack];
//         sizeOfSubscriptions = 1;
//       } else {
//         subscribtions = this.subscriptionMap.get(eventName);
//         sizeOfSubscriptions = subscribtions.push(callBack);
//       }
//       return {
//         release: () => {
//           this.subscriptionMap.get(eventName).splice(sizeOfSubscriptions - 1, 1);
//           return;
//         }
//       }
//     }
  
//     emit(eventName, ...args) {
//       if (Array.isArray(this.subscriptionMap.get(eventName))) {
//         this.subscriptionMap.get(eventName).forEach((callBack) => {
//           callBack(...args)
//         })
//       }
  
//     }
  
// }


// const emitter = new Emitter();

// const sub1 = emitter.subscribe('click', console.log);
// const sub2 = emitter.subscribe('click', (x) => console.log(`loggin x as ${x}`));
// const sub3 = emitter.subscribe('click_2', (...x) => console.log(`loggin 2 as ${x}`));

// sub2.release();

// emitter.emit('click', 1, 2);
// sub3.release();
// emitter.emit('click_2', 1, 2);
            
    let instance;
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };



 

