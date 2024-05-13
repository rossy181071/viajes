import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es mi parrafo 1
       */
      paragraph1: { type: String },
      /**
       * Esta es la ur de la imagen 1
       */
      Image1Url: { type: String },
      /**
       * Este es el elemento 1 de la lista 1
       */
      list1Element1: { this: String },
      /**
       * Este es el elemento 2 de la lista 1
       */
      list1Element2: { this: String },
      /**
       * Este es el elemento 3 de la lista 1
       */
      list1Element3: { this: String },
      /**
       * Este es el elemento 4 de la lista 1
       */
      list1Element4: { this: String },
      /**
       * Este es el elemento  de la lista 1
       */
      list1Element5: { this: String },
      /**
       * Esta es la url de la imagen 2 
       */
      image2Url: { type: String },
      
    }
  }

  constructor() {
    super()
   
    this.title = 'BIENVENIDOS AGENCIA DE VIAJES VLADYL'
    this.paragraph1 = 'VIAJES A MEXICO Y EL MUNDO'
    this.image1Url = 'https://s2.abcstatics.com/abc/www/multimedia/viajar/2023/10/18/suite-RdgxRJigYrVhHngiaOPamFM-1200x840@abc.jpg'
    this.paragraph2 = 'OFRECEMOS DIFERENTES PAQUETES '
    this.paragraph3 = 'PAQUETE 1'
    this.image2Url = 'https://i.ytimg.com/vi/NDNPo5xcbj8/maxresdefault.jpg'
    this.list1Element1 = 'Hotel'
    this.list1Element2 = 'Comida'
    this.list1Element3 = 'Transporte'
    this.list1Element4 = 'Bebidas'
    this.list1Element5 = 'Diversion ni;os y adultos'
    this.paragraph4 = 'PAQUETE 2'
    this.image3Url = 'https://i.pinimg.com/originals/fd/dd/59/fddd59b6821afefff878de01615d48a8.png'
    this.list2Element1 = 'Hotel'
    this.list2Element2 = 'Comida y Bebidas Nacionales'
    this.list2Element3 = 'Transporte'
    this.list2Element4 = 'Noche de baile'
    this.list2Element5 = 'Guarderia'
    this.paragraph5 = 'PAQUETE 3'
    this.image4Url = 'https://www.shutterstock.com/image-photo/kids-jump-into-sea-yacht-260nw-1943031181.jpg'
    this.list3Element1 = 'Hotel'
    this.list3Element2 = 'Comida y Bebidas Nacionales'
    this.list3Element3 = 'Transporte'
    this.list3Element4 = 'Viaje en Yate'
    this.list3Element5 = 'Guarderia'
    this.paragraph6 = 'PAQUETE 4'
    this.image5Url = 'https://blog.garrafon.com.mx/wp-content/uploads/2023/01/tirolesa-en-isla-mujeres.jpg'
    this.list4Element1 = 'Hotel'
    this.list4Element2 = 'Comida y Bebidas Nacionales'
    this.list4Element3 = 'Transporte'
    this.list4Element4 = 'Tirolesa'
    this.list4Element5 = 'Guarderia'

  }

  render() {
    return html`
    <div id="Agencia de Viajes Vladyl">
    <h1>${this.title}</h1>
    <p>${this.paragraph1}</p>
    <img src="${this.image1Ur}">
    <p>${this.paragraph2}</p>
    <img src="${this.image2Url}">
    <p>${this.paragraph3}</p>
    <ul>
      <li><i>${this.list1Element1}</i></li>
      <li><i>${this.list1Element2}</i></li>
      <li><i>${this.list1Element3}</i></li>
      <li><i>${this.list1Element4}</i></li>
      <li><i>${this.list1Element5}</i></li>
    </ul>
    <p>${this.paragraph4}</p>
    <img src="${this.image3Url}">
    <li><i>${this.list2Element1}</i></li>
    <li><i>${this.list2Element2}</i></li>
    <li><i>${this.list2Element3}</i></li>
    <li><i>${this.list2Element4}</i></li>
    <li><i>${this.list2Element5}</i></li>
    <p>${this.paragraph5}</p>
    <img src="${this.image4Url}">
    <li><i>${this.list3Element1}</i></li>
    <li><i>${this.list3Element2}</i></li>
    <li><i>${this.list3Element3}</i></li>
    <li><i>${this.list3Element4}</i></li>
    <li><i>${this.list3Element5}</i></li>
    <p>${this.paragraph6}</p>
    <img src="${this.image5Url}">


    <li><i>${this.list4Element1}</i></li>
    <li><i>${this.list4Element2}</i></li>
    <li><i>${this.list4Element3}</i></li>
    <li><i>${this.list4Element4}</i></li>
    <li><i>${this.list4Element5}</i></li>


  </div> `
  
}


  static get styles() {
    return css`
      :host {
        max-width: 1100px;
        margin: 0 auto;
        padding: rem;
        
      }
      body{
        background-color: plum;
      }
      #parrafo {
        background-color: chartreuse;
      }
      #parrafo {
        font-family: Georgia
      }
      #parrafo { 
        color: rgb(165, 42, 144);
      }
      #parrafo {
        font-size:8vh;
      }  
      
      #viajes {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      
      div{
    padding: 7vw;
    }
    #viajes a mexico y el mundo {
      background-color: cadetblue;
    }
      img {
    width:25vw;
      }
      p {
    font-size:3vw;
      }

    #titulo-1 {
      color: coral;
    }
    #titulo-2 {
      color: aqua;
    }
    #titulo-3 {
      color: chartreuse;
    }
    #titulo-4 {
      color: brown;
    }
    #titulo-5 {
      color: darkgreen;
    }
    #titulo-6 {
      color: darkorchid;
    }
    li{
    font-size: 7vw;
    }
    `
  }
}


window.customElements.define('my-element', MyElement)

