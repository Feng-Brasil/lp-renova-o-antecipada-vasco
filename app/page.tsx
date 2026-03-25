export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans text-[#000000]">
      {/* SCROLL 1 – DIRETO AO PONTO (OFERTA) */}
      <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center bg-[#000000] text-[#FFFFFF] min-h-[90vh]">
        {/* Faixa de Urgência */}
        <div className="absolute top-0 w-full bg-[#FFFFFF] text-[#000000] py-2 text-sm font-bold uppercase tracking-widest">
          Não perca tempo
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase italic">
            Renove agora e <br/>
            <span className="text-[#FFFFFF]">ganhe 2 meses grátis</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 font-medium">
            Quem renova antes do vencimento garante continuidade, prioridade e ainda leva dois meses grátis no plano da sua escolha.
          </p>

          <div className="bg-[#1A1A1A] border-2 border-[#FFFFFF] rounded-lg p-6 mb-10 transform hover:scale-105 transition-transform">
            <p className="text-sm uppercase tracking-wider mb-2">Use o cupom:</p>
            <div className="text-3xl md:text-4xl font-mono font-bold text-[#FFFFFF] mb-4">
              RENOVAGIGANTE
            </div>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold">
              <span>e aproveite já!</span>
            </div>
            <p className="text-[10px] mt-3 text-gray-400 uppercase">Desconto diluído nas parcelas</p>
          </div>

          <a 
            href="https://sociogigante.com/renovar" 
            className="inline-block w-full md:w-auto bg-[#FFFFFF] hover:bg-gray-200 text-[#000000] text-xl font-bold py-5 px-12 rounded-full transition-colors shadow-lg uppercase tracking-tighter"
          >
            Quero renovar agora
          </a>
        </div>
      </section>

      {/* SCROLL 2 – MANUTENÇÃO DOS BENEFÍCIOS */}
      <section className="py-20 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase text-[#000000]">
              O que você mantém ao renovar:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#000000]">
              <h3 className="font-bold text-lg mb-2 uppercase">Prioridade e desconto em ingressos</h3>
              <p className="text-gray-600 text-sm">mais tempo e melhor posição quando a venda abre.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#000000]">
              <h3 className="font-bold text-lg mb-2 uppercase">Experiências exclusivas nos bastidores</h3>
              <p className="text-gray-600 text-sm">ações e ativações para quem está dentro do programa.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-[#000000]">
              <h3 className="font-bold text-lg mb-2 uppercase">Clube de Vantagens</h3>
              <p className="text-gray-600 text-sm">cashback e ofertas na rede de parceiros do Sócio Gigante.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="text-xl font-bold uppercase italic text-[#000000]">E muito mais!</p>
          </div>

          <div className="text-center">
            <a 
              href="https://sociogigante.com/renovar" 
              className="inline-block bg-[#000000] hover:bg-gray-800 text-[#FFFFFF] text-lg font-bold py-4 px-10 rounded-lg transition-all uppercase"
            >
              Manter meus benefícios
            </a>
          </div>
        </div>
      </section>

      {/* SCROLL 3 – CUPOM FINAL */}
      <section className="py-20 px-4 bg-[#FFFFFF] border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase leading-tight">
            Use o cupom <span className="bg-[#000000] text-[#FFFFFF] px-2">RENOVAGIGANTE</span> e garanta 2 meses grátis na renovação do seu plano.
          </h2>
          
          <a 
            href="https://sociogigante.com/renovar" 
            className="inline-block w-full md:w-auto bg-[#000000] hover:bg-gray-800 text-[#FFFFFF] text-xl font-bold py-6 px-16 rounded-full transition-all shadow-xl uppercase mb-8"
          >
            RESGATAR MEU CUPOM
          </a>

          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Oferta válida para sócios com contratos vencendo entre abril e junho de 2026 ou com até 7 dias de vencimento. Renove com o cupom RENOVAGIGANTE e garanta 2 meses grátis no seu plano. O valor do desconto será descontado do montante total e dividido em até 12 parcelas.
          </p>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-sm bg-[#FFFFFF]">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Sócio Gigante - Club de Regatas Vasco da Gama</p>
      </footer>
    </main>
  );
}