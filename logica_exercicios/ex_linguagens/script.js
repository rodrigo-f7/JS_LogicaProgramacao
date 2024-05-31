/*
PROGRAMA DA SELEÇÃO DAS LINGUAGENS DE PROGRAMAÇÃO
UTILIZANDO CONDICIONAIS DE SELEÇÃO
RODRIGO PEREIRA FARIA
31/05/24
*/

const selectLanguage = document.querySelector(".select-language")
const languageContent = document.querySelector(".language-content")
let changeAlready = false;

selectLanguage.addEventListener("change", () => {
    let selectValue = selectLanguage.value;
    
    if(changeAlready){
        languageContent.textContent = "";
    }

    if(selectValue === "html"){
        languageContent.textContent = "O HTML é uma linguagem de marcação, sua sigla se chama HyperText Markup Language, que serve para determinar elementos em uma página da web. Para isso faz uso de tags, com '<' para abrir a tag, e '>' para fechá-la. Alguns exemplos de tags são <h1>, <p>, <div> e outras tags ";
        changeAlready = true;
    }

    else if(selectValue === "css"){
        languageContent.textContent = "O CSS é uma linguagem de estilização relacionada ao HTML. Sua sigla significa Cascadying Style Sheets, nome que é dado pois a prioridade dos items de estilização são sempre os últimos.Logo, a função do CSS é proporcionar uma melhor visualização dos elementos criados em HTML, diante disso faz uso de seletores como classes ou ids para selecionar as entidades e modificá-las.";
    }
    else if (selectValue === "java"){
        languageContent.textContent = "O Java é uma linguagem de programação orientado a objetos criada pela Sun Microsystems, hoje sua proprietária é a Oracle. É uma linguagem popular, de sintaxe verbosa, muito utilizada na integração de aplicações backend nos sites modernos. Um dos frameworks de Java que mais se destacam é o SpringBoot, utilizado na criação de websites. Sua principal caracterísitca é a possibilidade de rodar código em qualquer plataforma, bastando ao dispositivo possuir uma Máquina Virtual Java para executar os bytecodes.";
    }
    else if(selectValue === "python"){
        languageContent.textContent = "Python é uma linguagem de programação de alto nível multiparadigma e interpretada muito popular atualmente. É extremamente utilizada em programas de backend, com consultas MongoDB ou SQL, e principalmente em desenvolvimento de IAs. Alguns dos frameworks do Python são o TensorFlow, o Django e Pytorch";
    }

    else if(selectValue === "js"){
        languageContent.textContent = "O Javascript é uma linguagem de programação orientada a objetos e funcional cujo propósito está voltado tanto para o frontend, com a interação das páginas HTML, como para o backend, com a conexão com banco de dados, criação de servidores web e integração de APIs. O frontend do Javascript é possível com a API do DOM (Document Object Model) que nos navegadores possibilita integrar a execução de código javascript, já para o backend é necessário ter o nodeJS instalado, um framework que possibilita execução de código Javascript para server-side.";
    }
    else{
        languageContent.textContent = "Não disponível";
    }
})  