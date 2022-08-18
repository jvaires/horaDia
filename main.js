function carregar(){
  const msg = document.querySelector('.msg')
  const img = document.querySelector('.foto')
  const data = new Date()
  const hora = data.getHours()
  msg.innerText = `Agora são ${hora} horas`
  if (hora >=0 && hora <12){
    //Bom dia!
    img.src = 'imgDia.png'
    }else if(hora >= 12 && hora < 18){
      // Boa tarde!
      img.src = 'imgTarde.png'
    }else{
      //Boa noite
      img.src = 'imgNoite.png'
    }
}
window.addEventListener('load', carregar)







