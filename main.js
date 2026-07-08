
let pessoas = []

let cadastrados= document.querySelector(".cadastrados")
const addPessoas= ()=>{
    cadastrados.innerHTML=""
    pessoas.map(pessoa =>{
        const div=document.createElement("div")
        div.setAttribute("class","cardpessoa")
        div.innerHTML=`<p><strong>Nome:</strong> ${pessoa.nome}</p>
                        <p><strong>Idade:</strong> ${pessoa.idade}</p>`
        cadastrados.appendChild(div)
    })
}

document.querySelector("#adicionarPessoa").addEventListener('click', () => {

    const erroNome = document.getElementById("erroNome")
    const erroIdade = document.getElementById("erroIdade")

    erroNome.textContent = ""
    erroIdade.textContent = ""

    let inputNome = document.getElementById("inputNome")
    let inputIdade = document.getElementById("inputIdade")

    inputNome.classList.remove("inputErro")
    inputIdade.classList.remove("inputErro")

    let nome = inputNome.value.trim()
    let idade = inputIdade.value.trim()

    if (nome === "") {
        erroNome.textContent = "Informe um nome."
        inputNome.classList.add("inputErro")
        inputNome.focus()
        return
    }

    if (idade === "") {
        erroIdade.textContent = "Informe uma idade."
        inputIdade.classList.add("inputErro")
        inputIdade.focus()
        return
    }

    if (isNaN(idade)) {
        erroIdade.textContent = "Digite apenas números."
        inputIdade.classList.add("inputErro")
        inputIdade.focus()
        return
    }

    if (Number(idade) < 0) {
        erroIdade.textContent = "A idade não pode ser negativa."
        inputIdade.classList.add("inputErro")
        inputIdade.focus()
        return
    }

    const Pessoa = {
        nome: "",
        idade: "",

        SetNome: function (nome) {
            this.nome = nome
        },

        SetIdade: function (idade) {
            this.idade = idade
        }
    }

    Pessoa.SetNome(nome)
    Pessoa.SetIdade(idade)

    pessoas.push(Pessoa)

    console.log(pessoas)

    inputNome.value = ""
    inputIdade.value = ""

    inputNome.focus()

    addPessoas()

})