"import asyncio
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

# Mock data to seed
projects_data = [
    {
        \"id\": \"1\",
        \"title\": \"E-Ticaret Platformu\",
        \"description\": \"Modern ve kullanıcı dostu bir e-ticaret web uygulaması. React ve Node.js ile geliştirildi.\",
        \"image\": \"https://images.unsplash.com/photo-1755541516450-644adb257ad0\",
        \"technologies\": [\"React\", \"Node.js\", \"MongoDB\", \"Stripe\"],
        \"category\": \"Web Development\",
        \"link\": \"#\",
        \"date\": \"2024-01\"
    },
    {
        \"id\": \"2\",
        \"title\": \"Portföy Yönetim Sistemi\",
        \"description\": \"Kullanıcıların projelerini ve portfolyolarını yönetebileceği kapsamlı bir platform.\",
        \"image\": \"https://images.unsplash.com/photo-1606211105533-0439bfecce21\",
        \"technologies\": [\"React\", \"FastAPI\", \"PostgreSQL\"],
        \"category\": \"Full Stack\",
        \"link\": \"#\",
        \"date\": \"2023-11\"
    },
    {
        \"id\": \"3\",
        \"title\": \"Mobil Uygulama Projesi\",
        \"description\": \"Cross-platform mobil uygulama geliştirme projesi. iOS ve Android destekli.\",
        \"image\": \"https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5\",
        \"technologies\": [\"React Native\", \"Firebase\", \"Redux\"],
        \"category\": \"Mobile\",
        \"link\": \"#\",
        \"date\": \"2023-08\"
    },
    {
        \"id\": \"4\",
        \"title\": \"AI Destekli Asistan\",
        \"description\": \"Yapay zeka destekli kişisel asistan uygulaması. Doğal dil işleme kullanıyor.\",
        \"image\": \"https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0\",
        \"technologies\": [\"Python\", \"TensorFlow\", \"React\"],
        \"category\": \"AI/ML\",
        \"link\": \"#\",
        \"date\": \"2023-06\"
    }
]

blog_posts_data = [
    {
        \"id\": \"1\",
        \"title\": \"Modern Web Geliştirme Trendleri 2024\",
        \"excerpt\": \"2024 yılında web geliştirme dünyasında öne çıkan teknolojiler ve trendler hakkında detaylı bir inceleme.\",
        \"content\": \"Web geliştirme dünyası sürekli değişiyor ve gelişiyor. Bu yazıda 2024 yılında öne çıkan trendleri inceleyeceğiz...\",
        \"category\": \"Teknoloji\",
        \"date\": \"2024-02-15\",
        \"readTime\": \"5 dakika\",
        \"image\": \"https://images.unsplash.com/photo-1755541516450-644adb257ad0\"
    },
    {
        \"id\": \"2\",
        \"title\": \"React Performance Optimizasyonu\",
        \"excerpt\": \"React uygulamalarında performans sorunlarını tespit etme ve çözme yöntemleri.\",
        \"content\": \"React uygulamalarınızın daha hızlı çalışması için uygulayabileceğiniz optimizasyon teknikleri...\",
        \"category\": \"Programlama\",
        \"date\": \"2024-02-10\",
        \"readTime\": \"8 dakika\",
        \"image\": \"https://images.unsplash.com/photo-1606211105533-0439bfecce21\"
    },
    {
        \"id\": \"3\",
        \"title\": \"Kişisel Gelişim ve Verimlilik\",
        \"excerpt\": \"Yazılım geliştiriciler için kişisel gelişim ve verimlilik artırma stratejileri.\",
        \"content\": \"Verimli bir yazılımcı olmanın yolları ve kişisel gelişim için ipuçları...\",
        \"category\": \"Kişisel Gelişim\",
        \"date\": \"2024-02-05\",
        \"readTime\": \"6 dakika\",
        \"image\": \"https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5\"
    }
]

calendar_events_data = [
    {
        \"id\": \"1\",
        \"title\": \"Proje Toplantısı\",
        \"description\": \"Yeni proje için ekip toplantısı\",
        \"date\": \"2024-03-20\",
        \"time\": \"14:00\",
        \"type\": \"meeting\"
    },
    {
        \"id\": \"2\",
        \"title\": \"Kod İncelemesi\",
        \"description\": \"Sprint sonrası kod review\",
        \"date\": \"2024-03-22\",
        \"time\": \"10:00\",
        \"type\": \"work\"
    },
    {
        \"id\": \"3\",
        \"title\": \"Yeni Özellik Geliştirme\",
        \"description\": \"Dashboard yeni özellik implementasyonu\",
        \"date\": \"2024-03-25\",
        \"time\": \"09:00\",
        \"type\": \"task\"
    }
]

timeline_events_data = [
    {
        \"id\": \"1\",
        \"year\": \"2024\",
        \"title\": \"Kişisel Web Sitesi Lansmanı\",
        \"description\": \"Muratakar.net adresinde modern kişisel web sitemi yayınladım.\",
        \"type\": \"achievement\"
    },
    {
        \"id\": \"2\",
        \"year\": \"2023\",
        \"title\": \"Büyük Proje Tamamlandı\",
        \"description\": \"Kapsamlı bir web uygulaması projesini başarıyla tamamladım.\",
        \"type\": \"project\"
    },
    {
        \"id\": \"3\",
        \"year\": \"2022\",
        \"title\": \"Yeni Teknolojiler\",
        \"description\": \"React ve modern JavaScript frameworklerinde uzmanlaştım.\",
        \"type\": \"learning\"
    },
    {
        \"id\": \"4\",
        \"year\": \"2021\",
        \"title\": \"Profesyonel Başlangıç\",
        \"description\": \"Yazılım geliştirme kariyerime profesyonel olarak başladım.\",
        \"type\": \"career\"
    }
]

async def seed_database():
    print(\"Starting database seeding...\")
    
    # Clear existing data
    await db.projects.delete_many({})
    await db.blog_posts.delete_many({})
    await db.calendar_events.delete_many({})
    await db.timeline_events.delete_many({})
    
    # Insert projects
    if projects_data:
        await db.projects.insert_many(projects_data)
        print(f\"✅ Inserted {len(projects_data)} projects\")
    
    # Insert blog posts
    if blog_posts_data:
        await db.blog_posts.insert_many(blog_posts_data)
        print(f\"✅ Inserted {len(blog_posts_data)} blog posts\")
    
    # Insert calendar events
    if calendar_events_data:
        await db.calendar_events.insert_many(calendar_events_data)
        print(f\"✅ Inserted {len(calendar_events_data)} calendar events\")
    
    # Insert timeline events
    if timeline_events_data:
        await db.timeline_events.insert_many(timeline_events_data)
        print(f\"✅ Inserted {len(timeline_events_data)} timeline events\")
    
    print(\"✅ Database seeding completed!\")
    client.close()

if __name__ == \"__main__\":
    asyncio.run(seed_database())
"
