const box = document.querySelector(".maravilhosas__box");

fetch('https://theblackwomanhistory.firebaseio.com/.json')

.then((response) =>{
    return response.json();
})
.then((data) => {
    data.content.forEach(mulher =>{

        let perfil = document.createElement('div');
        perfil.setAttribute('class', 'maravilhosas__perfil');
        box.appendChild(perfil);
        
        let link = document.createElement('a');
        link.href = '#!';
        perfil.appendChild(link);

        let imagem = document.createElement('img');
        imagem.setAttribute('class', 'img-responsive');
        imagem.src = '#!';
        link.appendChild(imagem);

        const image = document.createElement('img')
        if(mulher.metadata.imagem !== null){
            return image

        }else{
            return imagem.src= img-mulher.png
        };
        
        let nome = document.createElement('p');
        nome.innerHTML = mulher.title;
        link.appendChild(nome);

        
    })
})
.catch((erro) => {
    console.log(erro);
})

