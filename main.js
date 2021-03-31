const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const btn = document.querySelector('.btn')

btn.addEventListener("click", getQuote )


function getQuote(){
    fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then(data =>{
        quote.innerHTML = data.content;
        author.innerHTML= data.author;
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

// let para = document.createElement('p');
// let content = document.querySelector('.content')
// let datacon = data.content
// para.appendChild(datacon);
// content.appendChild(para)
// let author = data.author
// para.appendChild(author);
// para.appendChild(b);