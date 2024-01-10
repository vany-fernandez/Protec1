const header = document.querySelector("header");
const footer = document.querySelector("footer"); 


/*  **********************   *
        ONE     HEADER
 *  **********************   */
header.innerHTML = `

<div class="logo">
<a href="index.html"><img class="img" src="assets/imgs/logo_verde.jpeg" alt="triqueta">

    
</a>
</div>

<button class="abrir" id="abrir">
<i class="fa-solid fa-bars" style="color: #000000;"></i>
</button>

<!-- Menú -->
<nav class="nav" id="nav">
<button class="cerrar" id="cerrar">
    <i class="fa-solid fa-xmark" style="color: #e3eaf4;"></i>
</button>
<ul class="nav-list">
    <li id="myLinks"><a href="know_us.html"><i>Conocenos</i></a></li>
    <li id="myLinks"><a href="success_stories.html"><i>Nuestro trabajo</i></a></li>
    <li id="myLinks"><a href="contact_us.html"><i>Contactanos</i></a></li>
    <li id="myLinks"><a href="https://buenosaires.gob.ar/noticias/ley-ndeg-5920-sistema-de-autoproteccion" target="_blank"><i>Legislación</i></a></li>
</ul>
</nav>
<!--  BUTTON  UP  -->
<button onclick="topFunction()" id="myBtn" title="Go to top"><img src="assets/imgs/triquetra_32px.png"
alt="triquetra">
</button>

</label>
`;

/*  **********************   *
        ONE     FOOTER
 *  **********************   */
footer.innerHTML = `

<div class="footer_img">
<img src="assets/imgs/logo_verde.jpeg" alt="triqueta">
</div>
<div class="copyright">
<h2><span></span>PROTEC</h2></a>Seguridad e Higiene<br>
<i>
    <p> </p> <br>
    <p> <!--  script que actualiza el año al actual  -->
        <script type="text/javascript">
            copyright = new Date();
            update = copyright.getFullYear(); document.write("© " + update + " " + "@All rights reserved");
        </script>
    </p><br>
</i>
</div>
<div class="casos">
<a href="know_us.html">Conocenos</a>
</div>
<div class="valor">
<a href="success_stories.html">Trabajos</a>
</div>
<div class="conocenos">
<a href="">Contacto</a>
</div>
<div class="contactanos">
<a href="">Legislación</a>
</div>

`;
