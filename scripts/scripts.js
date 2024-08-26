/* Menu aparece */
const columna1 = document.getElementById('asideColumna'), menu = document.getElementById('menuBoton');

menu.onclick = () => {
    columna1.classList.toggle('menuVisible')
    /* console.log("Le diste click al menu") */
} 