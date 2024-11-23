# educação livre

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

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
- [Git](https://git-scm.com)
- [Docker (opcional)](https://www.docker.com/get-started)

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
- [Linkedin](https://www.linkedin.com/in/jos%C3%A9-samuel-pereira-6890a9247/)

