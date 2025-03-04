# 📰 Portal de Notícias Galáctica - Web Component 🚀  

![image](https://github.com/user-attachments/assets/2ab80243-bbf4-4ec1-a298-208ef720f681)  
![image](https://github.com/user-attachments/assets/0c521e0d-3743-4099-9f9c-6dd5ab0501db)  

Este projeto apresenta um **componente de cartão de notícias**, desenvolvido com **JavaScript puro** (Vanilla JS) e utilizando **Web Components** para encapsular sua estrutura e estilização.  

## 📌 Funcionalidades  

✅ **Web Components:** Criação de um componente reutilizável `card-news`.  
✅ **Shadow DOM:** Mantém os estilos e a estrutura isolados, evitando conflitos no CSS global.  
✅ **Atributos Dinâmicos:** Permite definir **autor, título, link e imagem** diretamente no HTML.  
✅ **Responsividade:** O layout se adapta automaticamente a **diferentes tamanhos de tela**.  

## 🎨 Estilização  

- O CSS encapsulado no **Shadow DOM** mantém a organização e evita conflitos com outros estilos.  
- O **design responsivo** garante uma boa experiência tanto em **desktop** quanto em **dispositivos móveis**.  

## 🚀 Como Usar  

Para utilizar o componente, basta incluir a **tag personalizada** no HTML e definir os atributos desejados:  

```html
<card-news 
  autor="Rafael" 
  title="Darth Vader aprova o GitHub do Rafael!" 
  link-url="https://github.com/devrafcks" 
  photo="assets/asset-vader.png" 
  contet="Darth Vader procura desenvolvedores que dominam Web Components.">
</card-news>
