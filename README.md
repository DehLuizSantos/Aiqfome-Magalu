# 🍔 Aiqfome Magalu - App de pedidos

Projeto front-end desenvolvido como desafio técnico para a empresa AiqFome. Essa aplicação simula uma experiência de pedido de comida com seleção de produtos, customizações dinâmicas, cálculo automático de total e gerenciamento de estado global com persistência no storage.


[Acesse aqui uma versão de homologação](https://aiqfome-magalu.vercel.app/)


![Next.js 15](https://img.shields.io/badge/Next.js-15.3.3-000000?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-000000?logo=zustand)

## 🚀 Funcionalidades

Exigidas:

-  Listar produtos por categoria (item: título, imagem, preço e review). ✅
-  Adicionar produtos ao ticket ✅
-  Visualizar o ticket ✅
-  Persistir os dados localmente no navegador ✅

Extras: 
-  Filtrar restaurantes por loja ou culinária ✅
-  Validações máximas e minimas de custumizações nos produtos ✅
-  Notificações de validação e sucesso ✅
-  Dados mockados com simução de requisição ✅
-  Versão de homologação disponivel na versel ✅


---

## 📋 Requisitos

- Node.js 18.x ou superior
- NPM 10.x


## 🛠️ Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/DehLuizSantos/Aiqfome-Magalu
cd Aiqfome-Magalu
Instale as dependências:


npm install


npm run dev
```
---
### 📂 Estrutura do Projeto
#### Arquitetura utilizada: **Atomic Design**
```bash
TESTIQFOME/
├── src/
│   ├── app/  
│   │   └── page # lista de restaurantes
│   │   ├── layoutRoute
│   │   │ └── ticket/
│   │   │        └── [id]/
│   │   │           └── page # ticket de determinado restaurante
│   │   └── restaurante/
│   │   │       └── [id]/
│   │   │           └── page # restaurante selecionado 
│   │   │                  └── [productId] 
│   │   │                      └── page # produto selecionado           
│   ├── components/
│   │    └── atomos   # São os elementos básicos da interface, como botões, ícones, campos de texto, etc.
│   │    └── moleculas # São grupos de átomos que funcionam juntos, como um campo de busca (com campo de texto, botão de busca e ícone).
│   │    └── organismos # São componentes maiores, formados pela combinação de moléculas e outros organismos. Por exemplo, um cabeçalho de site que inclui um logo, menu de navegação e │barrade pesquisa.
│   │    └── templates # São estruturas que definem o layout das páginas, utilizando organismos e definindo a disposição dos elementos. Servem como estrutura esquelética da página.
│   │           
│   └── store/ # Armazenamento dos estados globais
├── .env
├── package.json
└── tsconfig.json

```
---

## 💬 Considerações Finais

- Todos os requisitos exigidos foram plenamente atendidos.
- O foco esteve em proporcionar uma experiência ágil, com carregamento eficiente e código organizado.
- As validações de customização respeitam as restrições de quantidade mínima e máxima.
- A arquitetura foi projetada para ser escalável, com responsabilidades bem definidas e tipagem robusta em TypeScript.

---

📫 Em caso de dúvidas, estou à disposição!

Desenvolvido por [André Luiz Santos](https://portifolio-next14-five.vercel.app/)
