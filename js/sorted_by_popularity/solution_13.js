/**
 * @author [Gagan Suneja]
 * @email [gagan91suneja@gmail.com]
 * @create date 2024-05-19 20:52:11
 * @modify date 2024-05-19 20:52:11
 * @desc [description]
 */


/**
 *  URL - https://devtools.tech/questions/s/can-you-identify-the-behaviour-of-following-code-snippet-or-javascript-output-questions-or-problem-solving-or-javascript-copy---qid---GEkr6i0nWutFs6eTbdB7
**/


const original = {
    id: 'xhdyt0123',
    link: 'https://www.youtube.com/watch?v=_eaCs-pzaVg',
    metadata: {
      title: 'Build Your Own Redux',
      description: 'In this video we are going to see how we an build our own Redux',
    },
    published: true
  }
  
  const duplicate = (original) => {
    if (!original.published) {
      throw new Error('Your post needs to published before duplication'); 
    }
  
    const copy = {
      id: +new Date(),
      link: original.link,
      metadata: original.metadata,
      published: original.published
    };
  
    copy.metadata.title = `Copy of ${original.metadata.title}`;
  
    return copy;
  };
  
  duplicate(original);
