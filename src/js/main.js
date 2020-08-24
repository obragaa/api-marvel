const timeStamp = '1565045589'
const apiKey ='02cee0e66d1b7c293c9d048f080c2651'
const md5 = '48c61b2ef6a81e3c636c569904f8c71c'

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=12`
).then((response) => {
    return response.json();
})
.then((jsonParsed => {
    const divHero = document.querySelector('#herois');
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });

 
    console.log(jsonParsed)
}))


function createDivHero(srcImage, nameHero, divToAppend){
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem")
}
