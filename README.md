# Começando nosso Projeto
## Dependencias
Dependencias necessarias -> Node e Git (instalem)

## Clonar e rodar o codigo
Primeiro vamos até o "code -> clone" no github e copiamos o codigo - Sua escolha HTTP ou SSH

```
git clone seu_codigo_copiado_do_git
```
então abra o VSCode - ou o editor de texto da sua escolha - e abra o projeto clonado

Abra o terminal no projeto (na pasta do projeto) e instale as dependencias do projeto 
com o comando
```
npm install
```
Quando finalizar rode o projeto com o comando
```
npm start
```

Quando o comando terminar ira abrir uma aba na internet 
[http://localhost:3000](http://localhost:3000).

## Preview do Projeto
Preenchimento e visualização de formularios de dados pessoais e necessidade
clinicas que foram atendidas.

Dividiremos o Formulario (Prontuario) nas seguintes classes:
Cada Classe contemplara um CRUD (create,read,update,delete)

Paciente:
- Nome: string
- Celular1: number
- Celular2: number
- CPF: string
- Email: string

Nivel de Complexidade:
- Nome: String

Especialidade:
- Nome: String

Grupo de Estagio ?
- Nome?: String

Aluno:
- Nome: String
- Email: String
- Celular: Number
- MAtricula: Number

Prontuario: 
- Tudo junto e um pouco mais 

## Padrões de Codigo

- Variaveis em camel case -> varExempleNameInCamelCase
- Mome de metodos, classes funcoes e afins em ingles
- Mensagem de commit em ingles

## Atividade número 1

Crie um file correspondente a sua classe (file com index e css)
Adicione o seu file no arquivo de rotas (Router)
Adicione o seu file no menu lateral
Crie um arquivo react contendo a grid correspondente com sua classe
Commit

## Atividade número 1

Antes de começar use o codigo git chekout para criar uma nova branch para voce,
cujo o nome seja o nome da sua classe
```
git checkout -b nomeDaSuaBranch
```
Apos fazer as mudanças ultilize o codigo git add para adicionar os files alterados
```
git add .
```
No exemplo acima usamos o . para identificar que vamos commitar todos os files alterados

Commite suas mudanças com uma frase explicando oque fez
```
git commit -m "Your commit message in English Here"
```
Para finalizar der um git push
```
npm push
```
Caso Nunca tenha usado o git na sua maquina não esqueça de configurar usuario e name 
com o seguinte comando
```
git config --global user.email "you@example.com" git config --global user.name "Your Name"
```

