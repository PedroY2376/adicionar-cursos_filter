//----------------------------------------------------- adiciona cursos no caixa da direita

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const cursosAntigos = document.querySelector('#cursos-antigos')

let indice = 0

const criarNovoCurso = (el)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso')
    novoElemento.innerHTML = el
    

    const radioContainer = document.createElement('div')
    radioContainer.setAttribute('class', 'radio-container')
    

    const radios = document.createElement('input')
    radios.setAttribute('type', 'radio')
    radios.setAttribute('name', 'radio-botao')
   
    radioContainer.appendChild(radios)

    novoElemento.appendChild(radioContainer)
    return novoElemento
}

cursos.map((el)=>{
    const novoElemento = criarNovoCurso(el)
    cursosAntigos.appendChild(novoElemento)
    indice++
})

//------------------------------------------------------------- botao 'curso Selecionado' e 'Remover Curso' - retorna um alert

const radioSelecionadoFunção = ()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((elemento, indice, array)=>{
        return elemento.checked
    })
    return radioSelecionado[0]
}

const botaoCursoSelecionado = document.querySelector('#botao-curso-selecionado')
botaoCursoSelecionado.addEventListener('click', ()=>{
    const radioSel = radioSelecionadoFunção()

    if(radioSel != undefined){
        const cursoSelecionado = radioSel.parentNode.parentNode.firstChild.textContent
    alert(`Você selecionou o curso: ${cursoSelecionado}`)
    }else{
        alert('Escolha um curso')
    }
})

const botaoRemoverCurso = document.querySelector('#botao-remover-curso')
botaoRemoverCurso.addEventListener('click', ()=>{
    const radioSel = radioSelecionadoFunção()

    if(radioSel != undefined ){
        const cursoSelecionado = radioSel.parentNode.parentNode
        cursoSelecionado.remove()
    }else{
        alert('Escolha um curso')
    }
})

//------------------------------ Adicionar texto antes ou depois do elemento selecionado
const botaoAdicionarAntes = document.querySelector('#botao-adicionar-antes')
const botaoAdicionarDepois = document.querySelector('#botao-adicionar-depois')
const nomeCursoNovo = document.querySelector('#adicionar-curso')

botaoAdicionarAntes.addEventListener('click', ()=>{
    const radioSel = radioSelecionadoFunção()

    if(radioSel != undefined){
        
        if(nomeCursoNovo.value != ''){
            const cursoSelecionado = radioSel.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCursoNovo.value)
            cursosAntigos.insertBefore(novoCurso, cursoSelecionado)
        }else{
            alert('Escreva um curso para ser adicionado')
        }
        
    }else{
        alert('Selecione um curso')
    }
})

botaoAdicionarDepois.addEventListener('click', ()=>{
    const radiosSel = radioSelecionadoFunção()

    if(radiosSel != undefined){

        if(nomeCursoNovo.value != ''){
            const cursoSelecionado = radiosSel.parentNode.parentNode.nextSibling
            const novoCurso = criarNovoCurso(nomeCursoNovo.value)
            cursosAntigos.insertBefore(novoCurso, cursoSelecionado)
        }else{
            alert('Escreva um curso para ser adicionado')
        }
        
    }else{
        alert('Selecione um curso')
    }

})