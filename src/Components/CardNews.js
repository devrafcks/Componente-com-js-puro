class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("contet");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
    newsImage.alt = "Foto da Noticia";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .card {
          width: 95%;
          max-width: 600px;
          box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background:rgba(189, 151, 75, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.46);
        }

        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 4px;
          gap: 8px;
        }

        .card__left > span {
          font-weight: 500;
          color: #555;
          font-size: 14px;
        }

        .card__left > a {
          font-size: 22px;
          padding: 5px;
          color: #222;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .card__left > a:hover {
          color:rgb(163, 67, 46);
        }

        .card__left > p {
          color: #666;
          font-size: 16px;
          line-height: 1.4;
        }

        /* Responsividade */
        @media (max-width: 600px) {
          .card {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }

          .card__left {
            padding-left: 0;
            align-items: center;
          }

          .card__left > a {
            font-size: 20px;
          }

          .card__left > p {
            font-size: 14px;
          }
        }
    `;

  return style;
  }
}

customElements.define("card-news", Cardnews);
