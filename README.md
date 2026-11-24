# 🏎️ Lamborghini Garage App - React Native & Expo

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.72.6-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-~49.0.15-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.6.2-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![DIO](https://img.shields.io/badge/DIO-Desafio_de_Projeto-orange?style=for-the-badge)

<p>Aplicativo mobile desenvolvido em <strong>React Native</strong> com <strong>Expo</strong> e <strong>TypeScript</strong> para catálogo e exibição de modelos lendários da Lamborghini, consumindo API REST com cache e interface futurista estilo viewfinder automotivo.</p>

[Ver Repositório Original](https://github.com/digitalinnovationone/trilha-react-native-expo-lamborghini-app) • [Fork do Projeto](https://github.com/hSchwenke/trilha-react-native-expo-lamborghini-app)

</div>

---

## 🎯 Sobre o Desafio (DIO)

Este projeto foi construído a partir do desafio da **Digital Innovation One (DIO)** na trilha de React Native com Expo, cujo foco é:
- Explorar a prática de consumir APIs REST em aplicativos React Native.
- Organizar e modularizar código de forma escalável e com fácil manutenção.
- Construir componentes reutilizáveis e com forte separação de responsabilidades.
- Versionar a solução com Git e GitHub em formato de portfólio profissional.

---

## 🚀 Melhorias e Diferenciais Implementados

Em relação à versão base do laboratório, foram implementadas as seguintes evoluções arquiteturais e de experiência do usuário (UX):

- ⚡ **Otimização de Consumo da API & Cache em Memória**:
  - Implementado cache em memória no módulo `src/api/getCars.ts` (`fetchCarsList` e `fetchCarById`), eliminando requisições repetidas a cada navegação entre veículos.
  - Desacoplamento da camada de API do gerenciamento de estado do React (`useState`), permitindo que a camada de dados seja pura e reutilizável.
- 🔄 **Navegação Dinâmica & Cíclica**:
  - Removido o limite fixo hardcoded (de 1 a 10). A navegação é baseada no tamanho real da lista retornada pela API.
  - Botões customizados (`TouchableOpacity`) com ícones do `@expo/vector-icons` (`AntDesign`), com navegação contínua/cíclica e indicador de posição (`X de Y`).
- 🏷️ **Exibição Completa dos Atributos da API**:
  - Renderização do ano de lançamento (`releaseYear`) com um badge estilizado em ciano (`#01A6B3`), que não estava presente na interface base.
- ⏳ **Feedback Visual com Estados de Loading & Erro**:
  - Adicionado `ActivityIndicator` customizado tanto no carregamento inicial da lista quanto no carregamento das imagens dos carros (`onLoadStart` / `onLoadEnd`).
  - Tratamento de erro de rede com mensagem informativa e botão para **Tentar Novamente**.
- 🛒 **Interatividade no BuyButton**:
  - O botão de compra agora exibe feedback tátil (`activeOpacity`) e aciona um diálogo nativo (`Alert.alert`) confirmando o interesse no modelo selecionado, com detalhes de nome, ano e valor.
- 📱 **Layout Responsivo & Dark Theme Unificado**:
  - Suporte responsivo para a moldura da câmera (`maxWidth` e `maxHeight`), evitando overflow em telas de diferentes proporções.
  - Configuração do `<StatusBar style="light" />` e sincronização do fundo escuro (`#1E1E20`) no container principal `App.tsx`.
- 🛡️ **Tipagem TypeScript Estrita**:
  - 100% tipado com TypeScript, sem avisos de compilação (`npx tsc --noEmit` zerado).

---

## 🔗 Endpoints & Recursos da API

- **API de Dados (JSON)**:  
  `https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json`
- **Imagens dos Veículos (Assets)**:  
  `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/{id}.png`

### Estrutura de Resposta da API:
```json
{
  "cars": [
    {
      "id": 1,
      "carName": "2015 Lamborghini Huracán GT3",
      "releaseYear": 2015,
      "price": "$450,000"
    }
  ]
}
```

---

## 📂 Estrutura do Projeto

```
trilha-react-native-expo-lamborghini-app/
├── assets/                  # Logos, ícones, splash screen
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── logo.png
│   └── splash.png
├── src/
│   ├── api/
│   │   └── getCars.ts       # Camada de requisições HTTP (Axios + Cache)
│   ├── components/
│   │   ├── BuyButton/       # Botão de compra interativo
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── CardView/        # Card principal do veículo com controles
│   │   │   ├── actions.ts
│   │   │   ├── index.tsx
│   │   │   ├── props.tsx
│   │   │   └── style.tsx
│   │   └── Divider/         # Linha divisória estilizada
│   │       ├── index.tsx
│   │       └── styles.tsx
│   ├── constants/
│   │   └── car.ts           # URLs base da API e Assets
│   └── screens/
│       └── GarageScreen/    # Tela da garagem com moldura viewfinder
│           ├── index.tsx
│           └── style.tsx
├── App.tsx                  # Ponto de entrada da aplicação
├── app.json                 # Configurações do Expo
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Documentação completa do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** (v0.72.6)
- **[React Native for Web](https://necolas.github.io/react-native-web/)** (v0.19.13)
- **[Expo](https://expo.dev/)** (v~49.0.15)
- **[TypeScript](https://www.typescriptlang.org/)** (v^5.1.3)
- **[Axios](https://axios-http.com/)** (v^1.6.2)
- **[@expo/vector-icons](https://icons.expo.fyi/)** (AntDesign)

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` ou `yarn`
- Aplicativo **Expo Go** instalado no celular (disponível na App Store ou Google Play) ou emulador Android/iOS configurado

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/hSchwenke/trilha-react-native-expo-lamborghini-app.git
   cd trilha-react-native-expo-lamborghini-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npx expo start
   ```

4. **Abra o aplicativo:**
   - Escaneie o QR Code exibido no terminal pelo app **Expo Go** (Android) ou pela câmera do celular (iOS).
   - Ou pressione `a` para rodar no emulador Android ou `i` para o simulador iOS.
   - Ou pressione `w` (ou `npm run web`) para rodar diretamente no navegador web.

---

## 🧑‍💻 Autor

Desenvolvido por **[Henrique Schwenke](https://github.com/hSchwenke)** como parte do desafio de projeto da **[DIO (Digital Innovation One)](https://www.dio.me/)**.
