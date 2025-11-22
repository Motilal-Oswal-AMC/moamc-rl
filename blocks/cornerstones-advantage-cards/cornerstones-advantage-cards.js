export default function decorate(block) {
  const cardsChildren = block.querySelectorAll('.cornerstones-advantage-cards > div');
  cardsChildren.forEach((ele, pInd) => {
    const mainIndex = pInd + 1;
    const idForH = `b${mainIndex}`; // h -> b{index}
    const idForA = `a${mainIndex}`;  // a -> a{index}

    ele.classList.add('cards-item');
    Array.from(ele.children[0].children).forEach((element, ind) => {

      // If element is <h4> -> add id b{index}
      if (element.tagName.toLowerCase() === 'h4') {
        element.id = idForH;
      }

      // If element is <p> and contains <a> -> add class + id to anchor + aria-labelledby
      if (element.tagName.toLowerCase() === 'p') {
        const anchor = element.querySelector('a');
        if (anchor) {
          element.classList.add('button-container');
          anchor.id = idForA;
          anchor.setAttribute('aria-labelledby', idForA);
        }
      }
      
      element.classList.add(`item-child-${ind + 1}`, 'item-child');
    });
  });
}
