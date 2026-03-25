export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans text-[#000000]">
      {/* SCROLL 1 – DIRETO AO PONTO (OFERTA) */}
      <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center bg-[#000000] text-[#FFFFFF] min-h-[90vh]">
        {/* Faixa de Urgência */}
        <div className="absolute top-0 w-full bg-[#E30613] py-2 text-sm font-bold uppercase tracking-widest">
          Oportunidade por tempo limitado
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase italic">
            O VASCO PRECISA DE VOCÊ. <br/>
            <span className="text-[#E30613]">NÃO DEIXE SUA PAIXÃO VENCER!</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 font-medium">
            Renove agora seu compromisso com a Cruz de Malta e garanta condições exclusivas que só o Gigante da Colina oferece para quem não abandona o barco.
          </p>

          <div className="bg-[#1A1A1A] border-2 border-[#E30613] rounded-lg p-6 mb-10 transform hover:scale-105 transition-transform">
            <p className="text-sm uppercase tracking-wider mb-2">Use o cupom abaixo:</p>
            <div className="text-3xl md:text-4xl font-mono font-bold text-[#E30613] mb-4">
              RENOVAGIGANTE
            </div>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold">
              <span>→</span>
              <span className="text-[#FFFFFF]">GANHE 2 MESES GRÁTIS</span>
              <span>←</span>
            </div>
            <p className="text-sm mt-3 text-gray-400 italic">válido para renovação antecipada</p>
          </div>

          <a 
            href="https://sociogigante.com/renovar" 
            className="inline-block w-full md:w-auto bg-[#E30613] hover:bg-[#b3050f] text-white text-xl font-bold py-5 px-12 rounded-full transition-colors shadow-lg uppercase tracking-tighter"
          >
            Quero renovar agora
          </a>
        </div>
      </section>

      {/* SCROLL 2 – MANUTENÇÃO DOS BENEFÍCIOS */}
      <section className="py-20 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">
              Mantenha seu lugar na história
            </h2>
            <p className="text-gray-700 text-lg">
              Não perca os privilégios de quem joga junto com o Vascão. Ao renovar, você garante a continuidade de todos os seus benefícios:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#000000]">
              <div className="text-2xl mb-2">🎫</div>
              <h3 className="font-bold text-lg mb-1">Prioridade Máxima</h3>
              <p className="text-gray-600 text-sm">Garantia de compra de ingressos antes de todo mundo para Caldeirão lotado.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#E30613]">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-lg mb-1">Descontos Exclusivos</h3>
              <p className="text-gray-600 text-sm">Preços reduzidos em ingressos para você e seus convidados (conforme plano).</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#000000]">
              <div className="text-2xl mb-2">🌟</div>
              <h3 className="font-bold text-lg mb-1">Experiências Únicas</h3>
              <p className="text-gray-600 text-sm">Acesso a sorteios para visitas ao CT, gramado de São Januário e ações exclusivas.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#E30613]">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-bold text-lg mb-1">Clube de Vantagens</h3>
              <p className="text-gray-600 text-sm">Rede de parceiros com descontos que fazem sua mensalidade se pagar sozinha.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#000000]">
              <div className="text-2xl mb-2">👕</div>
              <h3 className="font-bold text-lg mb-1">10% Off Lojas Oficiais</h3>
              <p className="text-gray-600 text-sm">Desconto garantido em todos os produtos licenciados e mantos do Vasco.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#E30613]">
              <div className="text-2xl mb-2">🍺</div>
              <h3 className="font-bold text-lg mb-1">Cashback Zé Delivery</h3>
              <p className="text-gray-600 text-sm">Receba cupons de cashback todo mês para usar no Zé Delivery.</p>
            </div>
          </div>

          <div className="text-center bg-[#000000] text-white p-8 rounded-2xl">
            <p className="text-xl mb-6 font-medium italic">
              "Ser Vasco é um sentimento que não para. Manter sua adesão é fortalecer o clube e garantir seu lugar em São Januário."
            </p>
            <a 
              href="https://sociogigante.com/renovar" 
              className="inline-block bg-[#E30613] hover:bg-[#b3050f] text-white text-lg font-bold py-4 px-10 rounded-lg transition-all uppercase"
            >
              Quero renovar agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-sm">
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