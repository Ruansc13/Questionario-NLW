const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retornar esse elemento?",
      respostas: [
        "shift()",
        "pop()",
        "splice()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10' + 5 em JavaScript?",
      respostas: [
        "15",
        "105",
        "Error"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
      respostas: [
        "getElementById()",
        "querySelector()",
        "getById()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para comparar valores e tipos em JavaScript?",
      respostas: [
        "==",
        "===", 
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever uma função em JavaScript?",
      respostas: [
        "function = minhaFuncao() {}",
        "myFunction(): function {}",
        "function minhaFuncao() {}"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico que representa 'ou' em JavaScript?",
      respostas: [
        "||",
        "&&",
        "!"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para arredondar um número para o inteiro mais próximo?",
      respostas: [
        "round()",
        "ceil()",
        "floor()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal =document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
    // Clona as 10 pergunta
  const quizItem = template.content.cloneNode(true)
  //muda o texto das perguntas
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  //poder selecionar as respostas em cada pergunta, sem desmarcar da outra
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  //diferenciar resposta certa da errada
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  //Dizer se X resposta esta certa  ou errada (True or False)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
     if(estaCorreta)
      corretas.add(item)
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  
  
  }
  //Remover o Resposta A
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }