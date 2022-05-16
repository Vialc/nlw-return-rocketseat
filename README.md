# NLW Return Rocketseat

<div align="center">
<img src="https://github.com/Vialc/nlw-return-rocketseat/blob/main/src/assets/logo.svg" width="200" height="100" align="center">
<h1>Indo além do Feedget</h1>
</div>
<div></div>

As modificações no projeto ocorreram no backend e no front. Para ver as mudanças no backend acesse
Repositório do Backend : https://github.com/Vialc/study_count_server


## Disclaimer:

Esse projeto é uma extensão do NLW da Rocketseat. Durante o evento, desenvolvemos um widget de feedbacks nomeado como Feedget. 
Ao final do evento, a aplicação frontend tinha as seguintes funcionalidades:

- Exibição de um widget na parte inferior direita da página contendo:
  - Formulário para selecionar um tipo de feedback
  - Botão de Printscreen para tirar um print da tela e enviar essa imagem para o backend.
  - botão de envio de feedback;
- Integração com backend através de requisições HTTP utilizando Axios.

Esse projeto abordou temas como utilização de componentes com assecibilidade e uso do framework Tailwind que acelera demais o tempo de desenvolvimento.
Além de diversas funcionalidades que o ReactJS proporciona.

Ao final do evento foi proposto que espandíssemos a aplicação, adicionando novas funcionalidades, tanto no backend quanto no frontend.

# Milha Extra NLW - Implementações realizadas:

Com o objetivo de explorar o máximo possível os temas abordados eu decidi, a partir do Feedget, criar uma plataforma de gerenciamento de estudos.

## O Study Count.

<div align="center">
<img src="https://github.com/Vialc/nlw-return-rocketseat/blob/main/src/assets/telas.png"  align="center">

</div>
<div></div>

As funcionalidades no frontend adicionadas foram:

- Fluxo de cadastro e login de usuários;
- Possibilidade de alternar entre Tema light/dark;
- Adição de um menu de navegação lateral expansível para acesso a outras funções
- Modal de contagem onde é possível selecionar uma das matérias cadastradas, ligar/pausar o contador e registrar o tempo no banco de dados
- Modal para cadastro de Matérias
- Área de exibição das matérias cadastradas e o respectivo tempo acumulado em cada uma.
- Paginação da área de matérias.
- Responsividade
- Botão sair para logout da plataforma
- Possibilidade de cadastrar até 12 matérias por usuário.

## Stacks utilizadas:

- Tailwind
- Headless UI - Biblioteca de acessibilidade
- ReactJS
- Context API
- React Router Dom
- Phosphor - Biblioteca de ícones
- Prototipagem de telas no Figma
- Typescript
