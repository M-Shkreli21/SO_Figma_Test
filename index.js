const title = document.createElement('h1');
title.textContent = "What's next for real-time conversation?";
document.getElementById('container').appendChild(title);

const paragraph = document.createElement('h3');
paragraph.textContent = "We are heads down on building this product towards an early alpha launch in Q2 2023."
document.getElementById('container').appendChild(paragraph);

const lower_paragraph = document.createElement('h3');
lower_paragraph.textContent = "Reserve your handle, share this page and follow us."
document.getElementById('container').appendChild(lower_paragraph);

const fine_print = document.createElement('h5');
fine_print.textContent = "By entering the above information you are agreeing to receive emails from or on behalf of SPECIAL OFFER"
document.getElementById('fine_print').appendChild(fine_print);

const form = document.getElementById('signup_form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = 'red';

    form.style.display = 'none';
    title.style.display = 'none';
    paragraph.style.display = 'none';
    lower_paragraph.style.display = 'none';
    fine_print.style.display = 'none';
})