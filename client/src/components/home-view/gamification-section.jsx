
const GamificationSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            Gamificação: Seu Passaporte para Oportunidades!
          </h2>
          <p className="text-gray-300">
            A gamificação na nossa plataforma não é apenas uma maneira de aprender—
            é uma ferramenta poderosa que conecta seu desenvolvimento ao mercado
            de trabalho! Ao completar desafios e acumular pontos, você não só enriquece
            suas habilidades, mas também se destaca para recrutadores que estão de
            olho em talentos. Os bônus exclusivos que você desbloqueia, como acesso a
            estágios e eventos de networking, ampliam suas oportunidades de carreira.
            Experimente uma jornada de aprendizado onde seu desempenho é visível e
            valorizado, transformando cada conquista em uma porta aberta para o seu
            futuro!
          </p>
        </div>
        <div className="w-full md:w-1/2 aspect-video bg-white">
          {/* <Image
            src="/placeholder.svg"
            alt="Gamification illustration"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default GamificationSection;