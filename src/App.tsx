import './App.css'
//useffect
import { useEffect, useState } from 'react'
type ProdutoType = {
  _id: string
  nome: string
  preco: number
  urlfoto: string
  descricao: string
}


function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  useEffect(() => {
    fetch('/api/produtos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
  }, [])

  return (
    <>
    <div>tere</div>
    {produtos.map((produto) => (
      <div key={produto._id}>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p>R$ {produto.preco}</p>
        <img src={produto.urlfoto} alt={produto.nome} width="200" />
      </div>
    ))
    }
    </>
  )
}


export default App
