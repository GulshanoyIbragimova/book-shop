



    
    fetch('https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/books-shop/books.json') //path to the file with json data
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
});
const body = document.body
//header
const header = document.createElement('header')
const headerCont = document.createElement('div')

headerCont.innerHTML = `
<h1>Welcome to the Online Book Shop!</h1>
<p>Great variety of books delivered to your door</p>
</p>
`
body.append(header)
header.append(headerCont)
headerCont.classList.add("header-block")

//catalog page
const catalogCont = document.createElement('div')

catalogCont.innerHTML = `
<h2>Catalog Page</h2
`
body.append(catalogCont)



