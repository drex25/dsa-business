import React, { useState } from 'react';
import { Search, Globe, TrendingUp, Package, Users, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Search,
      title: 'Diagnóstico DSA360',
      subtitle: 'Análisis completo de tu negocio',
      description: 'Evaluamos tu situación actual, competencia, oportunidades y definimos la estrategia perfecta para tu crecimiento.',
      features: ['Auditoría completa', 'Análisis de competencia', 'Plan estratégico', 'Roadmap personalizado'],
      forWho: 'Emprendedores y empresas que quieren entender su posicionamiento digital',
      result: 'Estrategia clara y plan de acción para los próximos 6-12 meses',
      price: 'Desde $50.000',
      color: 'emerald'
    },
    {
      icon: Globe,
      title: 'Desarrollo Web',
      subtitle: 'Sitios que convierten visitantes en clientes',
      description: 'Creamos sitios web optimizados para conversión, con diseño profesional y tecnología de vanguardia.',
      features: ['Diseño responsive', 'Optimización SEO', 'Integración CRM', 'Analytics avanzado'],
      forWho: 'Negocios que necesitan presencia web profesional y efectiva',
      result: 'Sitio web que genera leads y ventas 24/7',
      price: 'Desde $150.000',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Marketing de Rendimiento',
      subtitle: 'Publicidad que genera ROI real',
      description: 'Campañas publicitarias optimizadas en Google Ads, Facebook e Instagram que maximizan tu retorno de inversión.',
      features: ['Gestión de campañas', 'Optimización continua', 'Reportes detallados', 'Escalamiento rentable'],
      forWho: 'Empresas que quieren invertir en publicidad con resultados medibles',
      result: 'ROI positivo y crecimiento sostenible en ventas',
      price: 'Desde $80.000 + inversión publicitaria',
      color: 'purple'
    },
    {
      icon: Package,
      title: 'Packs Combinados',
      subtitle: 'Soluciones integrales para máximo impacto',
      description: 'Combinamos servicios para crear ecosistemas digitales completos que potencian tu crecimiento.',
      features: ['Diagnóstico + Implementación', 'Estrategia + Ejecución', 'Web + Marketing', 'Soporte continuo'],
      forWho: 'Negocios que buscan transformación completa',
      result: 'Ecosistema que trabaja 24/7 para tu negocio',
      price: 'Consultar pack personalizado',
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Servicios Personalizados',
      subtitle: 'Soluciones a medida de tu negocio',
      description: 'Desarrollamos estrategias y soluciones específicas para desafíos únicos de tu industria.',
      features: ['Consultoría especializada', 'Desarrollo custom', 'Integración de sistemas', 'Soporte dedicado'],
      forWho: 'Empresas con necesidades específicas o complejas',
      result: 'Solución perfectamente adaptada a tu negocio',
      price: 'Presupuesto personalizado',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        bgLight: 'bg-emerald-50',
        gradient: 'from-emerald-500 to-teal-500'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200',
        bgLight: 'bg-blue-50',
        gradient: 'from-blue-500 to-indigo-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200',
        bgLight: 'bg-purple-50',
        gradient: 'from-purple-500 to-pink-500'
      },
      indigo: {
        bg: 'bg-indigo-500',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        bgLight: 'bg-indigo-50',
        gradient: 'from-indigo-500 to-purple-500'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-200',
        bgLight: 'bg-orange-50',
        gradient: 'from-orange-500 to-red-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Servicios que
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              transforman negocios
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desde el diagnóstico hasta la implementación, te acompañamos en cada etapa de tu crecimiento con soluciones probadas y resultados medibles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Service Cards */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeService === index
                      ? `${colors.border} ${colors.bgLight} shadow-lg`
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Detail */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-200">
              {(() => {
                const service = services[activeService];
                const colors = getColorClasses(service.color);
                
                return (
                  <>
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${colors.gradient}`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h3>
                        <p className={`text-lg font-medium ${colors.text}`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">¿Qué incluye?</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">¿Para quién es?</h4>
                          <p className="text-slate-700">{service.forWho}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">Resultado esperado</h4>
                          <p className="text-slate-700">{service.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-slate-200">
                      <div className="mb-4 sm:mb-0">
                        <span className="text-sm text-slate-500 font-medium">PRECIO</span>
                        <p className="text-2xl font-bold text-slate-900">{service.price}</p>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors duration-200">
                          Más información
                        </button>
                        <button className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                          <span>Solicitar ahora</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿No sabés qué servicio necesitás?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Agendá una llamada gratuita de 30 minutos y te ayudamos a definir 
            la estrategia perfecta para tu negocio.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
            <span>Agendar llamada estratégica GRATIS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;