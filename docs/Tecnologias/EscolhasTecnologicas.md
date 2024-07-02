# Escolhas Tecnológicas 

## Introdução

<p style="text-align: justify;"> Para este artefato, o objetivo foi fornecer uma visão abrangente das escolhas tecnológicas feitas para o nosso projeto. As decisões relacionadas à tecnologia desempenham um papel crucial no desenvolvimento bem-sucedido de qualquer iniciativa. Portanto, é essencial entender as razões por trás das seleções feitas, bem como os benefícios e desafios associados a cada escolha.</p>

## Metodologia 

<p style="text-align: justify;"> Durante as reuniões de equipe, foi discutido constantemente as tecnologias ideais para a implementação das funcionalidades desejadas. Então foi identificada as necessidades tecnológicas e feitas pesquisas para solucionar essas necessidades. Nesse contexto, optamos pelas seguintes tecnologias:</p>

### 1. [Python](https://docs.python.org/pt-br/3.10/index.html) <img src='https://skillicons.dev/icons?i=python' alt="Python" width="20"></img> 
  
<p style="text-align: justify;">Dada a ampla utilização da linguagem Python na área de ciência de dados, foi escolhido utilizá-la para a obtenção dos Diários Oficiais, extração de texto e análise.</p>

Para alcançar isso, será empregado as seguintes ferramentas:

- [Selenium](https://www.selenium.dev/pt-br/documentation/webdriver/getting_started/): <p style="text-align: justify;">Será usado o framework Selenium para automatizar e simular as ações de um usuário no site que disponibiliza os Diários Oficiais, permitindo-nos fazer o download de cada um dos PDFs.</p>
- [PyPDF2](https://pypdf2.readthedocs.io/en/3.0.0/):<p style="text-align: justify;"> Após a extração dos PDFs, será utilizado a biblioteca PyPDF2 para extrair o texto e salvá-lo em um arquivo .txt.</p>
- [Regex](https://docs.python.org/3/library/re.html):<p style="text-align: justify;"> Com o arquivo .txt em mãos, será aplicado expressões regulares (Regex) para buscar palavras-chave e estruturas de texto, localizando assim as informações cruciais para o projeto.</p>

### 2. [TypeScript](https://devdocs.io/typescript/) <img src='https://skillicons.dev/icons?i=typescript' alt="JavaScript" width="20"></img> / [React](https://react.dev/reference/react) <img src='https://skillicons.dev/icons?i=react' alt="React" width="20"></img> 

<p style="text-align: justify;"> A escolha do TypeScript com React foi baseada na eficiência na criação de interfaces de usuário e na facilidade de uso. Essa combinação é ideal para implementar gráficos interativos e disposição dinâmica de dados, atendendo aos requisitos do site de forma eficaz. Ademais, o TypeScript é uma extensão do JavaScript que adiciona tipagem estática e aprimora a eficiência do desenvolvedor, além de seguir o paradigma de programação orientada a objetos e ser compatível com diversos ambientes de desenvolvimento, trazendo diversas vantagens para o desenvolvimento do projeto.</p>

### 3. [Docker](https://www.docker.com/) <img src='https://skillicons.dev/icons?i=docker' alt="Docker" width="20"></img>
<p style="text-align: justify;"> Para garantir a consistência e portabilidade do ambiente de desenvolvimento e produção, optamos por utilizar o Docker, uma plataforma que facilita a criação, deploy e execução de aplicações em containers, assegurando que nosso software funcione de maneira consistente em qualquer ambiente. Os principais benefícios do Docker incluem isolamento e consistência, pois cada componente do projeto (frontend, backend, banco de dados, etc.) pode ser isolado em containers distintos, garantindo que as dependências e configurações específicas de cada parte do sistema não interfiram umas com as outras; portabilidade, permitindo que containers Docker sejam executados em qualquer sistema que suporte Docker, minimizando problemas de compatibilidade; escalabilidade, facilitando a criação e gerenciamento de microserviços, permitindo escalar partes específicas da aplicação conforme necessário; e facilidade de configuração, com arquivos de configuração como Dockerfile e docker-compose.yml, definindo todo o ambiente e suas dependências de maneira declarativa e reproduzível.</p> 