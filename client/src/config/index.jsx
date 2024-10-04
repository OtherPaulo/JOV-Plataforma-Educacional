export const registerFormControls = [
    {
        name: "userName",
        label: "Nome de Usuário",
        placeholder: "Digite seu nome de usuário",
        ComponentType: "input",
        type: "text",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Digite seu email",
        ComponentType: "input",
        type: "email",
    },
    {
        name: "password",
        label: "Senha",
        placeholder: "Digite sua senha",
        ComponentType: "input",
        type: "password",
    },
];

export const loginFormControls = [
    {
        name: "email",
        label: "Email",
        placeholder: "Digite seu email",
        ComponentType: "input",
        type: "email",
    },
    {
        name: "password",
        label: "Senha",
        placeholder: "Digite sua senha",
        ComponentType: "input",
        type: "password",
    },
];
export const addProductFormElements = [
  {
    label: "Titulo",
    name: "titulo",
    componentType: "input",
    type: "text",
    placeholder: "Digite o título do arquivo.",
  },
  {
    label: "Descrição",
    name: "descrição",
    componentType: "textarea",
    placeholder: "Digite a descrição do arquivo.",
  },
  {
    label: "Categoria",
    name: "categoria",
    componentType: "select",
    options: [
      { id: "uiux", label: "UI/UX Design" },
      { id: "fullstack", label: "Full-Stack Development" },
      { id: "frontend", label: "Front-End Development" },
      { id: "backend", label: "Back-End Development" },
      { id: "devops", label: "DevOps" },
      { id: "data-science", label: "Data Science" },
      { id: "machine-learning", label: "Machine Learning" },
      { id: "mobile-development", label: "Mobile Development" },
      { id: "cloud-computing", label: "Cloud Computing" },
      { id: "cybersecurity", label: "Cybersecurity" },
      { id: "blockchain", label: "Blockchain" },
      { id: "internet-of-things", label: "Internet of Things (IoT)" },
      { id: "game-development", label: "Game Development" },
      { id: "software-engineering", label: "Software Engineering" },
    ],
  },
  {
    label: "Tipo de Material",
    name: "tipo_material",
    componentType: "select",
    options: [
      { id: "artigo", label: "Artigo Científico" },
      { id: "livro", label: "Livro" },
      { id: "documentacao", label: "Documentação" },
      { id: "tese", label: "Tese" },
      { id: "dissertacao", label: "Dissertação" },
      { id: "relatorio", label: "Relatório" },
      { id: "tutorial", label: "Tutorial" },
    ],
  },

// {
//     label: "Preço",
//     name: "preco",
//     componentType: "input",
//     type: "number",
//     placeholder: "Digite o preço do produto",
// },
// {
//     label: "Preço de Venda",
//     name: "precoVenda",
//     componentType: "input",
//     type: "number",
//     placeholder: "Digite o preço de venda (opcional)",
// },
// {
//     label: "Estoque Total",
//     name: "estoqueTotal",
//     componentType: "input",
//     type: "number",
//     placeholder: "Digite o estoque total",
// },
];
