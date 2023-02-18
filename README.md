![capa-rentx](https://user-images.githubusercontent.com/41626780/219878215-6cb2f78a-7ead-425a-85a7-c0228e33b6e1.png)

# Rentx
Aplicação web para alugar, listar e filtrar carros, além disso também podemos cadastrar usuários, recuperar senha e fazer login com autenticação via JWT 

## Iniciando a aplicação
<p>Por enquanto estou utilizando json-server para fake api</p>
<p>caso queira rodar em outra porta a api, pode mudar a flag do json server e no .env a variavel de ambiente.</p>

```bash
# para rodar a fake api
json-server db.json --port 3004
# para instalar dependencias do projeto
yarn install
# para rodar em ambiente de desenvolvimento
yarn dev

```

## Stack

- Reactjs
- React Hooks
- React-hook-form
- Zod
- Typescript
- Styled-components
- Radix-ui para componentes de acessibilidade como tooltips, button e modals etc.
- Ant-design para alguns componentes como calendário e carossel de imagens
- Vite
- Vitest
- Testing-library


## Features

- User authentication 
- Create new user
- Profile Update
- List my rental cars
- List cars avaiables
- Rent cars
- And more...
