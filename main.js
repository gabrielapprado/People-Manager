let pessoas = []

let cadastrados= document.querySelector(".cadastrados")
const atualizarPessoas= ()=>{
    cadastrados.innerHTML=""
    pessoas.map((pessoa, indice) =>{
        const div=document.createElement("div")
        div.setAttribute("class","cardpessoa")
        div.innerHTML=`<p><strong>Nome:</strong> ${pessoa.nome}</p>
                        <p><strong>Idade:</strong> ${pessoa.idade}</p>
                        <p><strong>Email:</strong> ${pessoa.email}</p>
                        <p><strong>Telefone:</strong> ${pessoa.telefone}</p>`
        cadastrados.appendChild(div)
        
        const buttonRemover=document.createElement("button")
        buttonRemover.setAttribute("class","buttonRemover")
        buttonRemover.innerHTML="Remover"
        div.appendChild(buttonRemover)

        buttonRemover.addEventListener('click', ()=>{
            pessoas.splice(indice,1)

            atualizarPessoas()
        })
    })
}

document.querySelector("#adicionarPessoa").addEventListener('click', () => {

    const erroNome = document.getElementById("erroNome")
    const erroIdade = document.getElementById("erroIdade")
    const erroEmail = document.getElementById("erroEmail")
    const erroTelefone = document.getElementById("erroTelefone")

    erroNome.textContent = ""
    erroIdade.textContent = ""
    erroEmail.textContent = ""
    erroTelefone.textContent = ""

    let inputNome = document.getElementById("inputNome")
    let inputIdade = document.getElementById("inputIdade")
    let inputEmail= document.getElementById("inputEmail")
    let inputTelefone= document.getElementById("inputTelefone")

    inputNome.classList.remove("inputErro")
    inputIdade.classList.remove("inputErro")
    inputEmail.classList.remove("inputErro")
    inputTelefone.classList.remove("inputErro")

    let nome = inputNome.value.trim()
    let idade = inputIdade.value.trim()
    let email = inputEmail.value.trim()
    let telefone = inputTelefone.value.trim()
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

    if (email === "") {
        erroEmail.textContent = "Informe um Email."
        inputEmail.classList.add("inputErro")
        inputEmail.focus()
        return
    }

    if (telefone === "") {
        erroTelefone.textContent = "Informe um Telefone."
        inputTelefone.classList.add("inputErro")
        inputTelefone.focus()
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
        nome: nome,
        idade: idade,
        email: email,
        telefone: telefone
    }

    pessoas.push(Pessoa)

    console.log(pessoas)

    inputNome.value = ""
    inputIdade.value = ""
    inputEmail.value = ""
    inputTelefone.value = ""

    inputNome.focus()

    atualizarPessoas()

})

