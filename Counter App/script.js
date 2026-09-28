let heading = document.querySelector('.heading');

let btn1 = document.querySelector('.btn-1');

let btn2 = document.querySelector('.btn-2');

let btn3 = document.querySelector('.btn-3');

let count = 0;

btn1.addEventListener('click', () => {
    count++;
    heading.textContent = count;
    if (count > 0) {
        heading.style.color = 'green';

    } else if (count < 0) {
        heading.style.color = 'red';

    } else {
        heading.style.color = 'white';
    }
});

btn2.addEventListener('click', () => {
    count--;
    heading.textContent = count;
    if (count > 0) {
        heading.style.color = 'green';
    } else if (count < 0) {
        heading.style.color = 'red';
    } else {
        heading.style.color = 'white';
    }
});

btn3.addEventListener('click', () => {
    count = 0;
    heading.textContent = count;
    heading.style.color = 'white';
});