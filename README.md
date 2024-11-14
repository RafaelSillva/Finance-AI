## Finance AI
Finance AI é um sistema de controle financeiro voltado para o dia a dia de empresas e freelancers. Com funcionalidades de monitoramento financeiro, visualizações de gráficos e integração com serviços externos, o Finance AI oferece uma experiência fácil de usar e poderosa para pequenos negócios.

## Funcionalidades:
Gerenciamento de finanças com visualizações intuitivas de despesas e receitas
Suporte para transações ilimitadas e categorização de gastos
Integração com o Stripe para pagamento de assinaturas
Autenticação e gestão de usuários com Clerk
Respostas automatizadas e suporte via API do ChatGPT
Painéis gráficos interativos para análise de transações e despesas.

## Fotos:
<image src="https://github.com/RafaelSillva/Finance-AI/blob/main/public/Captura%20de%20tela%202024-11-13%20230434.png"/>
<image src="https://github.com/RafaelSillva/Finance-AI/blob/main/public/Captura%20de%20tela%202024-11-13%20230313.png"/>

## Tecnologias Utilizadas:
Next.js – Framework principal do projeto, utilizado para renderização SSR e construção de API.
React Hooks – Para manipulação de estado e lógica de componentes.
TypeScript – Tipagem estática para maior segurança e robustez no código.
Tailwind CSS – Estilização rápida e customizável com classes utilitárias.
shadcn – Biblioteca de componentes estilizados.
Prisma – ORM para modelagem e manipulação de banco de dados.
NeonDB – Banco de dados escalável para armazenamento das transações.
Docker – Para containerização e fácil deploy do projeto.
Stripe – Integração para pagamentos de assinatura.
Clerk – Gerenciamento de autenticação e sessão de usuários.
API do ChatGPT – Para interações automatizadas e suporte inteligente.
Chart.js – Criação de gráficos de análise financeira.
ESLint & Prettier – Ferramentas para padronização e formatação de código.

## Pré-requisitos:
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:
Node.js
Docker
NeonDB (ou qualquer banco de dados compatível).

## Instalação:
Clone este repositório:
bash
Copiar código
git clone https://github.com/RafaelSillva/Finance-AI.git
cd finance-ai.

## Instale as dependências:
bash
Copiar código
npm install

## Configure o Prisma e o banco de dados:
Edite o arquivo .env com a URL de conexão do NeonDB.

## Execute a migração do Prisma:
bash
Copiar código
npx prisma migrate dev.

## Configure as variáveis de ambiente:
STRIPE_API_KEY: Chave da API do Stripe para transações de pagamento.
CLERK_API_KEY: Chave de autenticação do Clerk para gerenciamento de usuários.
OPENAI_API_KEY: Chave da API do ChatGPT para interação de suporte.

## Inicie o ambiente de desenvolvimento:
bash
Copiar código
npm run dev.

## Uso com Docker

## Para executar o projeto com Docker:
bash
Copiar código
docker-compose up -d

## Scripts Disponíveis:
npm run dev - Inicia o ambiente de desenvolvimento
npm run build - Compila o projeto para produção
npm run lint - Analisa o código com ESLint
npm run format - Formata o código com Prettier

## Contribuição:
Contribuições são bem-vindas! Siga as etapas abaixo:
Faça um fork do projeto.
Crie uma nova branch: git checkout -b minha-nova-feature.
Faça suas alterações e confirme os commits: git commit -m 'Minha nova feature'.
Envie para o branch original: git push origin minha-nova-feature.
Crie um pull request.

## Licença
Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
Esse README oferece uma visão geral do projeto e as instruções necessárias para configuração e uso. Adapte as URLs e comandos de acordo com seu repositório e ambiente de desenvolvimento.
