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
  { label: "NEWS / NOVIDADES", link: "/novidades" },
  { 
    label: "PAVÕES", 
    link: "/pavoes",
    submenu: [
      { label: "Black Shoulder Pied White-Eyed | Asa Negra Arlequim White-eyed", link: "/pavoes/black-shoulder-pied-white-eyed" },
      { label: "Buford Bronze | Bronze", link: "/pavoes/buford-bronze" },
      { label: "Bronze White-Eyed", link: "/pavoes/bronze-white-eyed" },
      { label: "Cameo White-Eyed | Cameo de Olhos Brancos", link: "/pavoes/cameo-white-eyed" },
      { label: "Cameo Silver Pied | Cameo Arlequim Prateado", link: "/pavoes/cameo-silver-pied" },
      { label: "Cameo Pied White-Eyed | Cameo Arlequim White-eyed", link: "/pavoes/cameo-pied-white-eyed" },
      { label: "Cameo Black Shoulder Pied White-Eyed", link: "/pavoes/cameo-black-shoulder-pied-white-eyed" },
      { label: "Cameo Black Shoulder Silver Pied", link: "/pavoes/cameo-black-shoulder-silver-pied" },
      { label: "Dark Silver Pied | Arlequim Prateado Escuro", link: "/pavoes/dark-silver-pied" },
      { label: "India Blue | Azul", link: "/india-blue-azul" },
      { label: "India Blue Pied White-Eyed | Arlequim White-eyed", link: "/pavoes/india-blue-pied-white-eyed" },
      { label: "India Blue Silver Pied | Arlequim Prateado", link: "/pavoes/india-blue-silver-pied" },
      { label: "White Peafowl | Pavão Branco", link: "/pavoes/white-peafowl" },
      { label: "Opal | Cinzento", link: "/pavoes/opal" },
      { label: "Opal White-Eyed | Cinzento white-eyed", link: "/pavoes/opal-white-eyed" },
      { label: "Opal Silver Pied | Cinzento Arlequim Prateado", link: "/pavoes/opal-silver-pied" },
      { label: "Prussian Blue | Azul da Prússia", link: "/prussian-blue-azul-da-prussia" },
      { label: "Prussian Blue Black Shoulder", link: "/pavoes/prussian-blue-black-shoulder" },
      { label: "Raw Umber", link: "/pavoes/raw-umber" },
      { label: "Raw Umber Black Shoulder", link: "/pavoes/raw-umber-black-shoulder" },
      { label: "Spalding Pied | Spalding Arlequim", link: "/pavoes/spalding-pied" },
      { label: "Spalding Silver Pied", link: "/pavoes/spalding-silver-pied" },
      { label: "Spalding White | Branco Spalding", link: "/pavoes/spalding-white" },
      { label: "Violet | Violeta", link: "/pavoes/violet" }
    ]
  },
  { 
    label: "GALINHAS", 
    link: "/galinhas",
    submenu: [
      { label: "Fénix Branco", link: "/fenix-branco" }
    ]
  },
  { label: "PERUS", link: "/perus" },
  { 
    label: "CISNES", 
    link: "/cisnes",
    submenu: [
      { label: "Cisne-de-pescoço-preto", link: "/cisne-de-pescoco-preto" }
    ]
  },
  { label: "ARTIGOS", link: "/artigos" },
  { label: "CONTACTS", link: "/contacts" }
];

export const footerPavoes = [
  { 
    title: "Violet | Violeta",
    image: "https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg",
    link: "/pavoes/violet"
  },
  { 
    title: "Spalding White | Branco Spalding",
    image: "https://images.unsplash.com/photo-1592849151221-89a0966b8a37",
    link: "/pavoes/spalding-white"
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
