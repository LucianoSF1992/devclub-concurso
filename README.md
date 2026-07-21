# DevClub — Next Level

> An immersive and interactive institutional experience created for the DevClub Full Stack Developer Contest.

🇧🇷 [Português](#-português) · 🇬🇧 [English](#-english)

---

# 🇧🇷 Português

## Sobre o projeto

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Programador(a) Full Stack do DevClub**.

O desafio consiste em criar uma experiência institucional que apresente o universo do DevClub de uma forma diferente de uma landing page tradicional.

A proposta deste projeto é transformar a navegação em uma experiência interativa, explorando **storytelling visual, animações, microinterações, tipografia editorial e uma identidade visual inspirada no universo da tecnologia**.

O objetivo é fazer com que o usuário não apenas percorra uma página, mas sinta que está avançando por uma jornada de evolução.

Além da experiência frontend, o projeto também será expandido com uma arquitetura **Full Stack**, utilizando uma API REST desenvolvida em **ASP.NET Core**, persistência de dados com **Entity Framework Core** e integração entre frontend e backend.

---

## Conceito

# NEXT LEVEL

A experiência foi construída em torno do conceito:

> **Você não está apenas aprendendo a programar.
> Você está construindo o seu próximo nível.**

A narrativa da experiência é representada por diferentes etapas:

```text
Curiosidade
    ↓
Desafio
    ↓
Aprendizado
    ↓
Construção
    ↓
Evolução
    ↓
Próximo nível
```

A intenção é transformar a navegação em uma jornada visual e interativa, conectando aprendizado, prática e evolução.

---

## Objetivos

O projeto foi desenvolvido priorizando os principais critérios de avaliação do desafio:

* Impacto visual e originalidade
* Animações e microinterações
* Qualidade e organização do código
* Responsividade
* Performance
* Acessibilidade

A experiência visual e as interações são prioridades fundamentais do projeto, buscando criar uma apresentação marcante e tecnicamente bem estruturada.

Além da experiência visual, o projeto busca demonstrar conhecimentos de desenvolvimento **Full Stack**, conectando uma aplicação moderna em Next.js a uma API REST construída com ASP.NET Core.

---

## Experiência atual

A experiência principal atualmente é composta por:

### Hero

Uma abertura imersiva com:

* Tipografia editorial de grande escala
* Animações de entrada
* Background em grid
* Glow visual
* Movimento baseado na posição do mouse
* CTA magnético
* Indicador de scroll

### Next Level

Uma seção narrativa que apresenta a evolução do usuário através dos conceitos:

```text
Aprenda
   ↓
Construa
   ↓
Evolua
```

### Journey

Uma jornada visual estruturada em etapas:

```text
01 — Fundamentos
02 — Projetos
03 — Desafios
04 — Próximo nível
```

A seção utiliza animações de revelação durante o scroll e uma timeline visual para representar progressão.

### Final CTA

Uma chamada final construída para reforçar o conceito central da experiência:

> **Seu próximo nível começa agora.**

A seção também servirá como ponto de integração com o backend, permitindo futuramente o envio de mensagens através de uma API REST.

### Footer

Rodapé com:

* Identidade DevClub
* Navegação interna
* Links para as principais seções
* Informações de copyright

### Navegação

O Header possui um menu fullscreen animado com navegação para:

* Início
* Próximo nível
* Jornada
* Começar

---

## Roadmap

### Fundação do Projeto

* [x] Criação do repositório
* [x] Inicialização do projeto Next.js
* [x] Configuração do TypeScript
* [x] Configuração do Tailwind CSS
* [x] Configuração das dependências de animação
* [x] Documentação da direção criativa
* [x] README do projeto
* [x] Roadmap inicial

### Design System

* [x] Identidade visual
* [x] Paleta de cores
* [x] Sistema tipográfico
* [x] Espaçamento e layout global
* [x] Scrollbar personalizada
* [x] Estilo de seleção de texto
* [x] Fundamentos responsivos

### Experiência Principal

* [ ] Preloader
* [x] Header interativo
* [x] Hero imersivo
* [x] Storytelling baseado em scroll
* [ ] Smooth scrolling
* [ ] Cursor personalizado / interações avançadas com ponteiro
* [x] Interações magnéticas

### Seções de Conteúdo

* [ ] O Desafio
* [ ] Sobre o DevClub
* [x] Jornada de Aprendizado
* [ ] Formações
* [ ] Histórias de Alunos
* [ ] Empresas
* [ ] Tutores
* [x] Next Level
* [x] CTA Final
* [x] Footer

### Animações e Microinterações

* [x] Animações de entrada
* [x] Animações de revelação durante o scroll
* [ ] Animações avançadas de texto
* [x] Interações de hover
* [x] Botões magnéticos
* [ ] Transições de imagens
* [ ] Transições avançadas entre seções
* [ ] Cards interativos

### Backend & Full Stack

* [ ] Criação da ASP.NET Core Web API
* [ ] Configuração da arquitetura do backend
* [ ] Entity Framework Core
* [ ] Banco de dados SQLite
* [ ] Model de mensagens de contato
* [ ] DTO e validação de requisições
* [ ] Endpoint de contato
* [ ] Persistência de dados
* [ ] Integração entre frontend e backend
* [ ] Tratamento de erros
* [ ] Rate limiting
* [ ] Configuração da API para produção

### Qualidade

* [ ] Revisão de responsividade mobile
* [ ] Revisão de responsividade tablet
* [ ] Otimização desktop
* [ ] Revisão de acessibilidade
* [ ] Otimização de performance
* [x] Metadados básicos de SEO
* [ ] Metadados Open Graph
* [ ] Análise Lighthouse
* [ ] Testes cross-browser

### Deploy

* [x] Build de produção validado
* [ ] Configuração do VPS
* [ ] Configuração do Nginx
* [ ] Certificado SSL
* [ ] Configuração do subdomínio
* [ ] Deploy do backend
* [ ] Deploy do frontend
* [ ] Integração em produção
* [ ] QA final
* [ ] Envio do concurso

> O roadmap representa o planejamento atual do projeto e poderá evoluir conforme o desenvolvimento e as necessidades da experiência.

---

## Tecnologias

### Frontend

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* TypeScript
* Tailwind CSS
* [Motion](https://motion.dev/)
* [Lucide React](https://lucide.dev/)

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core
* SQLite
* REST API

---

## Arquitetura

A aplicação utiliza uma arquitetura baseada em componentes no frontend e uma API REST separada no backend, buscando separar responsabilidades e facilitar a manutenção e evolução do projeto.

A estrutura planejada está organizada em:

```text
devclub-concurso/
│
├── app/
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── public/
│
├── docs/
│
└── backend/
    └── DevClub.Api/
        ├── Controllers/
        ├── Data/
        ├── DTOs/
        ├── Models/
        └── Program.cs
```

A arquitetura prioriza:

* Componentização
* Reutilização
* Separação de responsabilidades
* Manutenibilidade
* Escalabilidade
* Performance
* Acessibilidade
* Separação entre frontend e backend
* Integração via API REST

A arquitetura Full Stack planejada será:

```text
                    USUÁRIO
                       │
                       ▼
             Next.js / React
                       │
                       │ HTTP / REST
                       ▼
              ASP.NET Core API
                       │
                       ▼
                Entity Framework
                       │
                       ▼
                   SQLite
```

---

## Experiência Visual

A experiência visual foi construída com foco em:

* Dark Tech
* Cinematic Design
* Editorial Typography
* Interactive Experiences
* Scroll Reveal Animations
* Microinteractions
* Motion Design

A proposta é criar uma experiência que se aproxime mais de uma narrativa digital interativa do que de uma landing page institucional tradicional.

---

## Direção Criativa

A direção criativa do projeto está documentada em:

```text
docs/creative-direction.md
```

O documento apresenta os principais conceitos visuais e narrativos utilizados como base para o desenvolvimento da experiência.

---

## Status

🚧 **Frontend concluído — Backend em desenvolvimento**

A experiência principal de frontend está estruturada e conta com:

* Hero imersivo
* Design system
* Header interativo
* Navegação fullscreen
* Seção Next Level
* Jornada de aprendizado
* Animações de entrada
* Animações de scroll reveal
* Interações de hover
* Interações magnéticas
* CTA final
* Footer
* Metadados básicos de SEO
* Build de produção validado

O build de produção foi executado com sucesso utilizando:

```bash
npm run build
```

A aplicação foi compilada, validada pelo TypeScript e gerada como página estática pelo Next.js.

A próxima etapa do projeto será a implementação de uma API REST com **ASP.NET Core**, **Entity Framework Core** e **SQLite**, seguida da integração entre o frontend Next.js e o backend.

Após a integração Full Stack, serão realizadas as etapas de refinamento visual, responsividade, acessibilidade, performance, QA e publicação em produção.

---

## Executando localmente

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* Node.js 22+
* .NET 9 SDK
* npm
* Git

### Clone o repositório

```bash
git clone https://github.com/LucianoSF1992/devclub-concurso.git
```

### Acesse o diretório

```bash
cd devclub-concurso
```

### Instale as dependências

```bash
npm install
```

### Execute o ambiente de desenvolvimento

```bash
npm run dev
```

### Acesse no navegador

```text
http://localhost:3000
```

### Execute o build de produção

```bash
npm run build
```

### Backend

O backend será executado a partir do diretório:

```text
backend/DevClub.Api/
```

Após a implementação da API, o projeto poderá ser executado com:

```bash
cd backend/DevClub.Api
dotnet run
```

A API será disponibilizada localmente em uma porta configurada pelo ASP.NET Core.

---

## Deploy

A aplicação frontend será publicada em:

```text
https://devclub.lucianoferreiradev.com
```

A API backend será disponibilizada separadamente em:

```text
https://api.devclub.lucianoferreiradev.com
```

A arquitetura de produção planejada será:

```text
Internet
    │
    ├── devclub.lucianoferreiradev.com
    │          │
    │          ▼
    │       Next.js
    │
    └── api.devclub.lucianoferreiradev.com
               │
               ▼
         ASP.NET Core API
```

O deploy será realizado utilizando:

* Hostinger VPS
* Linux
* Nginx
* Node.js
* Next.js
* ASP.NET Core
* HTTPS / SSL

---

## Git Workflow

O projeto utiliza commits organizados por tipo de mudança, seguindo uma convenção inspirada no padrão Conventional Commits.

Exemplos:

```text
chore: initialize Next.js project
docs: improve project README
feat: establish design system
feat: create immersive hero experience
feat: add interactive header
feat: add next level experience
feat: add learning journey
feat: add final call to action
feat: add footer
feat: complete core landing page experience
feat: add ASP.NET Core backend
feat: add contact message persistence
feat: integrate contact form with backend
feat: enhance motion and microinteractions
perf: optimize animations and images
fix: improve responsive layout
docs: update roadmap and project status
docs: update project documentation
chore: prepare production deployment
```

---

## Autor

**Luciano Silva Ferreira**

Desenvolvedor Full Stack com foco em .NET, C#, ASP.NET Core, APIs REST, SQL Server, Entity Framework Core e arquitetura de software.

* GitHub: https://github.com/LucianoSF1992
* LinkedIn: https://www.linkedin.com/in/LucianoFerreira92/
* Portfólio: https://lucianoferreiradev.com

---

# 🇬🇧 English

## About

This project was developed as part of the application process for the **DevClub Full Stack Developer Contest**.

The challenge is to create an institutional experience that presents the DevClub ecosystem through an approach that goes beyond a traditional landing page.

The project aims to transform navigation into an interactive experience through **visual storytelling, animations, microinteractions, editorial typography, and a technology-inspired visual identity**.

The goal is to make users feel that they are progressing through a journey rather than simply scrolling through a traditional landing page.

In addition to the frontend experience, the project is being expanded into a **Full Stack architecture**, using an **ASP.NET Core REST API**, **Entity Framework Core** for data persistence, and frontend/backend integration.

---

## Concept

# NEXT LEVEL

The experience is built around the concept:

> **You are not just learning to code.
> You are building your next level.**

The narrative is represented through different stages:

```text
Curiosity
    ↓
Challenge
    ↓
Learning
    ↓
Building
    ↓
Evolution
    ↓
Next Level
```

The goal is to transform navigation into a visual and interactive journey connecting learning, practice, and personal growth.

---

## Goals

The project prioritizes the main evaluation criteria of the challenge:

* Visual impact and originality
* Animations and microinteractions
* Code quality and organization
* Responsiveness
* Performance
* Accessibility

Visual experience and interactions are fundamental priorities throughout the development process.

In addition to the visual experience, the project aims to demonstrate **Full Stack development skills** by connecting a modern Next.js frontend to a REST API built with ASP.NET Core.

---

## Current Experience

The current experience is composed of:

### Hero

An immersive opening experience featuring:

* Large-scale editorial typography
* Entrance animations
* Grid background
* Visual glow
* Mouse-based movement
* Magnetic CTA
* Scroll indicator

### Next Level

A narrative section presenting the user's evolution through:

```text
Learn
   ↓
Build
   ↓
Evolve
```

### Journey

A visual journey structured around four stages:

```text
01 — Foundations
02 — Projects
03 — Challenges
04 — Next Level
```

The section uses scroll reveal animations and a visual timeline to represent progression.

### Final CTA

A final call to action reinforcing the central concept:

> **Your next level starts now.**

The section will also serve as a future integration point with the backend, allowing messages to be submitted through a REST API.

### Footer

A footer containing:

* DevClub identity
* Internal navigation
* Main section links
* Copyright information

### Navigation

The Header includes an animated fullscreen menu with navigation to:

* Home
* Next Level
* Journey
* Get Started

---

## Roadmap

### Project Foundation

* [x] Repository creation
* [x] Next.js project initialization
* [x] TypeScript configuration
* [x] Tailwind CSS setup
* [x] Animation dependencies setup
* [x] Creative direction documentation
* [x] Project README
* [x] Initial roadmap

### Design System

* [x] Visual identity
* [x] Color palette
* [x] Typography system
* [x] Global spacing and layout
* [x] Custom scrollbar
* [x] Selection styling
* [x] Responsive foundations

### Core Experience

* [ ] Preloader
* [x] Interactive header
* [x] Immersive hero section
* [x] Scroll-based storytelling
* [ ] Smooth scrolling
* [ ] Custom cursor / advanced pointer interactions
* [x] Magnetic interactions

### Content Sections

* [ ] The Challenge
* [ ] About DevClub
* [x] Learning Journey
* [ ] Formations
* [ ] Student Stories
* [ ] Companies
* [ ] Mentors
* [x] Next Level
* [x] Final CTA
* [x] Footer

### Motion & Microinteractions

* [x] Page entrance animations
* [x] Scroll reveal animations
* [ ] Advanced text animations
* [x] Hover interactions
* [x] Magnetic buttons
* [ ] Image transitions
* [ ] Advanced section transitions
* [ ] Interactive cards

### Backend & Full Stack

* [ ] ASP.NET Core Web API creation
* [ ] Backend architecture setup
* [ ] Entity Framework Core
* [ ] SQLite database
* [ ] Contact message model
* [ ] DTO and request validation
* [ ] Contact API endpoint
* [ ] Data persistence
* [ ] Frontend/backend integration
* [ ] Error handling
* [ ] Rate limiting
* [ ] Production API configuration

### Quality

* [ ] Mobile responsiveness review
* [ ] Tablet responsiveness review
* [ ] Desktop optimization
* [ ] Accessibility review
* [ ] Performance optimization
* [x] Basic SEO metadata
* [ ] Open Graph metadata
* [ ] Lighthouse review
* [ ] Cross-browser testing

### Deployment

* [x] Production build validated
* [ ] VPS configuration
* [ ] Nginx configuration
* [ ] SSL certificate
* [ ] Subdomain configuration
* [ ] Backend deployment
* [ ] Frontend deployment
* [ ] Production integration
* [ ] Final QA
* [ ] Contest submission

> The roadmap represents the current project plan and may evolve as development progresses and the experience is refined.

---

## Technologies

### Frontend

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* TypeScript
* Tailwind CSS
* [Motion](https://motion.dev/)
* [Lucide React](https://lucide.dev/)

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core
* SQLite
* REST API

---

## Architecture

The application uses a component-based architecture on the frontend and a separate REST API on the backend, focusing on separation of concerns, maintainability, and scalability.

The planned structure is organized into:

```text
devclub-concurso/
│
├── app/
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── public/
│
├── docs/
│
└── backend/
    └── DevClub.Api/
        ├── Controllers/
        ├── Data/
        ├── DTOs/
        ├── Models/
        └── Program.cs
```

The architecture prioritizes:

* Componentization
* Reusability
* Separation of concerns
* Maintainability
* Scalability
* Performance
* Accessibility
* Frontend/backend separation
* REST API integration

The planned Full Stack architecture is:

```text
                    USER
                     │
                     ▼
             Next.js / React
                     │
                     │ HTTP / REST
                     ▼
              ASP.NET Core API
                     │
                     ▼
                Entity Framework
                     │
                     ▼
                   SQLite
```

---

## Visual Experience

The visual experience is designed around:

* Dark Tech
* Cinematic Design
* Editorial Typography
* Interactive Experiences
* Scroll Reveal Animations
* Microinteractions
* Motion Design

The goal is to create an experience closer to an interactive digital narrative than a traditional institutional landing page.

---

## Creative Direction

The project's creative direction is documented in:

```text
docs/creative-direction.md
```

The document presents the main visual and narrative concepts used as the foundation for the experience.

---

## Status

🚧 **Frontend completed — Backend in development**

The core frontend experience is now structured and includes:

* Immersive hero
* Design system
* Interactive header
* Fullscreen navigation
* Next Level section
* Learning journey
* Entrance animations
* Scroll reveal animations
* Hover interactions
* Magnetic interactions
* Final CTA
* Footer
* Basic SEO metadata
* Validated production build

The production build was successfully executed using:

```bash
npm run build
```

The application was successfully compiled, validated by TypeScript, and generated as a static page by Next.js.

The next stage of the project is the implementation of a REST API using **ASP.NET Core**, **Entity Framework Core**, and **SQLite**, followed by frontend/backend integration.

After the Full Stack integration, the project will proceed with visual refinement, responsiveness, accessibility, performance optimization, QA, and production deployment.

---

## Running Locally

### Prerequisites

Make sure you have installed:

* Node.js 22+
* .NET 9 SDK
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/LucianoSF1992/devclub-concurso.git
```

### Navigate to the project directory

```bash
cd devclub-concurso
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Open in your browser

```text
http://localhost:3000
```

### Run the production build

```bash
npm run build
```

### Backend

The backend will be located at:

```text
backend/DevClub.Api/
```

After the API implementation, the backend can be started with:

```bash
cd backend/DevClub.Api
dotnet run
```

The API will be available locally on a port configured by ASP.NET Core.

---

## Deployment

The frontend application will be deployed at:

```text
https://devclub.lucianoferreiradev.com
```

The backend API will be deployed separately at:

```text
https://api.devclub.lucianoferreiradev.com
```

The planned production architecture is:

```text
Internet
    │
    ├── devclub.lucianoferreiradev.com
    │          │
    │          ▼
    │       Next.js
    │
    └── api.devclub.lucianoferreiradev.com
               │
               ▼
         ASP.NET Core API
```

The deployment will use dedicated infrastructure with:

* Hostinger VPS
* Linux
* Nginx
* Node.js
* Next.js
* ASP.NET Core
* HTTPS / SSL

---

## Git Workflow

The project uses structured commits following a convention inspired by Conventional Commits.

Examples:

```text
chore: initialize Next.js project
docs: improve project README
feat: establish design system
feat: create immersive hero experience
feat: add interactive header
feat: add next level experience
feat: add learning journey
feat: add final call to action
feat: add footer
feat: complete core landing page experience
feat: add ASP.NET Core backend
feat: add contact message persistence
feat: integrate contact form with backend
feat: enhance motion and microinteractions
perf: optimize animations and images
fix: improve responsive layout
docs: update roadmap and project status
docs: update project documentation
chore: prepare production deployment
```

---

## Author

**Luciano Silva Ferreira**

Full Stack Developer focused on .NET, C#, ASP.NET Core, REST APIs, SQL Server, Entity Framework Core, and software architecture.

* GitHub: https://github.com/LucianoSF1992
* LinkedIn: https://www.linkedin.com/in/LucianoFerreira92/
* Portfolio: https://lucianoferreiradev.com
