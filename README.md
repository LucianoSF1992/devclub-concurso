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

Além da experiência frontend, o projeto foi expandido para uma arquitetura **Full Stack**, utilizando uma aplicação frontend desenvolvida com **Next.js**, uma API REST desenvolvida em **ASP.NET Core**, persistência de dados com **Entity Framework Core** e banco de dados **SQLite**.

O backend também contempla funcionalidades de interação com o usuário, como o envio e armazenamento de mensagens através de um formulário de contato integrado à API.

As próximas etapas incluem a construção de uma **Área do Aluno**, gerenciamento de **Cursos** e evolução da experiência visual da página, consolidando o projeto como uma demonstração completa de desenvolvimento Full Stack.

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
* Integração Full Stack
* Organização arquitetural
* Persistência de dados
* Experiência do usuário

A experiência visual e as interações são prioridades fundamentais do projeto, buscando criar uma apresentação marcante e tecnicamente bem estruturada.

Além da experiência visual, o projeto demonstra conhecimentos de desenvolvimento **Full Stack**, conectando uma aplicação moderna em Next.js a uma API REST construída com ASP.NET Core.

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

A próxima evolução do Hero terá como objetivo ampliar a sensação de profundidade e movimento, inspirando-se em experiências digitais modernas de plataformas de tecnologia e educação, mantendo uma identidade visual própria para o projeto.

---

### Next Level

Uma seção narrativa que apresenta a evolução do usuário através dos conceitos:

```text
Aprenda
   ↓
Construa
   ↓
Evolua
```

---

### Journey

Uma jornada visual estruturada em etapas:

```text
01 — Fundamentos
02 — Projetos
03 — Desafios
04 — Próximo nível
```

A seção utiliza animações de revelação durante o scroll e uma timeline visual para representar progressão.

---

### Final CTA

Uma chamada final construída para reforçar o conceito central da experiência:

> **Seu próximo nível começa agora.**

A seção direciona o usuário para a área de contato e reforça a proposta de interação da experiência.

---

### Contact

Seção de contato integrada ao backend.

O formulário permite o envio de:

* Nome
* E-mail
* Mensagem

O fluxo atual funciona através da integração:

```text
Usuário
   │
   ▼
Formulário Contact.tsx
   │
   │ POST /api/contact
   ▼
ASP.NET Core API
   │
   ▼
Validação do DTO
   │
   ▼
Entity Framework Core
   │
   ▼
SQLite
```

O frontend possui:

* Validação básica dos campos
* Estado de envio
* Indicador de carregamento
* Mensagem de sucesso
* Mensagem de erro
* Tratamento de falha de conexão
* Limpeza automática do formulário após sucesso

A integração frontend/backend foi validada com sucesso em ambiente local.

---

### Footer

Rodapé com:

* Identidade DevClub
* Navegação interna
* Links para as principais seções
* Informações de copyright

---

### Navegação

O Header possui um menu fullscreen animado com navegação para:

* Início
* Próximo nível
* Jornada
* Começar

---

# Roadmap

## Fundação do Projeto

* [x] Criação do repositório
* [x] Inicialização do projeto Next.js
* [x] Configuração do TypeScript
* [x] Configuração do Tailwind CSS
* [x] Configuração das dependências de animação
* [x] Documentação da direção criativa
* [x] README do projeto
* [x] Roadmap inicial

---

## Design System

* [x] Identidade visual
* [x] Paleta de cores
* [x] Sistema tipográfico
* [x] Espaçamento e layout global
* [x] Scrollbar personalizada
* [x] Estilo de seleção de texto
* [x] Fundamentos responsivos

---

## Experiência Principal

* [ ] Preloader
* [x] Header interativo
* [x] Hero imersivo
* [x] Storytelling baseado em scroll
* [ ] Smooth scrolling
* [ ] Cursor personalizado / interações avançadas com ponteiro
* [x] Interações magnéticas
* [ ] Evolução visual do Hero
* [ ] Efeito de profundidade e movimento inspirado em experiências modernas de tecnologia
* [ ] Refinamento das transições entre seções

---

## Seções de Conteúdo

* [x] O Desafio
* [x] Sobre o DevClub
* [x] Jornada de Aprendizado
* [ ] Formações
* [ ] Histórias de Alunos
* [ ] Empresas
* [ ] Tutores
* [x] Next Level
* [x] CTA Final
* [x] Seção de Contato
* [x] Footer

---

## Área do Aluno

* [ ] Definição da arquitetura da Área do Aluno
* [ ] Modelagem de usuário/aluno
* [ ] Cadastro de aluno
* [ ] Autenticação
* [ ] Login
* [ ] JWT
* [ ] Refresh Token
* [ ] Proteção de endpoints
* [ ] Área autenticada do aluno
* [ ] Perfil do aluno
* [ ] Dashboard do aluno
* [ ] Logout
* [ ] Tratamento de autorização
* [ ] Integração frontend/backend

---

## Cursos

* [ ] Modelagem de cursos
* [ ] Modelagem de módulos
* [ ] Modelagem de aulas
* [ ] CRUD de cursos
* [ ] CRUD de módulos
* [ ] CRUD de aulas
* [ ] Endpoint de listagem de cursos
* [ ] Endpoint de detalhes do curso
* [ ] Inscrição do aluno em cursos
* [ ] Controle de progresso
* [ ] Registro de aulas concluídas
* [ ] Dashboard de cursos do aluno
* [ ] Persistência de progresso
* [ ] Integração frontend/backend

---

## Backend & Full Stack

### Fundação

* [x] Criação da ASP.NET Core Web API
* [x] Configuração inicial do backend
* [x] Entity Framework Core
* [x] Banco de dados SQLite
* [x] Configuração do DbContext
* [x] Migration inicial

### Contato

* [x] Model de mensagens de contato
* [x] DTO de criação de mensagem
* [x] Validação de requisição
* [x] Endpoint de contato
* [x] Persistência de mensagens
* [x] Integração entre frontend e backend
* [x] Tratamento básico de erros

### Área do Aluno

* [ ] Entidades de usuário/aluno
* [ ] Autenticação
* [ ] Autorização
* [ ] JWT
* [ ] Refresh Token
* [ ] Proteção de endpoints
* [ ] Perfil do aluno
* [ ] Dashboard

### Cursos

* [ ] Entidade Course
* [ ] Entidade Module
* [ ] Entidade Lesson
* [ ] Entidade Enrollment
* [ ] Entidade LessonProgress
* [ ] Relacionamentos entre entidades
* [ ] Migrations
* [ ] CRUD de cursos
* [ ] CRUD de módulos
* [ ] CRUD de aulas
* [ ] Inscrição em cursos
* [ ] Progresso do aluno
* [ ] Endpoints protegidos

### Segurança e Produção

* [ ] Rate limiting
* [ ] CORS para produção
* [ ] Configuração de variáveis de ambiente
* [ ] Connection string de produção
* [ ] Configuração da API para produção
* [ ] Tratamento global de exceções
* [ ] Logging estruturado
* [ ] Health checks
* [ ] Documentação da API

---

## Animações e Microinterações

* [x] Animações de entrada
* [x] Animações de revelação durante o scroll
* [ ] Animações avançadas de texto
* [x] Interações de hover
* [x] Botões magnéticos
* [ ] Transições de imagens
* [ ] Transições avançadas entre seções
* [ ] Cards interativos
* [ ] Efeitos avançados no Hero
* [ ] Microinterações na Área do Aluno
* [ ] Microinterações na experiência de Cursos

---

## Qualidade

* [ ] Revisão de responsividade mobile
* [ ] Revisão de responsividade tablet
* [ ] Otimização desktop
* [ ] Revisão de acessibilidade
* [ ] Otimização de performance
* [x] Metadados básicos de SEO
* [ ] Metadados Open Graph
* [ ] Configuração de sitemap
* [ ] Configuração de robots.txt
* [ ] Análise Lighthouse
* [ ] Testes cross-browser
* [ ] Testes da API
* [ ] Testes de integração
* [ ] Revisão de segurança
* [ ] Revisão final da experiência do usuário

---

## Deploy

* [x] Build de produção do frontend validado
* [ ] Configuração do VPS
* [ ] Configuração do Nginx
* [ ] Certificado SSL
* [ ] Configuração do subdomínio
* [ ] Deploy do backend
* [ ] Deploy do frontend
* [ ] Configuração do banco de dados de produção
* [ ] Configuração de variáveis de ambiente
* [ ] Integração frontend/backend em produção
* [ ] Testes de API em produção
* [ ] QA final
* [ ] Teste completo do fluxo de contato
* [ ] Teste completo de autenticação
* [ ] Teste completo da Área do Aluno
* [ ] Teste completo dos Cursos
* [ ] Monitoramento inicial
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
* JWT
* OpenAPI / Swagger

---

## Arquitetura

A aplicação utiliza uma arquitetura baseada em componentes no frontend e uma API REST separada no backend, buscando separar responsabilidades e facilitar a manutenção e evolução do projeto.

A estrutura atual está organizada em:

```text
devclub-concurso/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Challenge.tsx
│   │   ├── NextLevel.tsx
│   │   ├── AboutDevClub.tsx
│   │   ├── Journey.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── GridBackground.tsx
│       ├── InteractiveGlow.tsx
│       └── MagneticButton.tsx
│
├── public/
│
├── docs/
│   └── creative-direction.md
│
└── backend/
    └── DevClub.Api/
        ├── Controllers/
        │   └── ContactController.cs
        │
        ├── Data/
        │   └── AppDbContext.cs
        │
        ├── DTOs/
        │   └── CreateContactMessageRequest.cs
        │
        ├── Migrations/
        │
        ├── Models/
        │   └── ContactMessage.cs
        │
        ├── Program.cs
        ├── appsettings.json
        └── DevClub.Api.csproj
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
* Persistência de dados
* Segurança
* Evolução incremental

A arquitetura Full Stack atual é:

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
             Entity Framework Core
                       │
                       ▼
                    SQLite
```

A arquitetura futura, com autenticação e Área do Aluno, será expandida para:

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
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
        Autenticação                  Cursos
          JWT                         Matrículas
              │                       Progresso
              │                           │
              └─────────────┬─────────────┘
                            │
                            ▼
                  Entity Framework Core
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
* Interactive Hero
* Immersive Storytelling

A proposta é criar uma experiência que se aproxime mais de uma narrativa digital interativa do que de uma landing page institucional tradicional.

A evolução visual do Hero será uma das próximas etapas prioritárias, buscando adicionar maior sensação de profundidade, movimento e interação sem comprometer performance, acessibilidade ou identidade visual.

---

## Direção Criativa

A direção criativa do projeto está documentada em:

```text
docs/creative-direction.md
```

O documento apresenta os principais conceitos visuais e narrativos utilizados como base para o desenvolvimento da experiência.

---

## Status

🚧 **Full Stack em desenvolvimento — Integração de contato concluída**

O projeto atualmente conta com:

* Hero imersivo
* Design system
* Header interativo
* Navegação fullscreen
* Seção Next Level
* Seção Challenge
* Seção About DevClub
* Jornada de aprendizado
* Animações de entrada
* Animações de scroll reveal
* Interações de hover
* Interações magnéticas
* CTA final
* Footer
* Seção de contato
* API REST com ASP.NET Core
* Entity Framework Core
* SQLite
* Migration inicial
* Model de mensagens de contato
* DTO de requisição
* Endpoint de contato
* Persistência de mensagens
* Integração frontend/backend
* Feedback visual de sucesso e erro
* Metadados básicos de SEO
* Build de produção do frontend validado

O fluxo de contato foi implementado e validado com sucesso em ambiente local:

```text
Next.js
   │
   │ POST /api/contact
   ▼
ASP.NET Core
   │
   ▼
Entity Framework Core
   │
   ▼
SQLite
```

A próxima etapa prioritária será a implementação da **Área do Aluno**, incluindo autenticação, autorização e estrutura de usuário.

Em seguida, será desenvolvida a estrutura de **Cursos**, incluindo cursos, módulos, aulas, inscrições e acompanhamento de progresso.

Após a conclusão das principais funcionalidades do backend, o frontend será refinado com uma evolução visual do Hero, novas interações e ajustes finais de experiência.

Por fim, serão realizadas as etapas de qualidade, segurança, QA e deploy em produção.

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

### Execute o frontend

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

### Execute o backend

Em outro terminal:

```bash
cd backend/DevClub.Api
dotnet run
```

A API será disponibilizada localmente em:

```text
http://localhost:5113
```

O endpoint de contato utilizado atualmente é:

```text
POST http://localhost:5113/api/contact
```

### Execute o build de produção

```bash
npm run build
```

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
               │
               ▼
        Entity Framework Core
               │
               ▼
             SQLite
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
feat: add student authentication
feat: add student area
feat: add course management
feat: add course enrollment
feat: add student course progress
feat: enhance hero experience
feat: add advanced motion interactions
perf: optimize animations and images
fix: improve responsive layout
fix: improve API error handling
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

In addition to the frontend experience, the project has been expanded into a **Full Stack architecture**, using a **Next.js** frontend, an **ASP.NET Core REST API**, **Entity Framework Core** for data persistence, and **SQLite** as the database.

The backend currently supports contact message submission and persistence through an integrated frontend form.

The next stages include building a **Student Area**, **Course management**, authentication, authorization, and a refined immersive frontend experience.

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
* Full Stack integration
* Architectural organization
* Data persistence
* User experience

Visual experience and interactions are fundamental priorities throughout the development process.

In addition to the visual experience, the project demonstrates **Full Stack development skills** by connecting a modern Next.js frontend to a REST API built with ASP.NET Core.

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

The next iteration of the Hero will focus on increasing depth, movement, and immersion, inspired by modern technology and education platforms while maintaining an original visual identity.

---

### Next Level

A narrative section presenting the user's evolution through:

```text
Learn
   ↓
Build
   ↓
Evolve
```

---

### Journey

A visual journey structured around four stages:

```text
01 — Foundations
02 — Projects
03 — Challenges
04 — Next Level
```

The section uses scroll reveal animations and a visual timeline to represent progression.

---

### Final CTA

A final call to action reinforcing the central concept:

> **Your next level starts now.**

The section directs users toward the contact experience and reinforces the project's interactive nature.

---

### Contact

A contact section fully integrated with the backend.

The form allows users to submit:

* Name
* Email
* Message

The current flow is:

```text
User
   │
   ▼
Contact.tsx
   │
   │ POST /api/contact
   ▼
ASP.NET Core API
   │
   ▼
DTO Validation
   │
   ▼
Entity Framework Core
   │
   ▼
SQLite
```

The frontend includes:

* Basic field validation
* Submission state
* Loading indicator
* Success feedback
* Error feedback
* Connection failure handling
* Automatic form reset after successful submission

The frontend/backend integration has been successfully validated in the local development environment.

---

### Footer

A footer containing:

* DevClub identity
* Internal navigation
* Main section links
* Copyright information

---

### Navigation

The Header includes an animated fullscreen menu with navigation to:

* Home
* Next Level
* Journey
* Get Started

---

# Roadmap

## Project Foundation

* [x] Repository creation
* [x] Next.js project initialization
* [x] TypeScript configuration
* [x] Tailwind CSS setup
* [x] Animation dependencies setup
* [x] Creative direction documentation
* [x] Project README
* [x] Initial roadmap

---

## Design System

* [x] Visual identity
* [x] Color palette
* [x] Typography system
* [x] Global spacing and layout
* [x] Custom scrollbar
* [x] Selection styling
* [x] Responsive foundations

---

## Core Experience

* [ ] Preloader
* [x] Interactive header
* [x] Immersive hero section
* [x] Scroll-based storytelling
* [ ] Smooth scrolling
* [ ] Custom cursor / advanced pointer interactions
* [x] Magnetic interactions
* [ ] Hero visual evolution
* [ ] Depth and motion effects inspired by modern technology experiences
* [ ] Refined transitions between sections

---

## Content Sections

* [x] The Challenge
* [x] About DevClub
* [x] Learning Journey
* [ ] Formations
* [ ] Student Stories
* [ ] Companies
* [ ] Mentors
* [x] Next Level
* [x] Final CTA
* [x] Contact Section
* [x] Footer

---

## Student Area

* [ ] Student Area architecture
* [ ] User/student modeling
* [ ] Student registration
* [ ] Authentication
* [ ] Login
* [ ] JWT
* [ ] Refresh Token
* [ ] Endpoint protection
* [ ] Authenticated student area
* [ ] Student profile
* [ ] Student dashboard
* [ ] Logout
* [ ] Authorization handling
* [ ] Frontend/backend integration

---

## Courses

* [ ] Course modeling
* [ ] Module modeling
* [ ] Lesson modeling
* [ ] Course CRUD
* [ ] Module CRUD
* [ ] Lesson CRUD
* [ ] Course listing endpoint
* [ ] Course details endpoint
* [ ] Student course enrollment
* [ ] Progress tracking
* [ ] Completed lesson tracking
* [ ] Student course dashboard
* [ ] Progress persistence
* [ ] Frontend/backend integration

---

## Backend & Full Stack

### Foundation

* [x] ASP.NET Core Web API creation
* [x] Backend initial configuration
* [x] Entity Framework Core
* [x] SQLite database
* [x] DbContext configuration
* [x] Initial migration

### Contact

* [x] Contact message model
* [x] Create message DTO
* [x] Request validation
* [x] Contact API endpoint
* [x] Message persistence
* [x] Frontend/backend integration
* [x] Basic error handling

### Student Area

* [ ] User/student entities
* [ ] Authentication
* [ ] Authorization
* [ ] JWT
* [ ] Refresh Token
* [ ] Endpoint protection
* [ ] Student profile
* [ ] Student dashboard

### Courses

* [ ] Course entity
* [ ] Module entity
* [ ] Lesson entity
* [ ] Enrollment entity
* [ ] LessonProgress entity
* [ ] Entity relationships
* [ ] Migrations
* [ ] Course CRUD
* [ ] Module CRUD
* [ ] Lesson CRUD
* [ ] Course enrollment
* [ ] Student progress
* [ ] Protected endpoints

### Security & Production

* [ ] Rate limiting
* [ ] Production CORS
* [ ] Environment variables
* [ ] Production connection string
* [ ] Production API configuration
* [ ] Global exception handling
* [ ] Structured logging
* [ ] Health checks
* [ ] API documentation

---

## Motion & Microinteractions

* [x] Page entrance animations
* [x] Scroll reveal animations
* [ ] Advanced text animations
* [x] Hover interactions
* [x] Magnetic buttons
* [ ] Image transitions
* [ ] Advanced section transitions
* [ ] Interactive cards
* [ ] Advanced Hero effects
* [ ] Student Area microinteractions
* [ ] Course experience microinteractions

---

## Quality

* [ ] Mobile responsiveness review
* [ ] Tablet responsiveness review
* [ ] Desktop optimization
* [ ] Accessibility review
* [ ] Performance optimization
* [x] Basic SEO metadata
* [ ] Open Graph metadata
* [ ] Sitemap configuration
* [ ] robots.txt configuration
* [ ] Lighthouse review
* [ ] Cross-browser testing
* [ ] API testing
* [ ] Integration testing
* [ ] Security review
* [ ] Final user experience review

---

## Deployment

* [x] Frontend production build validated
* [ ] VPS configuration
* [ ] Nginx configuration
* [ ] SSL certificate
* [ ] Subdomain configuration
* [ ] Backend deployment
* [ ] Frontend deployment
* [ ] Production database configuration
* [ ] Environment variable configuration
* [ ] Production frontend/backend integration
* [ ] Production API testing
* [ ] Final QA
* [ ] Complete contact flow testing
* [ ] Complete authentication testing
* [ ] Complete Student Area testing
* [ ] Complete Course testing
* [ ] Initial monitoring
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
* JWT
* OpenAPI / Swagger

---

## Architecture

The application uses a component-based architecture on the frontend and a separate REST API on the backend, focusing on separation of concerns, maintainability, and scalability.

The current structure is organized as:

```text
devclub-concurso/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Challenge.tsx
│   │   ├── NextLevel.tsx
│   │   ├── AboutDevClub.tsx
│   │   ├── Journey.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── GridBackground.tsx
│       ├── InteractiveGlow.tsx
│       └── MagneticButton.tsx
│
├── public/
│
├── docs/
│   └── creative-direction.md
│
└── backend/
    └── DevClub.Api/
        ├── Controllers/
        │   └── ContactController.cs
        │
        ├── Data/
        │   └── AppDbContext.cs
        │
        ├── DTOs/
        │   └── CreateContactMessageRequest.cs
        │
        ├── Migrations/
        │
        ├── Models/
        │   └── ContactMessage.cs
        │
        ├── Program.cs
        ├── appsettings.json
        └── DevClub.Api.csproj
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
* Data persistence
* Security
* Incremental evolution

The current Full Stack architecture is:

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
             Entity Framework Core
                     │
                     ▼
                   SQLite
```

The future architecture, with authentication and the Student Area, will evolve into:

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
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
       Authentication                 Courses
            JWT                      Enrollment
             │                       Progress
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                 Entity Framework Core
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
* Interactive Hero
* Immersive Storytelling

The goal is to create an experience closer to an interactive digital narrative than a traditional institutional landing page.

The next Hero iteration will focus on adding greater depth, movement, and interaction while preserving performance, accessibility, and the project's visual identity.

---

## Creative Direction

The project's creative direction is documented in:

```text
docs/creative-direction.md
```

The document presents the main visual and narrative concepts used as the foundation for the experience.

---

## Status

🚧 **Full Stack in development — Contact integration completed**

The project currently includes:

* Immersive hero
* Design system
* Interactive header
* Fullscreen navigation
* Next Level section
* Challenge section
* About DevClub section
* Learning journey
* Entrance animations
* Scroll reveal animations
* Hover interactions
* Magnetic interactions
* Final CTA
* Footer
* Contact section
* ASP.NET Core REST API
* Entity Framework Core
* SQLite
* Initial migration
* Contact message model
* Request DTO
* Contact endpoint
* Message persistence
* Frontend/backend integration
* Success and error feedback
* Basic SEO metadata
* Validated frontend production build

The contact flow has been successfully implemented and validated locally:

```text
Next.js
   │
   │ POST /api/contact
   ▼
ASP.NET Core
   │
   ▼
Entity Framework Core
   │
   ▼
SQLite
```

The next priority is implementing the **Student Area**, including authentication, authorization, and user structure.

The following stage will introduce the **Courses** structure, including courses, modules, lessons, enrollment, and student progress tracking.

After the main backend features are completed, the frontend will be refined with an evolved Hero experience, new interactions, and final UX improvements.

Finally, the project will move through quality assurance, security review, and production deployment.

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

### Start the frontend

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Start the backend

In another terminal:

```bash
cd backend/DevClub.Api
dotnet run
```

The API will be available locally at:

```text
http://localhost:5113
```

The current contact endpoint is:

```text
POST http://localhost:5113/api/contact
```

### Run the production build

```bash
npm run build
```

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
               │
               ▼
        Entity Framework Core
               │
               ▼
             SQLite
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
feat: add student authentication
feat: add student area
feat: add course management
feat: add course enrollment
feat: add student course progress
feat: enhance hero experience
feat: add advanced motion interactions
perf: optimize animations and images
fix: improve responsive layout
fix: improve API error handling
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
