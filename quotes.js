// const quoteArea = document.querySelector('.quote');
// const quotes = ['Q: How do you comfort a JavaScript bug?\nA: You console it.',
//   'Q: Why was the JavaScript developer sad?\nA: Because they didn\'t Node how to Express himself.',
//   'Q: Why did the child component have such great self-esteem?\nA: Because its parent kept giving it props!',
//   'Q: Michael Scott was the regional manager where?\nA: __mifflin__',
//   'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
//   'Q: How many programmers does it take to change a light bulb?\nA: None, that’s a hardware problem.',
//   'I have not failed. I’ve just found 10,000 ways that won’t work.',
//   'No one else knows what they\'re doing either',
//   'Be like Khuong',
//   'Q: Why did the programmer quit their job?\nA: Because they didn\'t get arrays.',
//   `["hip", "hip"] (hip hip, array!)`,
//   'Q: How do you get rich with OOP?\nA: Inheritance.'
// ];

// let random = Math.floor(Math.random() * quotes.length);
// let newQuote = document.createElement('p');
// newQuote.innerText = quotes[random];
// quoteArea.appendChild(newQuote);

fetch('https://codesmith-calendar.herokuapp.com/api/messages/')
  .then(data => data.json())
  .then((messages) => {
    let length = messages.length;
    const quoteArea = document.querySelector('.quote');
    let random = Math.floor(Math.random() * length);
    let newQuote = document.createElement('p');
    newQuote.innerText = messages[random].message;
    quoteArea.appendChild(newQuote);
    return;
  })
  .catch(err => console.log(err))
