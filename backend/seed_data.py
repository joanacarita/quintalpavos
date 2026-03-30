import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Seed data
articles_data = [
    {
        "id": "1",
        "title": "CITES",
        "description": "Informação sobre CITES Pavões da espécie Pavo cristatus Anexos IIIC da CITES A espécie Pavo cristatus, sendo dos Anexos IIIC da CITES, tal como o […]",
        "content": "Informação sobre CITES Pavões da espécie Pavo cristatus Anexos IIIC da CITES. A espécie Pavo cristatus, sendo dos Anexos IIIC da CITES, requer documentação específica para criação e comercialização.",
        "image": "https://images.unsplash.com/photo-1559048958-4d1a3dc247d1",
        "category": "cites",
        "slug": "cites",
        "featured": False,
        "showInSlider": True,
        "comments": 0
    },
    {
        "id": "2",
        "title": "Quintal Pavos",
        "description": "Welcome to Quintal Pavos.                                            […]",
        "content": "Welcome to Quintal Pavos. Our passion is breeding and raising beautiful peafowl and other exotic birds. We specialize in various peacock varieties including India Blue, Prussian Blue, and White Spalding.",
        "image": "https://images.unsplash.com/photo-1578885564199-db62248858cf",
        "category": "about",
        "slug": "quintal-pavos",
        "featured": False,
        "showInSlider": True,
        "comments": 0
    },
    {
        "id": "3",
        "title": "Cisne-de-pescoço-preto",
        "description": "O cisne-de-pescoço-preto é uma ave anseriforme da família Anatidae. É o único cisne sul-americano. Nome Científico O seu nome científico significa: de Cygnus = nome específico deste gênero […]",
        "content": "O cisne-de-pescoço-preto (Cygnus melancoryphus) é uma ave anseriforme da família Anatidae. É o único cisne sul-americano. Esta espécie é nativa da América do Sul e pode ser encontrada em lagos, lagoas e estuários.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Black-necked_swan_%28Cygnus_melancoryphus%29_Santiago.jpg",
        "category": "cisnes",
        "slug": "cisne-de-pescoco-preto",
        "featured": False,
        "showInSlider": True,
        "comments": 0
    },
    {
        "id": "4",
        "title": "Prussian Blue | Azul da Prússia",
        "description": "Origin of the Prussian Blue Peafowl                                        […]",
        "content": "The Prussian Blue Peafowl is a stunning color mutation of the India Blue. This variety features deeper blue tones and distinctive coloring patterns. The Prussian Blue mutation was first developed through selective breeding programs.",
        "image": "https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg",
        "category": "pavoes",
        "slug": "prussian-blue-azul-da-prussia",
        "featured": False,
        "showInSlider": True,
        "comments": 0
    },
    {
        "id": "5",
        "title": "India Blue | Azul",
        "description": "India Blue Native to India, the India Blue Peafowl is, without doubt, the most widespread and known Peafowl in the world. This is also true […]",
        "content": "Native to India, the India Blue Peafowl is, without doubt, the most widespread and known Peafowl in the world. This is the wild-type coloration from which all other color mutations have been derived. The males display magnificent blue and green plumage with distinctive eye spots on their train feathers.",
        "image": "https://images.pexels.com/photos/7085764/pexels-photo-7085764.jpeg",
        "category": "pavoes",
        "slug": "india-blue-azul",
        "featured": False,
        "showInSlider": True,
        "comments": 0
    },
    {
        "id": "6",
        "title": "News / Novidades",
        "description": "Latest updates from Quintal Pavos breeding program",
        "content": "Stay updated with the latest news and developments at Quintal Pavos. We regularly share updates about new hatches, breeding success stories, and events.",
        "image": "https://images.unsplash.com/photo-1559048958-4d1a3dc247d1",
        "category": "news",
        "slug": "news-novidades",
        "featured": True,
        "showInSlider": False,
        "comments": 0
    },
    {
        "id": "7",
        "title": "Cisne-de-pescoço-preto",
        "description": "Black-necked swan breeding information",
        "content": "Detailed information about breeding and caring for black-necked swans at Quintal Pavos.",
        "image": "https://images.unsplash.com/photo-1727586198137-3932d7deef01",
        "category": "cisnes",
        "slug": "cisne-de-pescoco-preto-news",
        "featured": False,
        "showInSlider": False,
        "comments": 0
    },
    {
        "id": "8",
        "title": "Fénix Branco",
        "description": "White Phoenix peacock variety information",
        "content": "The White Phoenix is a beautiful white peacock variety with distinctive features and breeding characteristics.",
        "image": "https://images.unsplash.com/photo-1592849151221-89a0966b8a37",
        "category": "pavoes",
        "slug": "fenix-branco",
        "featured": False,
        "showInSlider": False,
        "comments": 0
    },
    {
        "id": "9",
        "title": "Violet | Violeta",
        "description": "Violet peacock variety - a stunning purple mutation",
        "content": "The Violet peacock is one of the most sought-after color mutations, featuring beautiful purple and violet tones throughout the plumage.",
        "image": "https://images.pexels.com/photos/5399945/pexels-photo-5399945.jpeg",
        "category": "pavoes",
        "slug": "violet-violeta",
        "featured": False,
        "showInSlider": False,
        "comments": 0
    },
    {
        "id": "10",
        "title": "Spalding White | Branco Spalding",
        "description": "White Spalding peacock breeding and care",
        "content": "The Spalding White is a hybrid variety known for its pure white plumage and larger size compared to standard peafowl.",
        "image": "https://images.unsplash.com/photo-1592849151221-89a0966b8a37",
        "category": "pavoes",
        "slug": "spalding-white-branco-spalding",
        "featured": False,
        "showInSlider": False,
        "comments": 0
    }
]

categories_data = [
    {
        "id": "cat1",
        "name": "home",
        "slug": "home",
        "displayName": "HOME",
        "label": "HOME",
        "link": "/",
        "hasSubmenu": False,
        "submenu": None,
        "order": 1
    },
    {
        "id": "cat2",
        "name": "quintal-pavos",
        "slug": "quintal-pavos",
        "displayName": "QUINTAL PAVOS",
        "label": "QUINTAL PAVOS",
        "link": "/quintal-pavos",
        "hasSubmenu": False,
        "submenu": None,
        "order": 2
    },
    {
        "id": "cat3",
        "name": "news",
        "slug": "news",
        "displayName": "NEWS / NOVIDADES",
        "label": "NEWS / NOVIDADES",
        "link": "/news",
        "hasSubmenu": False,
        "submenu": None,
        "order": 3
    },
    {
        "id": "cat4",
        "name": "pavoes",
        "slug": "pavoes",
        "displayName": "PAVÕES",
        "label": "PAVÕES",
        "link": "/pavoes",
        "hasSubmenu": True,
        "submenu": [
            {"label": "India Blue | Azul", "slug": "india-blue", "link": "/pavoes/india-blue"},
            {"label": "Prussian Blue", "slug": "prussian-blue", "link": "/pavoes/prussian-blue"},
            {"label": "Violet | Violeta", "slug": "violet", "link": "/pavoes/violet"},
            {"label": "Spalding White | Branco Spalding", "slug": "spalding-white", "link": "/pavoes/spalding-white"}
        ],
        "order": 4
    },
    {
        "id": "cat5",
        "name": "galinhas",
        "slug": "galinhas",
        "displayName": "GALINHAS",
        "label": "GALINHAS",
        "link": "/galinhas",
        "hasSubmenu": True,
        "submenu": [
            {"label": "Chickens / Galinhas", "slug": "chickens", "link": "/galinhas/chickens"},
            {"label": "Destaques", "slug": "destaques", "link": "/galinhas/destaques"}
        ],
        "order": 5
    },
    {
        "id": "cat6",
        "name": "perus",
        "slug": "perus",
        "displayName": "PERUS",
        "label": "PERUS",
        "link": "/perus",
        "hasSubmenu": False,
        "submenu": None,
        "order": 6
    },
    {
        "id": "cat7",
        "name": "cisnes",
        "slug": "cisnes",
        "displayName": "CISNES",
        "label": "CISNES",
        "link": "/cisnes",
        "hasSubmenu": True,
        "submenu": [
            {"label": "Swans / Cisnes", "slug": "swans", "link": "/cisnes/swans"},
            {"label": "Cisne-de-pescoço-preto", "slug": "pescoco-preto", "link": "/cisnes/pescoco-preto"}
        ],
        "order": 7
    },
    {
        "id": "cat8",
        "name": "artigos",
        "slug": "artigos",
        "displayName": "ARTIGOS",
        "label": "ARTIGOS",
        "link": "/artigos",
        "hasSubmenu": False,
        "submenu": None,
        "order": 8
    },
    {
        "id": "cat9",
        "name": "contacts",
        "slug": "contacts",
        "displayName": "CONTACTS",
        "label": "CONTACTS",
        "link": "/contacts",
        "hasSubmenu": False,
        "submenu": None,
        "order": 9
    }
]

settings_data = {
    "id": "settings1",
    "name": "João Nuno Carita",
    "email": "caritaquintalpavos@gmail.com",
    "phone": "+351 914 558 518",
    "siteName": "Quintal Pavos",
    "tagline": "o prazer de criar"
}

async def seed_database():
    print("🌱 Starting database seeding...")
    
    # Clear existing data
    print("🗑️  Clearing existing collections...")
    await db.articles.delete_many({})
    await db.categories.delete_many({})
    await db.site_settings.delete_many({})
    
    # Insert articles
    print("📝 Inserting articles...")
    await db.articles.insert_many(articles_data)
    print(f"✅ Inserted {len(articles_data)} articles")
    
    # Insert categories
    print("📂 Inserting categories...")
    await db.categories.insert_many(categories_data)
    print(f"✅ Inserted {len(categories_data)} categories")
    
    # Insert site settings
    print("⚙️  Inserting site settings...")
    await db.site_settings.insert_one(settings_data)
    print("✅ Inserted site settings")
    
    print("🎉 Database seeding completed successfully!")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
