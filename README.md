# educação livre

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Você também pode acessar o projeto através do GitHub Pages no seguinte link:

<a href="https://purafome.github.io/educacao_livre/" target="_blank">github pages</a>

## Índice

* [Descrição do Projeto](#descrição-do-projeto)
* [ODS Selecionado](#ods-selecionado)
* [Estrutura do Projeto](#estrutura-do-projeto)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Como rodar o projeto](#como-rodar-o-projeto)
  * [Pré-requisitos](#pré-requisitos)
  * [Rodando o projeto](#rodando-o-projeto)
  * [Rodando o projeto com Docker](#rodando-o-projeto-com-docker)
* [Integrantes da Equipe](#integrantes-da-equipe)

## Descrição do Projeto

O projeto **Educação Livre** é uma página web que conecta tutores voluntários com pessoas que precisam ou querem aprender. A plataforma oferece cursos de leitura, escrita, matemática básica, programação e monitorias de matérias específicas, promovendo a educação de qualidade para todos.

## ODS Selecionado

<img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg" alt="ODS 4" width="300"/>

## Estrutura do Projeto

A estrutura do projeto ainda está em definição, mas será desenvolvida utilizando apenas HTML, CSS e JavaScript.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- docker (opcional)

## Como rodar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- <a href="https://git-scm.com" target="_blank">Git</a>
- <a href="https://www.docker.com/get-started" target="_blank">Docker (opcional)</a>

### Rodando o projeto

```bash
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal
$ cd educacao-livre

# Execute o arquivo index.html no seu navegador
```

### Rodando o projeto com Docker

```bash
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal
$ cd educacao-livre

# Execute o comando para criar a imagem do projeto
$ docker build -t educacao-livre .

# Execute o comando para rodar o container
$ docker run -d -p 8080:80 educacao-livre

# execute o comando para parar o container
$ docker stop <container_id>

# execute o comando para rodar com docker-compose
$ docker-compose up --build
```

Agora você pode acessar o projeto em [http://localhost:8080](http://localhost:8080)


## Integrantes da Equipe

- José Samuel Pereira
- <a href="https://www.linkedin.com/in/jos%C3%A9-samuel-pereira-6890a9247/" target="_blank">Linkedin</a>

## Licença
 
<p xmlns:cc="http://creativecommons.org/ns#" >Este trabalho está licenciado sob <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a> por José Samuel Pereira</p>