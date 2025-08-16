"use client";

type Morador = {
  primeiroNome: string;
  sobrenome: string;
}

export default function Home() {

  const morador = {
    primeiroNome: 'Sandro',
    sobrenome: 'pereira'
  }

  function obterSaudacao(morador:null | Morador){
    if(morador){
      return <span>Olá, {formatarNomeMorador(morador)}!</span>
    }
    return <span>Olá, Estranho!!!</span>
  }

  function formatarNomeMorador(morador:Morador){
    return morador.primeiroNome + ' ' + morador.sobrenome
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold"> {obterSaudacao(morador)} </h1>
    </div>
  )
}

