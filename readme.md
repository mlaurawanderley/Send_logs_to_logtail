
# Como enviar logs para o Logtail com winston

Exemplos de como enviar logs personalizados com Winston para o Logtail e exemplo de criação de arquivos locais dos logs.



### Tools Requirements

- [Nodejs & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [LogTail](https://betterstack.com/logtail)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### Use Case

No nosso exemplo, vamos tratar de logs personalizados com o winston, simulando a venda/cancelamento de alguns planos. 

Serão criados 3 arquivos locais com os logs de Erro, Erro interno e Warn, e os logs também serão enviados para o logtail, onde você vai poder acompanhar e filtrar por nivel de log. 
## Install

Clone este repositorio e instale as dependencias para a aplicação funcionar corretamente:

```bash
  git clone https://github.com/mlaurawanderley/Send_logs_to_logtail
  cd Send_logs_to_logtail/
  npm install 
```
**Lembrando que para o funcionamento correto da aplicação, você deve criar uma conta no logtail e alterar o arquivo 'logger.js' com o seu sourceToken.**


Depois de alterar o arquivo, você estará pronto para iniciar seu servidor:

```bash
  npm start
```

![logtail](https://user-images.githubusercontent.com/87887130/208464682-fde549fa-d6bc-4c9e-b1af-972720fbbb02.png)