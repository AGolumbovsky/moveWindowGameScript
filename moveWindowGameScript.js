
let openNewWi = () => {

    theWindow = window.open('', '', 'width=200, height=100');
    theWindow.document.write('<h3><b>Close me if you can...</b></h3>');

}
  
let moveWi = () => {

    if (theWindow) {

        let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
        let randomVertical = Math.floor(Math.random() * window.innerHeight);
        
        theWindow.moveTo(randomHorizontal, randomVertical);
        theWindow.focus();
        
    }
    else theWindow.close();
}

openNewWi();

setInterval(() => {

        moveWi()

}, 800);