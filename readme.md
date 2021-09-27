
# BackEndResilia

API RESTful criada em NodeJS que fornece serviços para Controle de ativos emprestados ao alunos do resilia 

- Link da Api: https://backendresilia-api.herokuapp.com/
- Link do Front End integrado com a Api: [FrontEnd](https://computers-management-resilia.netlify.app/)



### 💾 Programas necessários

![git](https://i.ibb.co/nkKKP9y/git-icon-icon.png)
![Node](https://i.ibb.co/myprnzm/code-nodejs-logo-development-icon-icon.png)

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

Após baixar os programas necessários, clone o repositório executando comando abaixo no git

```git
   $ git clone https://github.com/mumbx/BackEndResilia
```

- Para criar o banco de dados é necessário executar o arquivo mostrado abaixo

![estrutura](https://i.ibb.co/9ZqBd40/basico.jpg)

- Para subir a Api execute o comando

```git
   $ npm start
```
## Rotas da api
### GET

- /students/ 

    Retorna todos os alunos cadastrados

- /students/:id

    Retorna o estudante com o id escolhido

- /computers/

    Retorna todos os computadores cadastrados

- /computers/:id

    Retorna o computar com o id escolhido

- /loans/

    Retorna todos os empréstimos cadastrados

- /loans/:id

    Retorna o empréstimo com o id escolhido
    

#### Exemplo do GET sem id

![estrutura](https://i.ibb.co/1vsPLp1/GETCOMUM-fw.png)

#### Exemplo do GET por id

![estrutura](https://i.ibb.co/LtQqtv8/GETCOMUM-fw.png)


### POST

- /student/create

    Cria um registro de aluno

- /computers/create

    Cria um registro de equipamento

- /loans/create

    Cria um registro de empréstino

#### Exemplo do json a ser enviado no POST

![estrutura](https://i.ibb.co/BK7qSJx/GETCOMUM-fw.png)


### DELETE

- /student/:id

    Deleta um registro de aluno com base no id passado na url

    Exemplo: localhost:3005/student/5

- /computers/:id

    Deleta um registro de equipamento com base no id passado na url

    Exemplo: localhost:3005/computers/5

- /loans/:id

    Deleta um registro de empréstimo com base no id passado na url

    Exemplo: localhost:3005/loans/5

    ### PUT

    - /student/:id

    Atualiza o registro do aluno com base no id passado na url

    Exemplo: localhost:3005/student/5    

- /computers/:id

    Atualiza o registro do equipamento com base no id passado na url

    Exemplo: localhost:3005/computers/5

- /loans/:id

    Atualiza o registro do empréstimo com base no id passado na url

## OBS: No corpo é necessário passar o mesmo JSON de criação da entidade escolhida, informando apenas as propriedades que deseja atualizar