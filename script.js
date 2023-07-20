function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // if(html.classList.remove('light')) {
  //else{
  //  html.classList.add('light')
  // }
  //}
  
  //pegar a tag img
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
     //substituir a imagem
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt", "Foto de perfil da Luana Soares, com óculos de grau, sorrindo e usando uma blusa azul"
      )
    //se tiver light mode, adicionar a imagem light
  } else{
      //se tiver sem lighr mode, manter a imagem normal
  img.setAttribute('src','./assets/avatar.png')
     img.setAttribute(
       "alt",
       "Foto de perfil da Luana Soares, em preto e branco, com rabiscos, onde se transforma em palhaço"
     )
}

}