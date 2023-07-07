# Valorant App


Um aplicativo em React Native que utiliza os recursos de useEffect, useState, StyleSheet, Flatlist, ActivityIndicator e Axios para integrar a API https://valorant-api.com/v1/agents e obter informações sobre os agentes do jogo Valorant.

## Descrição
Este é um aplicativo desenvolvido em React Native que permite aos usuários explorar informações detalhadas sobre os agentes do jogo Valorant. Utilizando os recursos do React Native, como useEffect e useState, o app faz chamadas à API do Valorant para obter os dados dos agentes. O StyleSheet é utilizado para estilizar os componentes, garantindo uma interface atraente e responsiva. A Flatlist é utilizada para renderizar a lista de agentes de forma eficiente, lidando com grandes quantidades de dados. O componente ActivityIndicator é exibido durante o carregamento dos dados, proporcionando uma experiência melhor para o usuário. O Axios é responsável por realizar as requisições HTTP à API.

## Recursos Utilizados
1. useEffect: utilizado para executar efeitos colaterais, como chamadas à API, em momentos específicos do ciclo de vida do aplicativo.
2. useState: utilizado para gerenciar o estado do aplicativo, permitindo a atualização reativa dos componentes.
3. StyleSheet: utilizado para estilizar os componentes do aplicativo, definindo cores, tamanhos e margens.
4. Flatlist: utilizado para renderizar a lista de agentes de forma eficiente, proporcionando uma experiência de rolagem suave e exibindo apenas os elementos visíveis na tela.
5. ActivityIndicator: exibe um indicador de atividade durante o carregamento dos dados, melhorando a experiência do usuário.
6. Axios: biblioteca para fazer chamadas HTTP à API, permitindo a obtenção dos dados dos agentes do Valorant.

## Como Executar o App
Clone este repositório em sua máquina local.
Certifique-se de ter o ambiente de desenvolvimento React Native configurado.
No terminal, navegue até o diretório do projeto e execute o comando npm install para instalar as dependências.
Em seguida, execute o comando npx react-native run-android para executar o app no emulador Android ou npx react-native run-ios para o emulador iOS.
