import React from 'react';

const CompanyShowcase = () => {
  const companies = [
    { name: 'Google', logo: '' },
    { name: 'Bradesco', logo: '' },
    { name: 'Santander', logo: '' },
    { name: 'iFood', logo: '' },
    { name: 'Microsoft', logo: '' },
    { name: 'Amazon', logo: '' },
    { name: 'Facebook', logo: '' },
    { name: 'Apple', logo: '' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Companias que confiam em nosso trabalho</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          As empresas abaixo confiam em nosso trabalho e são parceiras para alcançar seus objetivos e inovar no mercado.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={`Logo da ${company.name}`}
                className="max-w-full h-auto bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;