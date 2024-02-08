const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "variable",
        "var"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "addToEnd()",
        "append()"
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "===",
        "==",
        "!="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseInt()",
        "stringToNumber()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes tipos de dados é usado para armazenar uma lista ordenada de elementos em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String"
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "declare function myFunction()",
        "myFunction()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++)",
        "for (i = 0; i < 5; i++)",
        "for (let i = 0; i <= 5; i++)"
      ],
      correta: 0
    }
  ];
  
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrartotal = document.querySelector('#acertos span')
 mostrartotal.textContent = corretas.size + 'de' + totalDeperguntas

  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta 

    for(let respostas of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = respostas 
     dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf  (item))
     dt.querySelector('input').value = item.respostas.indexOf(respostas) 
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
       corretas.add(item)
       }
        mostrartotal.textContent = corretas.size + 'de' + totalDeperguntas
       
     }
         
     
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
    } 


    quizItem.querySelector('dl dt').remove()


    //coloca a pergunta na tela 
   quiz.appendChild(quizItem)
  }
 
  