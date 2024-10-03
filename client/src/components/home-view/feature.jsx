import React from "react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-12 leading-tight">
          Capture conhecimentos e compartilhe experiências como nunca antes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            title="Ambiente de Crescimento Pessoal e Profissional"
            description="Na Plataforma JOV, os membros têm acesso a ferramentas que vão além dos cursos convencionais, incluindo mentorias personalizadas, networking profissional e uma abordagem de gamificação que torna o aprendizado envolvente."
          />
          <FeatureCard
            title="Conexão com Empresas e Oportunidades de Carreira"
            description="Proporcionamos aos membros a oportunidade de se conectar com grandes empresas que estão em busca de jovens talentos. Através de eventos de networking, workshops exclusivos e parcerias estratégicas, os membros podem mostrar suas habilidades e potencial diretamente para empregadores de renome."
          />
          <FeatureCard
            title="Comunidade Colaborativa e Envolvente"
            description="A Plataforma JOV é construída para fomentar um senso de comunidade. Como membro, você faz parte de uma rede dinâmica de jovens com os mesmos interesses, onde é possível compartilhar experiências, trocar conhecimentos e colaborar em projetos reais."
          />
          <FeatureCard
            title="Reconhecimento e Oportunidades de Expansão"
            description="A Plataforma JOV oferece recompensas através da gamificação, tanto para membros quanto para educadores. Ao se engajar e alcançar marcos na plataforma, os membros são incentivados a progredir continuamente."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button
        variant="outline"
        className="text-orange-500 border-orange-500 hover:bg-orange-50"
      >
        Saiba mais
      </Button>
    </div>
  );
};

export default FeaturesSection;
