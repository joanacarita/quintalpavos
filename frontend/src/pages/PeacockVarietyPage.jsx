import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo } from '../mock';
import '../styles/ArticlePage.css';

// Peacock variety information - Real content from quintalpavos.com
const peacockVarieties = {
  'white-peafowl': {
    title: 'White Peafowl | Pavão Branco',
    content: `
      <h2>White Peafowl</h2>
      <p>Were one of the first mutations of the India Blue Peafowl to appear. They are not albino Peafowl, (one cannot see red eyes). They are actually a color mutation. These birds have a completely white plumage and face.</p>
      
      <p>From the White Peafowl and India Blue Peafowl crossing no Pied Peafowl is obtained. The Pied Peafowl is also an India Blue Peafowl mutation, not having therefore appeared from Blue and White crossing.</p>
      
      <p>The White Peafowl are genetically of incomplete dominance, which implies that its offspring (F1 Generation) with other colors Peafowl is only white bearing, that is to say, they will not be White, and they will have instead some white feathers in the outer primaries. When crossing the F1 generation among each other (F1 male + F1 female) the probability of obtaining white peafowl will be 50%.</p>
      
      <hr>
      
      <h2>Pavão Branco</h2>
      <p>Foi uma das primeiras mutações de cor do pavão azul a aparecer. Não são pavões albinos (não têm olhos vermelhos). Estas aves têm a plumagem e face completamente brancas.</p>
      
      <p>No cruzamento do Pavão Branco e do Pavão Azul, não é obtido nenhum Pavão Arlequim. O pavão arlequim também é uma mutação do Pavão azul. Os arlequins não surgiram do cruzamento entres azuis e brancos.</p>
      
      <p>O Pavão Branco é geneticamente de dominancia incompleta, o que implica que sua prole (Geração F1) com outras cores de pavões será apenas portadora de branco, ou seja, eles não serão Brancos, e terão algumas penas brancas nas guias primárias. Ao cruzar a geração F1 entre si a probabilidade de obtenção de pavão branco será de 50%.</p>
    `
  },
  'opal': {
    title: 'Opal | Cinzento',
    content: `
      <h2>Opal | Cinzento</h2>
      <p>Under construction / Em construção</p>
      <p>The Opal peacock variety displays beautiful grey-toned opalescent coloration. This variety is currently being developed and documented at Quintal Pavos.</p>
      <p>Para mais informações sobre esta variedade, entre em contacto connosco.</p>
    `
  },
  'raw-umber': {
    title: 'Raw Umber',
    content: `
      <h2>Raw Umber - A New Peafowl Variety</h2>
      <p>In 2010, at the installations of Efigénio Clemente Frías and his son Alberto Clemente Murcia, something unexpected happened. The breeding season started with a very special surprise.</p>
      
      <p>Among the chicks bred by a white female, daughter of a pair of silver pied (India Blue Silver Pied), crossed with a pied male (India Blue Pied) of unknown origin, some chicks were born that initially seemed white. But later, as the chicks grew, Efigénio realized that the peacocks were not white at the end.</p>
      
      <h3>Discovery and Classification</h3>
      <p>When I saw them for the first time, I confirmed that they were not white and presented a plumage color that I had never seen before. One of the two specimens I received at the end of 2010 had more colorful neck feathers than the other, with a very light raw brown tone. This specimen was later confirmed to be a male.</p>
      
      <p>The first step we took was color qualification. For this, we sought help from a color specialist and renowned Portuguese plastic artist, Patrícia Noronha, who holds a degree in Zootechnics from the University of Évora, a doctorate in Genetics and Molecular Biology from the New University of Lisbon. From the study done by Patrícia on the color of these peacocks, she suggested attributing the name <strong>Raw Umber</strong>.</p>
      
      <h3>Characteristics</h3>
      <p>After several months, especially in males, the neck feathers show a very discreet raw brown tone. From observation of photos and when seeing them live, these birds appear to have a plumage coloration between ash and brown.</p>
      
      <p>It is important to clarify that when we started color qualification, we already knew that all offspring of a Raw Umber pair are born rigorously equal to their parents. That is, the color is transmitted to their descendants. From 2012 to 2015, all Raw Umber chicks continue to hatch Raw Umber.</p>
      
      <p>After several years dedicated to peacock breeding, it is very gratifying for us that for the first time a bird has emerged with characteristics that distinguish it from all others of its species, <em>Pavo cristatus</em>.</p>
      
      <p><em>João Nuno Carita, Efigénio Clemente Frias, Alberto Clemente Murcia</em></p>
    `
  },
  'buford-bronze': {
    title: 'Buford Bronze | Bronze',
    content: `
      <h2>Bronze Peafowl</h2>
      <p>Bronze peafowl is a variety recognized by the UPA (United Peafowl Association).</p>
      
      <p>The gene for the bronze color is recessive. As with all existing peafowl colors, we can also obtain copies of the Bronze variety on all patterns: Pied, Silver Pied, White-eyed and Black Shoulder.</p>
      
      <p>It is a dark peacock, with metallic burgundy reflections in the ocellus.</p>
      
      <hr>
      
      <h2>Bronze</h2>
      <p>O pavão bronze é uma variedade reconhecida pela UPA (United Peafowl Association).</p>
      
      <p>O gene para a cor bronze é recessivo. Assim como todas as cores de pavões existentes, podemos também obter exemplares da variedade Bronze em todos os padrões de plumagem: Arlequim, Arlequim Prateado, White-eyed e Asa Negra.</p>
      
      <p>É um pavão escuro, com reflexos metálicos cor de vinho nos ocellus.</p>
    `
  },
  'violet': {
    title: 'Violet | Violeta',
    content: `
      <h2>Violet Peafowl</h2>
      <p>This variety originated in Europe, more precisely in Bavaria. The first sample was found by Lorenz Husterer, a German breeder. On a visit to a breeder, he found in a group of blue peafowls a unique sample that caught his attention. The breeder gave that same peafowl to Lorenz and, once inside his house, Lorenz worked on fixing this fabulous color.</p>
      
      <p>They are very much alike the Purple variety which was isolated in the United States, but with significant differences to a keen observer.</p>
      
      <h3>Male Characteristics</h3>
      <p>In the Violet males, the color of both neck and tail remains violet when exposed to the sun and when it is not. The same does not happen in the Purple variety in which in the shadow the color of the feathers of its neck is practically the same as the color of a blue peafowl.</p>
      
      <p>The wings in the wild pattern variety (barred rings), the stripped pattern is brown and not black as in the blue peafowl. The plumage that in the beginning of the change was green with metallic reflections, with sun exposure, turns brown.</p>
      
      <h3>Female Characteristics</h3>
      <p>Regarding the females, they are brown similar to the Cameo females.</p>
      
      <p>The violet females do not have plumage with metallic reflections on their necks nor on the top of their heads.</p>
      
      <p>The purple females show metallic reflections of green in the shadow and purple in the sun on the neck and on the top of the head.</p>
      
      <hr>
      
      <h2>Violeta</h2>
      <p>Esta variedade teve origem na Europa, mais precisamente na Bavieria. O primeiro exemplar foi encontrado por Lorenz Husterer, um criador Alemão.</p>
      
      <p>Nos machos Violeta, a cor no pescoço e cauda permanece violeta ao sol e na sombra, o mesmo não acontece na variedade purpura em que na sombra a cor das penas do pescoço é praticamente igual à de um pavão azul.</p>
      
      <p>As fêmeas violeta não têm plumagem com reflexos metálicos no pescoço nem no topo da cabeça.</p>
    `
  },
  'spalding-white': {
    title: 'Spalding White | Branco Spalding',
    content: `
      <h2>Spalding White</h2>
      <p>Under construction / Em construção</p>
      <p>The Spalding White is a pure white Spalding peacock variety with larger size compared to standard peafowl. This variety combines the white coloration with the Spalding hybrid characteristics.</p>
      <p>Young Spalding White 2019 available. For more information, please contact us.</p>
    `
  },
  // Default content for varieties not yet fully documented
  'black-shoulder-pied-white-eyed': {
    title: 'Black Shoulder Pied White-Eyed | Asa Negra Arlequim White-eyed',
    content: '<h2>Black Shoulder Pied White-Eyed</h2><p>A beautiful peacock variety combining black shoulder pattern with white-eyed pied coloring. This variety is available at Quintal Pavos.</p>'
  },
  'bronze-white-eyed': {
    title: 'Bronze White-Eyed',
    content: '<h2>Bronze White-Eyed</h2><p>A bronze peacock variety with striking white-eyed characteristics.</p>'
  },
  'cameo-white-eyed': {
    title: 'Cameo White-Eyed | Cameo de Olhos Brancos',
    content: '<h2>Cameo White-Eyed</h2><p>The Cameo White-Eyed peacock variety displays soft cameo coloration with white eyes.</p>'
  },
  'cameo-silver-pied': {
    title: 'Cameo Silver Pied | Cameo Arlequim Prateado',
    content: '<h2>Cameo Silver Pied</h2><p>Beautiful cameo peacock with silver pied pattern.</p>'
  },
  'cameo-pied-white-eyed': {
    title: 'Cameo Pied White-Eyed | Cameo Arlequim White-eyed',
    content: '<h2>Cameo Pied White-Eyed</h2><p>Cameo peacock variety with pied pattern and white eyes.</p>'
  },
  'cameo-black-shoulder-pied-white-eyed': {
    title: 'Cameo Black Shoulder Pied White-Eyed',
    content: '<h2>Cameo Black Shoulder Pied White-Eyed</h2><p>Cameo variety featuring black shoulder, pied pattern, and white eyes.</p>'
  },
  'cameo-black-shoulder-silver-pied': {
    title: 'Cameo Black Shoulder Silver Pied',
    content: '<h2>Cameo Black Shoulder Silver Pied</h2><p>Cameo peacock with black shoulder and silver pied markings.</p>'
  },
  'dark-silver-pied': {
    title: 'Dark Silver Pied | Arlequim Prateado Escuro',
    content: '<h2>Dark Silver Pied</h2><p>A striking peacock variety with dark silver pied coloration.</p>'
  },
  'india-blue-pied-white-eyed': {
    title: 'India Blue Pied White-Eyed | Arlequim White-eyed',
    content: '<h2>India Blue Pied White-Eyed</h2><p>Classic India Blue peacock with pied pattern and white eyes.</p>'
  },
  'india-blue-silver-pied': {
    title: 'India Blue Silver Pied | Arlequim Prateado',
    content: '<h2>India Blue Silver Pied</h2><p>India Blue variety featuring silver pied pattern.</p>'
  },
  'opal-white-eyed': {
    title: 'Opal White-Eyed | Cinzento white-eyed',
    content: '<h2>Opal White-Eyed</h2><p>Opal peacock variety with distinctive white eyes.</p>'
  },
  'opal-silver-pied': {
    title: 'Opal Silver Pied | Cinzento Arlequim Prateado',
    content: '<h2>Opal Silver Pied</h2><p>Opal variety featuring silver pied markings.</p>'
  },
  'prussian-blue-black-shoulder': {
    title: 'Prussian Blue Black Shoulder | Azul da Prússia Asa Negra',
    content: '<h2>Prussian Blue Black Shoulder</h2><p>Prussian Blue peacock with black shoulder pattern.</p>'
  },
  'raw-umber-black-shoulder': {
    title: 'Raw Umber Black Shoulder | Raw Umber Asa Negra',
    content: '<h2>Raw Umber Black Shoulder</h2><p>Raw Umber variety featuring black shoulder pattern.</p>'
  },
  'spalding-pied': {
    title: 'Spalding Pied | Spalding Arlequim',
    content: '<h2>Spalding Pied</h2><p>Spalding peacock variety with pied pattern.</p>'
  },
  'spalding-silver-pied': {
    title: 'Spalding Silver Pied | Spalding Arlequim Prateado',
    content: '<h2>Spalding Silver Pied</h2><p>Spalding variety with silver pied markings.</p>'
  }
};

const PeacockVarietyPage = () => {
  const { variety } = useParams();
  const varietyInfo = peacockVarieties[variety] || {
    title: 'Peacock Variety',
    content: '<h2>Peacock Variety</h2><p>Information about this peacock variety is available at Quintal Pavos.</p>'
  };

  return (
    <div className="quintal-pavos">
      <div className="foliage-background">
        <div className="foliage-left"></div>
        <div className="foliage-right"></div>
      </div>

      <div className="main-content">
        <Header menuItems={menuItems} />
        
        <div className="article-page">
          <div className="article-header">
            <img 
              src="https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg" 
              alt={varietyInfo.title} 
              className="article-header-image" 
            />
            <div className="article-header-overlay">
              <h1 className="article-title">{varietyInfo.title}</h1>
            </div>
          </div>
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: varietyInfo.content }} />
          
          <div className="article-content">
            <h3>Contacto</h3>
            <p>Para mais informações sobre disponibilidade e características específicas desta variedade:</p>
            <p>Email: <a href="mailto:caritaquintalpavos@gmail.com">caritaquintalpavos@gmail.com</a></p>
            <p>Telefone: +351 914 558 518</p>
          </div>
          
          <div className="article-navigation">
            <Link to="/pavoes" className="back-link">← Voltar para Pavões</Link>
          </div>
        </div>
      </div>

      <Footer 
        pavoes={footerPavoes} 
        links={footerLinks} 
        contact={contactInfo} 
      />
    </div>
  );
};

export default PeacockVarietyPage;
