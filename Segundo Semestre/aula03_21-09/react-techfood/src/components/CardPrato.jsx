function CardPrato({ nome, preco, categoria, descricao }) {
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return (
        <article ClassName="card-prato">
            <span ClassName="categoria">
                {categoria === "prato principal" ? "🍽️" : categoria === "sobremesa" ? "🍰" : "🥤"}
            </span>
            <h2>{nome}</h2>
            <p ClassName="preco">{precoFormatado}</p>
            <p ClassName="descricao">{descricao}</p>
        </article>
    )
}

export default CardPrato