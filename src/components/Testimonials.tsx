import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      company: 'Boutique Luna',
      role: 'Fundadora',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'ecommerce',
      testimonial: 'DSA transformó completamente nuestro negocio. En 6 meses pasamos de vender solo presencial a generar el 70% de nuestros ingresos online. Su estrategia de paid media fue clave.',
      results: [
        { metric: 'Ventas online', value: '+340%' },
        { metric: 'ROI publicidad', value: '4.2x' },
        { metric: 'Clientes nuevos', value: '+280/mes' }
      ],
      project: 'E-commerce + Paid Media',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      company: 'Servicios Integrales CM',
      role: 'Director Comercial',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'services',
      testimonial: 'Necesitábamos generar leads calificados para nuestro servicio B2B. El diagnóstico DSA360 identificó oportunidades que no veíamos, y las campañas generaron resultados desde el primer mes.',
      results: [
        { metric: 'Leads calificados', value: '+180/mes' },
        { metric: 'Costo por lead', value: '-45%' },
        { metric: 'Conversión web', value: '12.3%' }
      ],
      project: 'Web + Lead Generation',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      company: 'FitNutrition',
      role: 'CEO',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'health',
      testimonial: 'Lanzamos nuestro programa de nutrición online con DSA. Su pack Full Lanzamiento incluyó todo: web, e-commerce, marketing automation y paid media. Resultados increíbles.',
      results: [
        { metric: 'Suscriptores', value: '1,200+' },
        { metric: 'Revenue mensual', value: '$180k' },
        { metric: 'LTV promedio', value: '$2,400' }
      ],
      project: 'Lanzamiento Digital Completo',
      rating: 5
    },
    {
      id: 4,
      name: 'Roberto Silva',
      company: 'Constructora Silva & Hijos',
      role: 'Gerente General',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'construction',
      testimonial: 'Sector muy tradicional, pero DSA nos ayudó a digitalizarnos inteligentemente. Ahora captamos clientes premium a través de nuestra web y campañas segmentadas.',
      results: [
        { metric: 'Proyectos nuevos', value: '+8/mes' },
        { metric: 'Ticket promedio', value: '+65%' },
        { metric: 'Consultas web', value: '+450%' }
      ],
      project: 'Digitalización B2B',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Moda',
      challenge: 'Ventas estancadas, ROI negativo en publicidad',
      solution: 'Rediseño completo + estrategia paid media optimizada',
      results: ['340% incremento en ventas', 'ROI 4.2x en publicidad', '60% reducción CAC'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      client: 'SaaS B2B',
      challenge: 'Falta de leads calificados, conversión baja',
      solution: 'Landing pages optimizadas + funnel de nurturing',
      results: ['180 leads/mes calificados', '12.3% conversión web', '45% reducción CPL'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      client: 'Servicios Profesionales',
      challenge: 'Dependencia del boca a boca, crecimiento lento',
      solution: 'Presencia digital + content marketing + SEO',
      results: ['300% más consultas web', '85% clientes digitales', 'Posición #1 Google'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos los casos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'services', label: 'Servicios' },
    { id: 'health', label: 'Salud/Fitness' },
    { id: 'construction', label: 'Construcción' }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Casos de éxito
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              que hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Resultados reales de negocios reales. Cada proyecto con métricas concretas 
            y crecimiento sostenible en el tiempo.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setActiveTestimonial(0);
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-slate-800 leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.testimonial}"
                </blockquote>

                <div className="flex items-center space-x-4 mb-8">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-slate-600">
                      {currentTestimonial.role} • {currentTestimonial.company}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Proyecto: {currentTestimonial.project}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === activeTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <ArrowLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Resultados obtenidos
                </h3>
                <div className="space-y-6">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600 font-medium mb-1">
                            {result.metric}
                          </p>
                          <p className="text-3xl font-bold text-slate-900">
                            {result.value}
                          </p>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Casos destacados por industria
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{study.client}</h4>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="text-sm text-red-600 font-semibold mb-2">DESAFÍO</h5>
                    <p className="text-slate-700 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-sm text-blue-600 font-semibold mb-2">SOLUCIÓN</h5>
                    <p className="text-slate-700 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm text-emerald-600 font-semibold mb-3">RESULTADOS</h5>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-slate-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Resultados que respaldan nuestra metodología
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-slate-300">Proyectos exitosos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">4.8x</div>
              <div className="text-slate-300">ROI promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-slate-300">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$2.5M</div>
              <div className="text-slate-300">Facturación generada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;