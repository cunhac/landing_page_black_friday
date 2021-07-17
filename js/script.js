const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let data = {
    email,  
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Enviando...</p>`

  let pronto = `<p>Oferta BLACK FRIDAY enviada com sucesso!</p>`

  content.innerHTML = carregando

  setTimeout(()=> {
    content.innerHTML = pronto 
  }, 1000)

})

