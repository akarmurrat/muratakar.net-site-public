import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projects } from '../mock/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Projelerim
          </h1>
          <p className="text-xl text-slate-600">
            Üzerinde çalıştığım ve tamamladığım projeler
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center mb-12 flex-wrap gap-3">
          <Filter className="w-5 h-5 text-slate-600" />
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Görüntüle
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">{project.title}</CardTitle>
                <CardDescription className="text-slate-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-4">{project.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
