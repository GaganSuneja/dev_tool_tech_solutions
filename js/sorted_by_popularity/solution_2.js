
/**
 *  URL - https://devtools.tech/questions/s/what-will-be-the-output-of-the-following-code-snippet-based-on-settimeout-or-javascript-quiz---qid---GKtmefHBq6K41x3YJGfV?index
 */

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }

  // output
  // 55555
  // Reason is because settimeout forms a clousre with i value 
  // hence when timeout is finished the it logs current value of i