# DevClub --- Next Level

> An immersive Full Stack platform built for the DevClub Full Stack
> Developer Contest.

🇧🇷 **Português** \| 🇬🇧 **English**

------------------------------------------------------------------------

# 🇧🇷 Português

## Sobre

O DevClub Next Level é uma aplicação **Full Stack** composta por um
frontend em **Next.js** e uma **ASP.NET Core Web API**, desenvolvida
para apresentar o universo DevClub através de uma experiência moderna,
interativa e responsiva.

Além da landing page institucional, o projeto evoluiu para incluir
autenticação, área do aluno, cursos, aulas e formulário de contato
integrado à API.

## Demonstração

**Aplicação:** https://devclub.lucianoferreiradev.com

### Credenciais de teste

**E-mail**

``` text
usuario.teste@example.com
```

**Senha**

``` text
123456
```

### Como testar

1.  Acesse a aplicação.
2.  Faça login com as credenciais acima ou crie uma nova conta em
    `/cadastro`.
3.  Navegue pela Área do Aluno.
4.  Explore os cursos e aulas.
5.  Teste o formulário de contato.

## Funcionalidades

-   Landing page institucional
-   Hero interativo
-   Área do aluno
-   Cadastro de usuários
-   Login
-   Catálogo de cursos
-   Visualização de aulas
-   Formulário de contato
-   API REST
-   Persistência com SQLite

## Tecnologias

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Motion
-   Lucide React

### Backend

-   ASP.NET Core Web API
-   Entity Framework Core
-   SQLite

## Arquitetura

``` text
Internet
    │
    ▼
Nginx
    │
    ├── Next.js
    └── ASP.NET Core API (/api)
               │
               ▼
      Entity Framework Core
               │
               ▼
             SQLite
```

## Roadmap

### Frontend

-   [x] Landing page institucional
-   [x] Hero interativo
-   [x] Área do aluno
-   [x] Cadastro
-   [x] Login
-   [x] Cursos
-   [x] Aulas
-   [ ] Dashboard
-   [ ] Perfil

### Backend

-   [x] ASP.NET Core API
-   [x] Entity Framework Core
-   [x] SQLite
-   [x] Autenticação
-   [x] Endpoints de cursos
-   [x] Endpoint de contato
-   [ ] JWT
-   [ ] Refresh Token

### Produção

-   [x] VPS
-   [x] HTTPS
-   [x] Nginx
-   [x] PM2
-   [x] Systemd
-   [ ] Monitoramento

## Executando localmente

``` bash
git clone https://github.com/LucianoSF1992/devclub-concurso.git
cd devclub-concurso
npm install
npm run dev
```

Backend:

``` bash
cd backend/DevClub.Api
dotnet run
```

## Deploy

-   Hostinger VPS
-   Ubuntu Linux
-   Nginx
-   PM2
-   Systemd
-   HTTPS
-   SQLite

------------------------------------------------------------------------

# 🇬🇧 English

## Overview

DevClub Next Level is a **Full Stack** application built with
**Next.js** and **ASP.NET Core Web API**. It combines an immersive
institutional experience with authentication, a student area, courses,
lessons and a contact API.

## Live Demo

**Application:** https://devclub.lucianoferreiradev.com

### Test Account

Email

``` text
usuario.teste@example.com
```

Password

``` text
123456
```

## Features

-   Interactive landing page
-   Authentication
-   Student area
-   Courses
-   Lessons
-   Contact form
-   REST API
-   SQLite persistence

## Stack

Next.js • React • TypeScript • Tailwind CSS • ASP.NET Core • Entity
Framework Core • SQLite

## Author

**Luciano Silva Ferreira**

-   GitHub: https://github.com/LucianoSF1992
-   LinkedIn: https://www.linkedin.com/in/LucianoFerreira92/
-   Portfolio: https://lucianoferreiradev.com
