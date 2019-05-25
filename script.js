const box = document.querySelector(".maravilhosas__box");
let pessoa = document.querySelector(".name");
let foto = document.querySelector(".imagem");

fetch('http://localhost:5001/maravilhosas')

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.content.forEach(mulher => {

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
        
            const botaoDeletar = document.createElement('button');
            botaoDeletar.innerHTML = "x";
            botaoDeletar.setAttribute('class', 'deletar');
            botaoDeletar.setAttribute('data-id', mulher.id);
            perfil.appendChild(botaoDeletar);

            botaoDeletar.addEventListener('click', () => {
                const thisCard = botaoDeletar.parentElement;
                const cardPai = thisCard.parentElement;
                const idMulher = botaoDeletar.getAttribute('data-id');

                fetch(`http://localhost:5001/maravilhosas/${idMulher}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },

                    })

                    .then((response) => {
                        cardPai.removeChild(thisCard)
                        // return response.json();
                    })

                    .catch((erro) => {
                        console.log(erro);
                    })
            })
            
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




const botaoDeletar = document.querySelector('.botao');
botaoDeletar.addEventListener('click', () => {

    fetch('http://localhost:5001/maravilhosas', {
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
            console.log(response);
            document.location.reload(true);
            return response.json();
        })
        .then((data) => {
            console.log(data);

        })
        .catch((erro) => {
            console.log(erro);
        })
})