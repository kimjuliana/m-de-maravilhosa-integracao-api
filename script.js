const box = document.querySelector(".maravilhosas__box");
let pessoa = document.querySelector(".name");
let foto = document.querySelector(".imagem");

fetch('http://localhost:5001/maravilhosas')

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
        
        
        link.appendChild(imagem);
        let nome = document.createElement('p');
        nome.innerHTML = mulher.title || mulher.nome;
        link.appendChild(nome);
        
        if(mulher.metadata){
            if(mulher.metadata.image){
                if(mulher.metadata.image.url){
                    return imagem.src = mulher.metadata.image.url
                }
            }else{
                    return imagem.setAttribute("src", "./img/img-mulher.png")
                }
        }else if (mulher.foto){
        imagem.setAttribute('src', mulher.foto)
        }
        else{
            return imagem.setAttribute("src", "./img/img-mulher.png")
        };
        
    })
})
.catch((erro) => {
    console.log(erro);
})




const botao = document.querySelector('.botao');
botao.addEventListener('click', () =>{
    // location.reload();

    fetch ('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": pessoa.value,
            "foto": foto.value,
        
        })
    
    })
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
    
    })
    .catch((erro) => {
        console.log(erro);
})
})


const botaoDeletar = document.createElement('button');
botaoDeletar.innerHTML = "x";
botao.setAttribute('class', 'deletar');
botao.setAttribute('data-id', 'mulher.id');
perfil.appendChild(botaoDeletar);

botaoDeletar.addEventListener('click', () =>{
    fetch('localhost:5001/maravilhosas', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id":botao.getAttribute("data-id")
            
    })
})
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((erro) => {
    console.log(erro);
})
})