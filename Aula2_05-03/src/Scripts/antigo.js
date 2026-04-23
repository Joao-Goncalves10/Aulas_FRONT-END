const topo = document.getElementById("top_site")

const links = document.getElementsByTagName("a")

const listaCards = document.getElementsByClassName("card")

console.log('1. O elemento TOPO', topo)
console.log('2. O primeiro card da lista', listaCards[0])
console.log('3. A lista completa de links', links)
console.log('4. O endereço (URL) do primeiro link: ', links[0].href)
console.log('5. A cor do cabeçalho:', topo.style.backgroundColor)