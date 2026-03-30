// Mock data for QuintalPavos website

export const sliderArticles = [
  {
    id: 1,
    title: "CITES",
    description: "Informação sobre CITES Pavões da espécie Pavo cristatus Anexos IIIC da CITES A espécie Pavo cristatus, sendo dos Anexos IIIC da CITES, tal como o […]",
    image: "https://images.unsplash.com/photo-1559048958-4d1a3dc247d1",
    link: "/cites"
  },
  {
    id: 2,
    title: "Quintal Pavos",
    description: "Welcome to Quintal Pavos.                                            […]",
    image: "https://images.unsplash.com/photo-1578885564199-db62248858cf",
    link: "/quintal-pavos"
  },
  {
    id: 3,
    title: "Cisne-de-pescoço-preto",
    description: "O cisne-de-pescoço-preto é uma ave anseriforme da família Anatidae. É o único cisne sul-americano. Nome Científico O seu nome científico significa: de Cygnus = nome específico deste gênero […]",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Black-necked_swan_%28Cygnus_melancoryphus%29_Santiago.jpg",
    link: "/cisne-de-pescoco-preto"
  },
  {
    id: 4,
    title: "Prussian Blue | Azul da Prússia",
    description: "Origin of the Prussian Blue Peafowl                                        […]",
    image: "https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg",
    link: "/prussian-blue"
  },
  {
    id: 5,
    title: "India Blue | Azul",
    description: "India Blue Native to India, the India Blue Peafowl is, without doubt, the most widespread and known Peafowl in the world. This is also true […]",
    image: "https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg",
    link: "/india-blue"
  }
];

export const newsArticles = [
  {
    id: 1,
    title: "News / Novidades",
    image: "https://images.unsplash.com/photo-1559048958-4d1a3dc247d1",
    comments: 0,
    featured: true
  },
  {
    id: 2,
    title: "Cisne-de-pescoço-preto",
    image: "https://images.unsplash.com/photo-1727586198137-3932d7deef01",
    comments: 0,
    featured: false
  },
  {
    id: 3,
    title: "Fénix Branco",
    image: "https://images.unsplash.com/photo-1592849151221-89a0966b8a37",
    comments: 0,
    featured: false
  }
];

export const menuItems = [
  { label: "HOME", link: "/" },
  { label: "QUINTAL PAVOS", link: "/quintal-pavos" },
  { label: "NEWS / NOVIDADES", link: "/news" },
  { 
    label: "PAVÕES", 
    link: "/pavoes",
    submenu: [
      { label: "India Blue | Azul", link: "/pavoes/india-blue" },
      { label: "Prussian Blue", link: "/pavoes/prussian-blue" },
      { label: "Violet | Violeta", link: "/pavoes/violet" },
      { label: "Spalding White | Branco Spalding", link: "/pavoes/spalding-white" }
    ]
  },
  { 
    label: "GALINHAS", 
    link: "/galinhas",
    submenu: [
      { label: "Chickens / Galinhas", link: "/galinhas/chickens" },
      { label: "Destaques", link: "/galinhas/destaques" }
    ]
  },
  { label: "PERUS", link: "/perus" },
  { 
    label: "CISNES", 
    link: "/cisnes",
    submenu: [
      { label: "Swans / Cisnes", link: "/cisnes/swans" },
      { label: "Cisne-de-pescoço-preto", link: "/cisnes/pescoco-preto" }
    ]
  },
  { label: "ARTIGOS", link: "/artigos" },
  { label: "CONTACTS", link: "/contacts" }
];

export const footerPavoes = [
  { 
    title: "Violet | Violeta",
    image: "https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg",
    link: "/pavoes"
  },
  { 
    title: "Spalding White | Branco Spalding",
    image: "https://images.unsplash.com/photo-1592849151221-89a0966b8a37",
    link: "/pavoes"
  }
];

export const footerLinks = {
  avesQuintalPavos: [
    { label: "Chickens / Galinhas", link: "/galinhas" },
    { label: "CITES", link: "/cites" },
    { label: "Destaques", link: "/destaques" },
    { label: "News / Novidades", link: "/novidades" },
    { label: "Peafowl / Pavões", link: "/pavoes" },
    { label: "Swans / Cisnes", link: "/cisnes" }
  ]
};

export const contactInfo = {
  name: "João Nuno Carita",
  email: "caritaquintalpavos@gmail.com",
  phone: "+351 914 558 518"
};
