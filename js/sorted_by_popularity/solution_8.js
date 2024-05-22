/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-19 16:20:43
 * @modify date 2024-05-19 16:20:43
 * @desc [description]
 */

/**
 * URL - https://devtools.tech/questions/s/what-would-be-the-output-of-the-following-code-snippet-prototype-method-invocation---qid---ZTfiiKiAItdaRMFOcmLQ
 */

function Person(name) {
    this.name = name;
    console.log('value of ', this);
  }
  Person.prototype.getName = () => {
    return this.name;
  };
  const yomesh = new Person('Yomesh');
  console.log(yomesh.getName());

// value of name in global object as arrow function does not have any this context;



