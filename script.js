const body = document.body
const header = document.createElement('header')
const headerCont = document.createElement('div')

const catalogCont = document.createElement('div')
//buttons
const btnShowMore = document.createElement('button')
const btnAddToBag = document.createElement('button')
btnAddToBag.innerHTML = "Add To BAg"
btnShowMore.innerHTML = "Show More"
btnShowMore.classList.add("btn")
btnShowMore.classList.add("btn-show")

btnAddToBag.classList.add("btn")

//header
headerCont.innerHTML = `
<h1>Welcome to the Online Book Shop!</h1>
<p>Great variety of books delivered to your door</p>
</p>`
body.append(header)
header.append(headerCont)
headerCont.classList.add("header-block")

//catalog
catalogCont.innerHTML = `
<h2>Find the Books you Like</h2>`
catalogCont.classList.add("catalog-cont")


catalogCont.innerHTML = `
<h2>JavaScript: The Good Parts: The Good Parts</h2>
<h3>Douglas Crockford</h3>
<h4>$30</h4>
<p class="hidden-text">With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must</p>
<img src="images/evropa.webp" class="book-img">
<button>Add to Bag</button>
<button>Show More</button>

<h2>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</h2>
<h3>David Herman</h3>
<h4>$7</h4>
<p>"Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, 
backed by concrete examples. You’ll learn how to choose the right programming style for each project, 
manage unanticipated problems, and work more successfully with every facet of JavaScript programming from 
data structures to concurrency"
</p>
<img src="images/effective-js.jpg" class="book-img">
<button>Add to Bag</button>
<button>Show More</button>

<h2>JavaScript: The Definitive Guide</h2>
<h3>David Flangan</h3>
<h4>$90</h4>
<p>With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must</p>
<img src="images/def-guide.jpg" class="book-img">
<button>Add to Bag</button>
<button>Show More</button>

<h2>Programming Javascript Applications</h2>
<h3>Ericc Elliot</h3>
<h4>$80</h4>
<p>With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must</p>
<img src="images/js-app.jpeg" class="book-img">
<button>Add to Bag</button>
<button>Show More</button>

<h2>Programming Typescript</h2>
<h3>Boris Cherny</h3>
<h4>$30</h4>
<p>With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must</p>
<img src="images/typescript.jpg" class="book-img">
<button>Add to Bag</button>
<button>Show More</button>

`
body.append(catalogCont)



function revealText () {
    const x = catalogCont.querySelector('p')
    if (x.style.display == 'none') {
        x.style.display = 'block';
        console.log('hekls')
    } else {
        x.style.display = 'none';
    }
    console.log(x)
   
   
}
btnShowMore.addEventListener("click", alert("hiiii"))




//functions

// btnAddToBag.addEventListener("click", )
//fetching the books
//  function getUsers(){
//  fetch('books.json') //path to the file with json data
//          .then((res) =>  res.json())
//          .then((data) => {
//          let output = ' ';
//           data.forEach(function(book){
            
//              output += `
//              <br>
//              <ul>
//              <li> ${book.author} </li>
//              <li> ${book.title} </li>
//              <li> ${book.link} </li>
//              <li> ${book.imageLink}</li>
//              </ul>
//              `
           
//           });
//           document.getElementById('books-list').innerHTML = output;
         
//  })
// }

// 



      

      



 
        


    
  
  




