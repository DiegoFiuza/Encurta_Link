'use strict'
const link = document.querySelector('#link');
const botao = document.querySelector('#enviar');
const container = document.querySelector('.output');
const verifierHTTP = 'https://';

botao.addEventListener('click', ()=>{
    container.innerHTML = '';  //Limpando container
    const encurtado = document.createElement('a');
    encurtado.target = '__blank';
    const envio = document.createElement('p');
    let rand = (length)=> Math.random().toString(36).substring(2,2 + length);
    if(!link.value.includes(verifierHTTP)){
        const newLink = `${verifierHTTP}${link.value}`
        encurtado.href = newLink
        encurtado.textContent= `shorter.url/${rand(4)}`;
        encurtado.classList.add('text-blue-600');
        encurtado.classList.add('underline')
    }
    else{
        encurtado.href = link.value
        encurtado.textContent= `shorter.url/${rand(4)}`;
        encurtado.classList.add('text-blue-600');
        encurtado.classList.add('underline')
    }
    if(encurtado.textContent !== ''){
        envio.appendChild(encurtado);
        container.appendChild(envio);
        container.classList.remove('hidden');
        link.value = '';
    }

})