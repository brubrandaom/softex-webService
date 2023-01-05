# Como funciona
Geralmente, uma mensagem feita por SOAP para um web service é formada por três elementos:
- Envelope: Elemento raiz da mensagem, que define um documento XML como uma mensagem SOAP.
- Header: É um elemento opcional no XML, que deve ser utilizado quando se quer enviar informações, por exemplo, informações de segurança.
- Body: É um elemento obrigatório que contém os dados de negócio que o servidor está esperando.

A comunicação em questão utiliza um web service SOAP, faz uma consulta pelo CPF de um cliente (percebe-se a tag m:consultaClienteRequest) e o servidor responde com um nome, endereço e número de telefone.
