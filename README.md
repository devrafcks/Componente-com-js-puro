# 📰 Portal de Notícias Galáctica - Web Component 🚀  



Este projeto é um **componente de cartão de notícias** criado com **JavaScript puro** (Vanilla JS), utilizando **Web Components** para encapsular a estrutura e o estilo do componente.  

## 📌 Funcionalidades  

✅ **Web Components:** Criação de um componente personalizado `card-news`.  
✅ **Shadow DOM:** Estilos e estrutura encapsulados, evitando conflitos com o CSS global.  
✅ **Atributos Dinâmicos:** Permite definir **autor, título, link e imagem** diretamente no HTML.  
✅ **Responsividade:** O layout se adapta bem a **diferentes tamanhos de tela**.  

## 🎨 Estilização  

- O CSS encapsulado no **Shadow DOM** mantém a organização e evita sobrecarga no estilo global.  
- A estrutura do **card** se adapta a **dispositivos móveis** automaticamente.  

## 🚀 Como Usar  

Para utilizar o componente, basta incluir a **tag personalizada** no HTML, passando os atributos desejados:  

```html
<card-news 
  autor="Rafael" 
  title="Darth Vader aprova o GitHub do Rafael!" 
  link-url="https://github.com/devrafcks" 
  photo="assets/asset-vader.png" 
  contet="Darth Vader procura desenvolvedores que dominam Web Components.">
</card-news>
