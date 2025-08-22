import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Download, Mail, BookOpen, TrendingUp, Target } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos los artículos' },
    { id: 'strategy', label: 'Estrategia Digital' },
    { id: 'performance', label: 'Marketing Performance' },
    { id: 'development', label: 'Desarrollo Web' },
    { id: 'tips', label: 'Tips & Errores' }
  ];

  const articles = [
    {
      id: 1,
      title: '5 errores que están matando tu ROI en Google Ads (y cómo solucionarlos)',
      excerpt: 'La mayoría de empresas pierde dinero en Google Ads por estos errores evitables. Te mostramos cómo identificarlos y corregirlos para multiplicar tu retorno.',
      category: 'performance',
      author: 'Ana Torres',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 2,
      title: 'El framework DSA360: Cómo diagnosticar tu negocio digital en 7 pasos',
      excerpt: 'Nuestra metodología probada para evaluar completamente la presencia digital de cualquier negocio y crear un plan de crecimiento efectivo.',
      category: 'strategy',
      author: 'Diego Sánchez',
      date: '2024-01-10',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 3,
      title: 'Landing pages que convierten: 15 elementos que no pueden faltar',
      excerpt: 'Análisis detallado de los elementos críticos que transforman visitantes en clientes. Con ejemplos reales y mejores prácticas.',
      category: 'development',
      author: 'Santiago López',
      date: '2024-01-05',
      readTime: '10 min',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 4,
      title: 'Por qué tu e-commerce no vende (aunque tenga mucho tráfico)',
      excerpt: 'Las razones ocultas por las que sitios con buen tráfico no convierten y cómo optimizar cada punto del funnel de compra.',
      category: 'tips',
      author: 'Ana Torres',
      date: '2023-12-28',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 5,
      title: 'Marketing automation: Cómo vender mientras dormís',
      excerpt: 'Guía completa para automatizar tu marketing y crear secuencias que nutren leads y generan ventas 24/7.',
      category: 'strategy',
      author: 'Diego Sánchez',
      date: '2023-12-20',
      readTime: '15 min',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 6,
      title: 'SEO técnico: Los fundamentos que Google premia en 2024',
      excerpt: 'Actualización completa de los factores técnicos más importantes para el posicionamiento orgánico este año.',
      category: 'development',
      author: 'Santiago López',
      date: '2023-12-15',
      readTime: '11 min',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  const resources = [
    {
      title: 'Checklist: Auditoría de Google Ads en 30 puntos',
      description: 'Lista completa para revisar y optimizar tus campañas publicitarias paso a paso',
      type: 'PDF',
      icon: Download
    },
    {
      title: 'Template: Calendario de contenido para redes sociales',
      description: 'Planificá 3 meses de contenido con este template editable y probado',
      type: 'Google Sheets',
      icon: Download
    },
    {
      title: 'Guía: Copywriting para e-commerce que convierte',
      description: 'Fórmulas y ejemplos para escribir textos que vendan en tu tienda online',
      type: 'PDF',
      icon: Download
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const getCategoryIcon = (category: string) => {
    const icons = {
      strategy: Target,
      performance: TrendingUp,
      development: BookOpen,
      tips: User
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      strategy: 'text-blue-600 bg-blue-100',
      performance: 'text-emerald-600 bg-emerald-100',
      development: 'text-purple-600 bg-purple-100',
      tips: 'text-orange-600 bg-orange-100'
    };
    return colors[category as keyof typeof colors] || 'text-slate-600 bg-slate-100';
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Blog & recursos
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              para hacer crecer tu negocio
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, estrategias y herramientas prácticas para dominar el marketing digital. 
            Todo basado en experiencia real con más de 150 proyectos.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-4">DSA Insights Newsletter</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Guías, consejos y casos reales para mejorar tu negocio sin fórmulas mágicas.
              <strong>  Sumate al newsletter semanal con +2.500 emprendedores.</strong>
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 bg-white border-0 focus:ring-4 focus:ring-white/20 focus:outline-none"
              />
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Suscribirme gratis
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              ✓ Sin spam ✓ Cancelá cuando quieras ✓ Solo contenido de valor
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Artículos destacados</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => {
                const CategoryIcon = getCategoryIcon(article.category);
                return (
                  <article key={article.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 group">
                    <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                          <CategoryIcon className="w-3 h-3" />
                          <span>{categories.find(c => c.id === article.category)?.label}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                        {article.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.date).toLocaleDateString('es-AR')}</span>
                          </div>
                          <span>{article.readTime} lectura</span>
                        </div>
                        
                        <button className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                          <span>Leer más</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularArticles.map((article) => {
            const CategoryIcon = getCategoryIcon(article.category);
            return (
              <article key={article.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 group">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      <CategoryIcon className="w-3 h-3" />
                      <span>{categories.find(c => c.id === article.category)?.label}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span>{article.author}</span>
                      <span>{new Date(article.date).toLocaleDateString('es-AR')}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Recursos gratuitos
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Templates, checklists y guías descargables para implementar estrategias inmediatamente en tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <button className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors duration-200">
                    <Download className="w-4 h-4" />
                    <span>Descargar {resource.type}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;