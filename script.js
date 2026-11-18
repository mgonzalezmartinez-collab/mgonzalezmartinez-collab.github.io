// Función para la barra de búsqueda general
function buscarTexto() {
  const input = document.getElementById('searchInput');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    alert('Por favor ingresa un término de búsqueda.');
    return;
  }

  const textoPagina = document.body.innerText.toLowerCase();

  if (textoPagina.includes(query)) {
    alert(`¡Se encontraron coincidencias para "${query}" en esta página!`);
  } else {
    alert(`No se encontraron resultados para: "${query}"`);
  }
}
