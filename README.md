# apiBranchCriar projeto no github:
Criar um novo repositório
O gitignore deve ser: 'Node'
Clonar repositório na sua máquina:
No gitbash digitar:

git clone URL do repositório

OBS: Lembrar de liberar os scripts:
Rodar o power Shell no modo adminitrador e executar e confirmar com 's':

Set-ExecutionPolicy RemoteSigned
s
Instalar um projeto do zero (verificar se o node está intalado 'node -v'):
No terminal com o projeto aberto:

npm init -y
npm install express
CRIAR UM ARQUIVO index.js
Rodar o projeto
node index.js OBS: Para alterar o projeto você deve parar o servidor (Ctrl+c) e rodar novamente

no navegador: http://localhost:3005/

Fazer o commit:
No gitbash do seu repositório:

git status

git add .

git status

git commit -m "Nome do commit"

git push

OBS Se pedir para logar:

git config --global user.email "you@example.com"

git config --global user.name "Your Name"

E confirmar na caixa

Branch
Criar uma nova branch chamada dev
No terminal:

git fetch
git checkout NOME DA BRANCH
No github:

Criar uma nova brach
Digitar os comandos
Criar Pull Request e aprovar