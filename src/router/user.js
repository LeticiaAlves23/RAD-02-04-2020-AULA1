app.post('/cadastrar', (req, res) => {
    // Criamos um novo usuário utilizando o schema que montamos na pasta models
    var novoUsuario = new User({
      name: req.body.name, // A instrução req.body nos retorna um objeto com os dados que foram enviados através de uma requisição
      password: req.body.password
    })
  
    novoUsuario.save((err) => {
      if (err) throw err // Se tiver algum erro na hora de salvar, usamos o throw para retornar uma "exception"
  
      console.log('Usuário cadastrado com sucesso')
      res.json({
        success: true
      }) // Se tudo ocorrer bem, retornamos um json dizendo que deu certo
    })
  })