
const ChallengeSection = () =>  {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 aspect-video bg-gray-200">
        {/* <Image
          src="/placeholder.svg"
          alt="Challenge illustration"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold leading-tight">
          Cada desafio é o ponto de partida para o aprendizado e o crescimento
        </h2>
        <p className="text-gray-600">
          Por meio de projetos colaborativos, você trabalha em equipe, compartilha
          ideias e resolve problemas reais. Ao enfrentar desafios práticos, você não
          apenas reforça seu conhecimento, mas também desenvolve habilidades
          essenciais para o mercado, como trabalho em grupo, comunicação eficaz e
          resolução criativa de problemas. É assim que preparamos você para o mundo
          real: colaborando, aprendendo e crescendo juntos.
        </p>
      </div>
    </section>
  )
}
export default ChallengeSection;