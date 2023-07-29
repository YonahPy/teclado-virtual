function pressKey(element) {
    element.classList.add('pressed');
    setTimeout(() => {
         element.classList.remove('pressed');
 }, 100); 
}

    