import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, BookOpen } from 'lucide-react';
import { personalInfo, projects, blogPosts } from '../mock/mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={personalInfo.heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 font-light">
              {personalInfo.title}
            </p>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Link to="/projects">
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Projelerimi Gör
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-6 text-lg">
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">{projects.length}+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-slate-600">Tamamlanan Projeler</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">{blogPosts.length}+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-slate-600">Blog Yazıları</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">3+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-slate-600">Yıllık Deneyim</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Öne Çıkan Projeler</h2>
            <p className="text-xl text-slate-600">Son dönemde üzerinde çalıştığım projeler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <Card key={project.id} className="overflow-hidden border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">{project.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Tüm Projeleri Gör
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Son Yazılar</h2>
            <p className="text-xl text-slate-600">Teknoloji ve kişisel gelişim üzerine düşüncelerim</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{post.category}</span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Tüm Yazıları Gör
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
