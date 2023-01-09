# Regras de uma API REST
1. Cliente-servidor: Separa a arquiterura e responsabilidades em dois ambientes.
2. Stateless (sem estado): Um mesmo cliente pode mandar várias requisições para o servidor, porém, cada uma delas devem ser independentes, ou seja, toda requisição deve conter todas as informações necessárias para que o servidor consiga entendê-la e processá-la adequatamente.
3. Armazenamento em cache: Ajuda a melhorar a performance, a escalabilidade e eficiência uma vez que reduz o tempo de resposta médio quando comparado entre uma série de interações cliente-servidor.
4. Interface uniforme: São pequenas regras para deixar um componente o mais genérico possível, o tornando muito mais fácil de ser refatorado e melhorado. Dentro desta regra, existe uma espécie de guideline para fazer essa comunicação uniforme:
   <br>Identificando o resource – Cada resource deve ter uma URI específica e coesa para poder ser acessado.
   <br>Representação do resource – É a forma como o resource vai ser devoldido para o cliente. Esta representação pode ser em HTML, XML, JSON, TXT, entre outras.
   <br>Resposta auto-explicativa – Passagem de meta informações (metadata) na requisição e na resposta.
   <br>Hypermedia – Consiste em retornar todas as informações necessárias na resposta para que cliente saiba navegar e ter acesso a todos os resources da aplicação.
5. Sistema em camadas: A sua aplicação deve ser composta por camadas, e estas camadas devem ser fáceis de alterar, tanto para adicionar mais camadas, quanto para removê-las. 
6. código sob demanda: Esta condição permite que o cliente possa executar algum código sob demanda, ou seja, estender parte da lógica do servidor para o cliente, seja através de um applet ou scripts. Assim, diferentes clientes podem se comportar de maneiras específicas mesmo que utilizando exatamente os mesmos serviços providos pelo servidor.

*fonte: https://imasters.com.br/desenvolvimento/definicao-restricoes-e-beneficios-modelo-de-arquitetura-rest*






