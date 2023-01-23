class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        
        <header>
        <a href= iicio.html>
        
        </a>
        <nav>
        <ul>
        
        <li><a href=index.html>Home</a>
        <li><a href=contenido.html>Contenido</a>
        <li><a href=conclusion.html>Conclusionb</a>
        <li><a href=musica.html>Music</a>

        </ul>
        
        </nav>
        </header>
        
        
        
        
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        
        <footer>

        @2023
        My Name
      
        </footer>
        
        
        
        
        `
    }
}

customElements.define('my-footer', MyFooter)