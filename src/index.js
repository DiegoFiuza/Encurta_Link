'use strict'


const link = document.querySelector('#link');
const botao = document.querySelector('#enviar');
const container = document.querySelector('.output');


const Encurta =function(){
    container.innerHTML = '';
    const encurtado = document.createElement('a');
    encurtado.target = '__blank';
    const envio = document.createElement('p');
    const verifierHTTP = 'https://www.';
    let rand = (length)=> Math.random().toString(36).substring(2,2 + length);
    if(!link.value.includes(verifierHTTP)){
        if(link.value ===''){
            alert('Não deixe o campo vazio');
            return
        }
        const newLink = `${verifierHTTP}${link.value}`
        encurtado.href = newLink
        const img = document.createElement('img')
        img.classList.add('m-4')
        img.style.border = '1px solid #ddd';
        img.style.padding = '5px';
        QRCode.toDataURL(encurtado.href, { width: 200, margin: 2 }, (err,url)=>{
            if(err){
                console.error(err);
                return;
            }
            img.src = url;
            container.appendChild(img);
            console.log('QR Code gerado');
        })
        encurtado.textContent= `shorter.url/${rand(4)}`;
        encurtado.classList.add('text-blue-600');
        encurtado.classList.add('underline')
            

        
    }
    else{
        encurtado.href = link.value
        const img = document.createElement('img')
        img.style.marginTop ='20px',
        img.style.border = '1px solid #ddd';
        img.style.padding = '5px';
        QRCode.toDataURL(encurtado.href,{ width: 200, margin: 2 }, (err,url)=>{
            if(err){
                console.error(err);
                return
            }
            console.log('QR Code gerado');
            img.src = url;
            container.appendChild(img);
            })
        encurtado.textContent= `shorter.url/${rand(4)}`;
        encurtado.classList.add('text-blue-600');
        encurtado.classList.add('underline');
        encurtado.classList.add('ml-10');
    }
    envio.appendChild(encurtado);
    container.appendChild(envio);
    container.classList.remove('hidden');
    
    
    link.value = '';
    link.focus();
}


botao.addEventListener('click',()=>{
    Encurta();
})

link.addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
        Encurta();
        event.preventDefault();//previnindo comportamento padrão do enter
    }
})
