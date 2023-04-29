# Aplicativo de Previsão do Tempo

Este repositório contém o código-fonte do Aplicativo de Previsão do Tempo, que foi criado como parte do processo seletivo para pessoa desenvolvedora mobile no projeto do NEES (Núcleo de Excelência em Tecnologias Sociais).

O aplicativo foi desenvolvido com o Expo. Ele se utiliza de uma [API](https://api.hgbrasil.com/weather) e de dados mock para popular conteúdo. O design foi disponibilizado no [Figma Community](https://www.figma.com/community/file/1158928016905524023) e foi criado pela [@becabelin](https://www.figma.com/@becabelin).

![demo](https://media.giphy.com/media/OG4jLM0tYsLxWgx0E2/giphy.gif)

## Índice

- [Aplicativo de Previsão do Tempo](#aplicativo-de-previsão-do-tempo)
  - [Índice](#índice)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Dependências](#dependências)
  - [Contribuindo](#contribuindo)

## Instalação

1. Certifique-se de ter [Node.js](https://nodejs.org/) e [Expo CLI](https://docs.expo.io/workflow/expo-cli/) instalados em seu sistema.
2. Clone o repositório:

```bash
git clone https://github.com/Iannery/mobile-weather-app.git
```

3. Mude para o diretório do projeto:

```bash
cd mobile-weather-app
```

4. Instale as dependências necessárias:

```bash
yarn install
```

## Uso

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
yarn start
```

Para executar o aplicativo no Android, iOS ou web, use os respectivos comandos:

```bash
yarn android
yarn ios
yarn web
```

## Dependências

O aplicativo utiliza as seguintes dependências:

- @expo-google-fonts/alegreya-sans
- @expo/vector-icons
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/stack
- axios
- expo
- expo-font
- expo-linear-gradient
- expo-splash-screen
- expo-status-bar
- jotai
- react
- react-native
- react-native-gesture-handler
- react-native-modal
- react-native-safe-area-context
- react-native-svg
- react-native-svg-transformer

Para desenvolvimento, o aplicativo utiliza:

- @babel/core
- @react-native-community/eslint-config
- eslint
- eslint-config-prettier
- eslint-plugin-ft-flow
- prettier

## Contribuindo

Se você deseja contribuir para este projeto, faça um fork do repositório e envie um pull request.
