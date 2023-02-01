//--------------------VALIDANDO FORMULÁRIO----------------------//

//Criando as variáveis para guardar os dados
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for ="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for ="email"]');
let emailHelper = document.getElementById("email-helper");

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for ="idade"]');
let idadeHelper = document.getElementById("idade-helper");

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for ="senha"]');
let senhaHelper = document.getElementById("senha-helper");

let confirma_senhaInput = document.getElementById("confirma-senha");
let confirma_senhaLabel = document.querySelector('label[for ="confirma-senha"]');
let confirma_senhaHelper = document.getElementById("confirma-senha-helper");

const form = document.getElementById("form");

//--------------------FUNÇÕES GERAIS----------------------//

function togglePopUp(label,input) {
    // Mostrar popup de campos obrigatório    
    input.addEventListener("focus", () =>{
        label.classList.add("required-popup");
    });
    // Ocultar popupde campo obrigatório
    input.addEventListener("blur", () =>{
        label.classList.remove("required-popup");
    })
}

    
function correctInput(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}


function incorrectInput(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}


function ResetForm() {
    usernameInput.value ='';
    emailInput.value ='';
    idadeInput.value ='';
    senhaInput.value ='';
    confirma_senhaInput.value ='';
    usernameInput.classList.remove("correct");
    emailInput.classList.remove("correct");
    idadeInput.classList.remove("correct");
    senhaInput.classList.remove("correct");
    confirma_senhaInput.classList.remove("correct");
}


//--------------------VALIDAÇÃO DO USERNAME----------------------//
togglePopUp(usernameInput,usernameLabel )
// Validar valor do Input
usernameInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if(valor.length < 6) {
        //Adicionar estilos dinâmicos se valor for Menor que 6
        usernameHelper.innerText = "Username deve conter mínimo 6 Caracteres"
        incorrectInput(usernameInput,usernameHelper)
        // impedir envio do form quando campo não atende os requisitos
        correctInputs.username = false;
    } else {
        //Adicionar estilos dinâmicos se o valor estiver correto
        correctInput(usernameInput,usernameHelper)
        // validar o valor do input para envio do form
        correctInputs.username = true;
    }
})



//--------------------VALIDAÇÃO DO EMAIL----------------------//
togglePopUp(emailInput,emailLabel)
emailInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")) {       
        correctInput(emailInput,emailHelper)
        correctInputs.email = true;
    } else {
        incorrectInput(emailInput,emailHelper)
        emailHelper.innerText = "Email deve conter @ e .com"
        correctInputs.idade = false;
    }
})





//--------------------VALIDAÇÃO DA IDADE----------------------//
togglePopUp(idadeInput,idadeLabel)
idadeInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if(valor < 16) {
        incorrectInput(idadeInput,idadeHelper)
        idadeHelper.innerText = "Idade mínima permitida 16 anos"   
        correctInputs.idade = false; 
    } else {
        correctInput(idadeInput,idadeHelper)
        correctInputs.idade = true;
    }
})




//--------------------VALIDAÇÃO DA SENHA----------------------//
togglePopUp(senhaInput,senhaLabel)
senhaInput.addEventListener('blur', (e) => {
    let valor = e.target.value
    
    if (valor.length >= 6 ) {
        correctInput(senhaInput, senhaHelper)
        correctInputs.senha = true;
    } else {
        incorrectInput(senhaInput,senhaHelper)
        senhaHelper.innerText = "Senha deve conter mínimo 6 caracteres"
        correctInputs.senha = false;
    }
})




//--------------VALIDAÇÃO DE CONFIRMAÇÃO DE SENHA-----------------//
togglePopUp(confirma_senhaInput, confirma_senhaLabel)
confirma_senhaInput.addEventListener('blur', (e) => {
    let valor = e.target.value
        
    if (valor === senhaInput.value) {
        correctInput(confirma_senhaInput, confirma_senhaHelper)
        correctInputs.confirmarSenha = true;
    } else {
        incorrectInput(confirma_senhaInput,confirma_senhaHelper)
        confirma_senhaHelper.innerText = "As senhas devem ser iguais"
        correctInputs.confirmarSenha = false;
    }
})



//--------------HABILITAR ENVIO DE FORMULÁRIO-----------------//

const submitButton = document.getElementById("submit")

const correctInputs = {
    username: false,
    email: false,
    idade: false,
    senha: false,
    confirmarSenha: false, 
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const values = Object.values(correctInputs)
        
    const lookingFalse = values.filter((value)=> value === false)

    if (!lookingFalse.length) {
        alert('Formulário enviado com Sucesso!')
        ResetForm()
       
    } else{
        alert ('Preencha todos os campos e Tente Novamente')
    }
})