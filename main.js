const ContainerPrincipal = document.querySelector(".container-principal")
const containerAgradecimento = document.querySelector(".container-feedback")
const BotaoEnviar = document.getElementById("enviar-avaliacao")
const avaliacao = document.querySelectorAll(".numeros")
const rating = document.getElementById("rating")

BotaoEnviar.addEventListener("click", () => {
    containerAgradecimento.classList.remove("hidden")
    ContainerPrincipal.style.display = "none"
})

//com o metodo forEach pegamos todos os elementos de 1 a 5 e colocamos os dados dentro de um parametro (rate)
avaliacao.forEach((rate) =>{
    //com os dados dentro do rate nos adicionamentos um evento que quando ser clicado vai fazer uma funçao/açao
    rate.addEventListener("click", () =>{
        // e nessa açao/funçao vai ser escrito o dado que foi clicado no span que tem o id = rating
        rating.innerHTML = rate.innerHTML
    })
})
