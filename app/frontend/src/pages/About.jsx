import React from 'react';
import { Calendar, Award, Target, Heart } from 'lucide-react';
import { personalInfo, timelineEvents } from '../mock/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'achievement':
        return 'bg-blue-600';
      case 'project':
        return 'bg-green-600';
      case 'learning':
        return 'bg-purple-600';
      case 'career':
        return 'bg-orange-600';
      default:
        return 'bg-blue-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-5 h-5" />;
      case 'project':
        return <Target className="w-5 h-5" />;
      case 'learning':
        return <Heart className="w-5 h-5" />;
      case 'career':
        return <Calendar className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
                Hakkımda
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Teknoloji ve yenilik tutkusuyla, kullanıcı deneyimini merkeze alarak
                projeler geliştiriyorum. Her proje, öğrenme ve büyüme için bir fırsat.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt="Murat Akar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-slate-900 rounded-3xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Değerlerim
            </h2>
            <p className="text-xl text-slate-600">
              İş yaparken beni yönlendiren temel prensipler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Kalite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Her projeye en yüksek kalite standartlarıyla yaklaşıyorum. Detaylara özen gösteriyor ve mükemmelliği hedefliyorum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Tutku</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Yaptığım işe tutkuyla bağlıyım. Bu tutku, projelerimi daha yaratıcı ve etkili kılıyor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Yenilik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Sürekli öğreniyor ve yeni teknolojileri keşfediyorum. Yenilikçi çözümler üretmeyi seviyorum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Zaman Çizelgesi
            </h2>
            <p className="text-xl text-slate-600">
              Profesyonel yolculuğumda önemli dönüm noktaları
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-16 h-16 ${getTypeColor(event.type)} rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-110`}>
                    {getTypeIcon(event.type)}
                  </div>

                  {/* Event Card */}
                  <Card className="border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-blue-600">{event.year}</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full capitalize">
                          {event.type}
                        </span>
                      </div>
                      <CardTitle className="text-2xl text-slate-900">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
