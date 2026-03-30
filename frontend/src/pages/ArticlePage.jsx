import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuItems, footerPavoes, footerLinks, contactInfo } from '../mock';
import '../styles/ArticlePage.css';

// Extended article content
const articleContent = {
  'cites': {
    title: 'CITES',
    image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
    content: `
      <h2>Informação sobre CITES</h2>
      <h3>Pavões da espécie Pavo cristatus</h3>
      <h4>Anexos IIIC da CITES</h4>
      
      <p>A espécie Pavo cristatus, sendo dos Anexos IIIC da CITES, tal como o ponto 1 do Artigo 15º do Decreto-Lei 121/2017, refere, "A detenção de um espécime de uma espécie incluída nos anexos B ou C do Regulamento necessita de um <strong>certificado</strong> da União Europeia para detenção do espécime, emitido pela autoridade administrativa territorialmente competente."</p>
      
      <h4>Artigo 15.º</h4>
      <p><strong>Detenção de espécimes de espécies dos anexos B e C</strong></p>
      
      <p>1 — A detenção de um espécime de uma espécie incluída nos anexos B ou C do Regulamento necessita de um certificado da União Europeia para detenção do espécime, emitido pela autoridade administrativa territorialmente competente.</p>
      
      <p>2 — A emissão do certificado referido no número anterior implica a apresentação do certificado da União Europeia original, caso exista, e do documento que comprove a transferência de propriedade do espécime, com a indicação específica dos seguintes elementos:</p>
      
      <ul>
        <li>a) Número de registo nacional CITES, exceto quando o cedente não se encontre sujeito a tal registo;</li>
        <li>b) Nome científico da espécie do espécime;</li>
        <li>c) Marca individual do espécime, nomeadamente anilha inviolável, microchip, brinco, tatuagem ou outra;</li>
        <li>d) Referência ao documento CITES ou marca dos progenitores;</li>
        <li>e) Nome, morada e número de identificação fiscal ou número de registo nacional CITES do novo proprietário.</li>
      </ul>
      
      <p>3 — Para efeitos do número anterior, no caso de um espécime vivo com origem noutro Estado membro da União Europeia, a emissão do certificado, quando não exista identificação do documento CITES desse espécime, depende da apresentação de documento de cedência ou de transmissão de propriedade, nomeadamente fatura, que mencione expressamente o novo proprietário e a origem em cativeiro do espécime num Estado da União Europeia que tenha regulamentado o estatuto de criador ou equivalente.</p>
      
      <p>4 — Estão isentos da necessidade de certificado para a detenção os espécimes de espécies incluídas nos anexos B ou C do Regulamento pertencentes a coleções registadas e atualizadas, desde que a respetiva espécie já esteja presente na coleção e tenha origem portuguesa.</p>
      
      <p>5 — Sempre que um espécime de uma espécie incluída nos anexos B ou C do Regulamento entra numa coleção onde essa espécie não existia, é necessária a emissão da documentação indicada no n.º 1.</p>
      
      <p>6 — As licenças de importação para os espécimes de espécies incluídas no anexo B do Regulamento, bem como as notificações de importação para os espécimes de espécies incluídas no anexo C, garantem ao importador a legalidade da detenção desses espécimes durante um prazo de dois meses após a data do ato de importação, findo o qual é necessário um certificado da União Europeia para os espécimes detidos.</p>
      
      <p><strong>Fonte:</strong> PROCEDIMENTOS DECORRENTES DA APLICAÇÃO DA PORTARIA N.º 85/2018, DE 27 DE MARÇO, E DO REGIME JURÍDICO DA CONVENÇÃO DE WASHINGTON – CITES (DECRETO-LEI N.º 121/2017, DE 20 DE SETEMBRO)</p>
    `
  },
  'quintal-pavos': {
    title: 'Quintal Pavos',
    image: 'https://images.unsplash.com/photo-1578885564199-db62248858cf',
    content: `
      <h2>Welcome to Quintal Pavos</h2>
      
      <p>Quintal Pavos is a peafowl farm. We accomplish the norms of animal welfare and the biosafety actions demanded by law, for this kind of animal exploration.</p>
      
      <p>We worry about the well-being of our birds and, therefore, all installations were projected in order to satisfy the necessities of the captive birds. Adequate dimensioning to spaces, shelters, floor type, feeding locals, places to sleep and also the application of environmental enrichment measures are points that we do not ignore.</p>
      
      <p>We maintain our birds the wealthiest way possible and for that we rely on the help of our veterinary assistant, Dr. Luís Carrilho from Vetsul. We have a plan of veterinary prophylaxis that we apply and adjust to the sanitary state evolution of the animals over time.</p>
      
      <h3>A breeding with space and quality is our motto.</h3>
      
      <p>Over the years dedicated to the peafowl breeding have made crossings, selection and improvement based on genetic knowledge to show peafowls with unique plumage characteristics, regarding color and pattern.</p>
      
      <p>Follow our website, we will make updates regularly and with <strong>News</strong>. You may have the chance to watch the main events on Quintal Pavos and still the birds from our breeding that we have available for sale or hand over.</p>
      
      <p>Ask for information about the birds we breed, whenever you like, through our contacts, preferably by email, <strong>caritaquintalpavos@gmail.com</strong>.</p>
      
      <hr>
      
      <h2>Bem vindos ao Quintal Pavos</h2>
      
      <p>O Quintal Pavos é uma exploração de pavões. Cumprimos as normas de bem-estar animal e as medidas de biossegurança exigidas por lei, para este tipo de exploração animal.</p>
      
      <p>Preocupamo-nos com o bem-estar das nossas aves, e por isso, todas as instalações foram projetadas de modo a satisfazer as necessidades das aves em cativeiro. Dimensionamente adequado dos espaços, abrigos, tipo de pavimento, locais de alimentação, locais para pernoitarem e também a aplicação de medidas de enriquecimento ambiental, são pontos que não descuramos.</p>
      
      <p>Mantemos as nossas aves o mais saudáveis possíveis e para isso contamos com a ajuda do nosso veterinário assistente, o Dr. Luís Carrilho da Vetsul. Temos um plano de profilaxia veterinária que aplicamos e vamos ajustamos face à evolução do estado sanitário dos animais ao longo do tempo.</p>
      
      <h3>Uma criação com espaço e qualidade é o nosso lema.</h3>
      
      <p>Ao longo dos anos dedicados à criação de pavões temos feito cruzamentos, seleção e melhoramento com base em conhecimentos de genética, para conseguir pavões com caracteríticas únicas de plumagem, relativamente à cor e padrão.</p>
      
      <p>Acompanhe o nosso site, faremos atualizações regulares e com <strong>Novidades</strong>. Poderá ainda ver os acontecimentos a destacar no Quintalapavos e ainda as aves da nossa criação que temos disponíveis para venda ou cedência.</p>
      
      <p>Através dos nossos contactos, preferencialmente por email, caritaquintalpavos@gmail.com, sempre que desejar, solicite informação sobre as aves que criamos.</p>
      
      <h3>Enviamos para todo o país por transportadora.</h3>
    `
  },
  'cisne-de-pescoco-preto': {
    title: 'Cisne-de-pescoço-preto',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Black-necked_swan_%28Cygnus_melancoryphus%29_Santiago.jpg',
    content: `
      <h2>Cisne-de-pescoço-preto</h2>
      
      <p>O cisne-de-pescoço-preto é uma ave anseriforme da família Anatidae.</p>
      
      <p>É o único cisne sul-americano.</p>
      
      <h3>Nome Científico</h3>
      
      <p>O seu nome científico significa: de <em>Cygnus</em> = nome específico deste gênero (Linnaeus(1758)); e do (grego) <em>melas</em> = preto; e <em>koruphos</em> = cabeça; <em>melanocoryphus</em> = cabeça preta. ⇒ Cisne de cabeça preta.</p>
      
      <h3>Características</h3>
      
      <p>Ave de rara beleza, plumagem totalmente branca, com o pescoço e a cabeça negros. Vive em bandos e nidifica dentro das lagoas, longe das margens. Ao nascer, os filhotes apresentam penugem branco-acinzentada. Vive aproximadamente 25 anos.</p>
      
      <h3>Alimentação</h3>
      
      <p>Alimenta-se de vegetais e invertebrados aquáticos. É onivoro. Em cativeiro podem ser alimentados com misturas de cereais, um alimento composto de formula ajustada às sua necessidades e deve também fazer parte da dieta algum alimento verde.</p>
      
      <h3>Reprodução</h3>
      
      <p>O ninho é construído pelo casal. A postura varia entre os 3 e os 6 ovos que eclodem após 35 dias de incubação.</p>
      
      <p><em>Fonte: www.wikiaves.com.br/wiki/cisne-de-pescoco-preto</em></p>
    `
  },
  'prussian-blue-azul-da-prussia': {
    title: 'Prussian Blue | Azul da Prússia',
    image: 'https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg',
    content: `
      <h2>Origin of the Prussian Blue Peafowl</h2>
      
      <p>In the year of 2008, Cezar Gomes, dentist and ornamental birds' breeder, acquired in our peafowl exploration, Quintal Pavos, a couple of Cameo peafowls and another of Bronze Cream, both at the age of 1. When they turned 2, by coincidence, one peafowl of each couple died unexpectedly, and a Bronze Cream male and a Cameo female were the only animals we could keep alive.</p>
      
      <p>This all happened in the start of the breeding season in 2010 and, in this circumstances, Cezar Gomes, considering that phenotypically, both examples of peafowls had similarities in their color, decided to mate the Bronze Cream male with the Cameo female.</p>
      
      <h3>First Generation</h3>
      
      <p>In their first year of breeding, the peafowl couple with only 2 years old hatched 3 eggs that gave life to one male and two females. Phenotypically, the newborn peafowls were very similar to the Blue Peafowl offspring, but the young peacock showed a different dark tone over its neck.</p>
      
      <p>Whilst the three offspring grew old, we noticed that the male peafowl began to show a different color tone from a common blue peafowl not only over its neck, but now all over its tail and wings (visibly darker) too.</p>
      
      <h3>Characterization</h3>
      
      <p>After the observation of these birds, it seemed from the beginning something similar to a variety that originated in the USA, the Midnight peafowl. For this reason, we talked to many different experienced breeders, members of the United Peafowl Association that confirmed that these examples, in spite of the similarities with the Midnight variety, they have distinctive traits.</p>
      
      <p>We decided to send pictures and plumage samples of these animals to a color specialist in order to classify them. From this job, orchestrated by Dra. Patrícia Noronha da Costa, resulted a name we now give to all birds with these phenotypical traits: the <strong>Prussian Blue Peafowl</strong>.</p>
      
      <p>It is satisfying to know that Quintal Pavos in an open collaboration with all our friends will continue to do our jobs on breeding and preserving the distinct peafowl varieties.</p>
      
      <p>The passion we have for these animals, for all these years, already allowed us to jump on a work that gave life to the Raw Umber variety, which is starting to be recognized worldwide, and now for the Prussian Blue Peafowl.</p>
      
      <p><em>João Nuno Carita - 26/07/2019</em></p>
      
      <hr>
      
      <h2>Origem do Pavão Azul da Prússia</h2>
      
      <p>No ano de 2008, Cezar Gomes, médico dentista e criador de aves ornamentais, adquiriu na nossa exploração de pavões, Quintalpavos, um casal de pavões Cameo e um casal de pavões Bronze Creme.</p>
      
      <p>Desde 2010 até 2019 continuamos a manter esta variedade que todos os anos deu exclusivamente origem a descendentes iguais aos progenitores.</p>
      
      <p>Deste trabalho, realizado pela Doutora Patrícia Noronha da Costa, resultou o nome que passamos agora a atribuir a todas as aves com estas características fenótipicas: <strong>o Pavão Azul da Prússia</strong>.</p>
      
      <p>É com muita satisfação que o Quintalpavos em colaboração aberta com todos os seus amigos continuamos a fazer o nosso trabalho, de criação e preservação das distintas variedades de pavões.</p>
    `
  },
  'fenix-branco': {
    title: 'Fénix Branco',
    image: 'https://images.unsplash.com/photo-1592849151221-89a0966b8a37',
    content: `
      <h2>Fénix Branco</h2>
      
      <p>Disponíveis casais de fènix branco de 2019.</p>
      
      <p>A variedade de Fénix Branco que criamos é também conhecida por Fénix Moderno Alemão, por serem aves que ao longo dos últimos anos tem sido seleccionadas e melhoradas por criadores alemães. Trata-se de uma variedade anã em que os machos pesam de 800 gr a 900 gr e as fêmeas 600 gr a 800 gr. Uma das principais características destas aves é a de os machos terem as penas da cauda muito compridas, finas e estreitas. A plumagem do galo e da galinha é completamente branca.</p>
      
      <p>Informação mais detalhada sobre o padrão desta raça, e que nos serve como referência no trabalho de selecção e melhoramente da raça, encontra-se no livro "Gallinas Enanas de Raza" do autor Amadeu Francesch Vidal, Publicações Arte Avícola, Espanha</p>
    `
  },
  'novidades': {
    title: 'News / Novidades',
    image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
    content: `
      <h2>News</h2>
      
      <p><strong>Available:</strong></p>
      <ul>
        <li>Couple Cameo Black Shoulder White-eye</li>
        <li>Couple Prussian Blue Black Shoulder</li>
        <li>Female Purple</li>
        <li>Male India Blue Black Shoulder Pied White-eye</li>
      </ul>
      
      <hr>
      
      <h2>Novidades</h2>
      
      <p><strong>Temos disponíveis:</strong></p>
      <ul>
        <li>Casal Cameo Asa Negra White-eye de 2022</li>
        <li>Casal Azul da Prussia Asa Negra de 2022</li>
        <li>Fêmea Purpura de 2022</li>
        <li>Macho Azul Asa Negra Arlequim White-eye de 2022</li>
      </ul>
      
      <h3>Prussian Blue Blackshoulder</h3>
      
      <p>Available two adult male Prussian Blue Black Shoulder.</p>
      
      <p>Disponíveis dois machos aduldos Azuis de Prussia Asa Negra.</p>
    `
  },
  'artigos': {
    title: 'Artigos',
    image: 'https://images.unsplash.com/photo-1559048958-4d1a3dc247d1',
    content: `
      <h2>Artigos / Articles</h2>
      
      <p>Publicações e documentos sobre criação de pavões:</p>
      
      <ul>
        <li>Arte Avicola – en busca del pavo real purpura arlequin (.pdf)</li>
        <li>Arte Avicola – la cria de los pavos reales- la reproduccion (.pdf)</li>
        <li>Arte Avicola – la cría de los pavos reales (i) un mundo por descubrir (.pdf)</li>
        <li>Arte Avicola – la cría de los pavos reales (ii) las instalaciones (.pdf)</li>
        <li>Arte Avicola – preocupacion por la salud de nuestros animales (.pdf)</li>
        <li>Arte Avicola – la alimentación en la cría de los pavos reales (.pdf)</li>
        <li>Aviornis Internacional – Pavo real Arlequín plateado (.pdf)</li>
        <li>Aviornis Internacional – pavo real raw umber (.pdf)</li>
        <li>Meleagris ocellata (.pdf)</li>
        <li>Prussian Blue Peafowl (.pdf)</li>
      </ul>
      
      <p>Para acesso aos artigos completos, entre em contacto connosco.</p>
    `
  }
};

const ArticlePage = () => {
  const { slug } = useParams();
  const location = window.location.pathname.replace('/', '');
  const articleSlug = slug || location || 'quintal-pavos';
  const article = articleContent[articleSlug] || articleContent['quintal-pavos'];

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
            <img src={article.image} alt={article.title} className="article-header-image" />
            <div className="article-header-overlay">
              <h1 className="article-title">{article.title}</h1>
            </div>
          </div>
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="article-navigation">
            <Link to="/" className="back-link">← Voltar à Página Inicial</Link>
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

export default ArticlePage;
