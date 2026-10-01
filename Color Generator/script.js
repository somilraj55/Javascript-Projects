let ColorCode = document.querySelector('#colorCode');
let generateBtn = document.querySelector('#generateBtn');

generateBtn.addEventListener('click',()=>{
        let randomNumber = Math.floor((Math.random()*256));
        let randomNumber1 = Math.floor((Math.random()*256));
        let randomNumber2 = Math.floor((Math.random()*256));
        // console.log(randomNumber);
        // console.log(randomNumber1);
        // console.log(randomNumber2);
        let finalNumber = `rgb(${randomNumber},${randomNumber1},${randomNumber2})`;
        console.log(finalNumber);
        document.body.style.backgroundColor = finalNumber;
        ColorCode.textContent = finalNumber;
});