import React, { useState } from 'react';
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react';

const Packages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const packages = [
    {
      name: 'Express',
      subtitle: 'Para empezar rápido',
      price: { monthly: 45000, annual: 40500 },
      popular: false,
      description: 'Perfecto para emprendedores que necesitan presencia web profesional rápidamente.',
      features: [
        'Landing page optimizada',
        'Diseño responsive',
        'Formulario de contacto',
        'Integración WhatsApp',
        'SEO básico',
        'Google Analytics',
        'Soporte por 30 días'
      ],
      notIncluded: [
        'E-commerce',
        'Paid media',
        'Content marketing',
        'CRM integrado'
      ],
      cta: 'Empezar ahora',
      color: 'blue'
    },
    {
      name: 'Web + Tráfico',
      subtitle: 'Presencia + Publicidad',
      price: { monthly: 120000, annual: 108000 },
      popular: true,
      description: 'La combinación perfecta: sitio web profesional + campañas publicitarias que convierten.',
      features: [
        'Todo de Express',
        'E-commerce básico (hasta 50 productos)',
        'Gestión Google Ads (1 mes)',
        'Gestión Facebook/Instagram Ads',
        'Configuración Facebook Pixel',
        'Reportes mensuales',
        'Optimización de conversiones',
        'Soporte por 60 días'
      ],
      notIncluded: [
        'Inventario avanzado',
        'Email marketing automation',
        'Blog profesional'
      ],
      cta: 'Plan más popular',
      color: 'emerald'
    },
    {
      name: 'Full Lanzamiento',
      subtitle: 'Ecosistema completo',
      price: { monthly: 200000, annual: 180000 },
      popular: false,
      description: 'Para negocios que quieren un lanzamiento digital completo con todas las herramientas.',
      features: [
        'Todo de Web + Tráfico',
        'E-commerce avanzado (productos ilimitados)',
        'Blog profesional + 4 artículos',
        'Email marketing setup',
        'CRM integrado',
        'Automatizaciones básicas',
        'Gestión redes sociales (1 mes)',
        'Capacitación del equipo',
        'Soporte por 90 días'
      ],
      notIncluded: [
        'Desarrollo custom',
        'Integraciones específicas'
      ],
      cta: 'Lanzamiento completo',
      color: 'purple'
    },
    {
      name: 'Scale Pro',
      subtitle: 'Para hacer crecer',
      price: { monthly: 350000, annual: 315000 },
      popular: false,
      description: 'Solución integral para empresas que buscan escalar con tecnología avanzada.',
      features: [
        'Todo de Full Lanzamiento',
        'Desarrollo personalizado',
        'Integraciones específicas',
        'Dashboard ejecutivo',
        'A/B testing avanzado',
        'Marketing automation completo',
        'Gestión continua (3 meses)',
        'Consultor dedicado',
        'Soporte prioritario'
      ],
      notIncluded: [],
      cta: 'Escalar negocio',
      color: 'indigo'
    },
    {
      name: 'Enterprise',
      subtitle: 'Solución a medida',
      price: { monthly: 0, annual: 0 },
      popular: false,
      description: 'Para empresas con necesidades específicas que requieren soluciones 100% personalizadas.',
      features: [
        'Análisis y diagnóstico completo',
        'Desarrollo 100% personalizado',
        'Integraciones complejas',
        'Arquitectura escalable',
        'Equipo dedicado',
        'SLA garantizado',
        'Capacitación avanzada',
        'Soporte 24/7',
        'Consultoría estratégica'
      ],
      notIncluded: [],
      cta: 'Consultar precio',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: 'border-blue-200',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        gradient: 'from-blue-500 to-blue-600'
      },
      emerald: {
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        gradient: 'from-emerald-500 to-emerald-600'
      },
      purple: {
        border: 'border-purple-200',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        gradient: 'from-purple-500 to-purple-600'
      },
      indigo: {
        border: 'border-indigo-200',
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        gradient: 'from-indigo-500 to-indigo-600'
      },
      orange: {
        border: 'border-orange-200',
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        gradient: 'from-orange-500 to-orange-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const formatPrice = (price: number) => {
    if (price === 0) return 'Consultar';
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Packs y planes
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              para cada etapa de tu negocio
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Desde el primer paso hasta la escala empresarial. Elegí el pack que mejor se adapte 
            a tu momento y objetivos de crecimiento.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const colors = getColorClasses(pkg.color);
            const price = pkg.price[billingCycle];
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular 
                    ? 'ring-2 ring-emerald-500 transform scale-105' 
                    : 'border border-slate-200 hover:border-slate-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>Más popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>{pkg.subtitle}</p>
                    
                    <div className="mb-4">
                      {price > 0 ? (
                        <>
                          <span className="text-4xl font-bold text-slate-900">
                            {formatPrice(price)}
                          </span>
                          {billingCycle === 'annual' && (
                            <div className="text-sm text-slate-500 mt-1">
                              <span className="line-through">{formatPrice(pkg.price.monthly)}</span>
                              <span className="ml-2 text-emerald-600 font-medium">Ahorrás 10%</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-slate-900">Consultar</span>
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-600">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">✓ Incluye:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-sm">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.notIncluded.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 mb-3">✗ No incluye:</h4>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-sm">
                              <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button 
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 ${colors.button} text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            ¿No estás seguro cuál elegir?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Cada negocio es único. Conversemos 15 minutos y te recomendamos el pack 
            perfecto para tu situación específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Zap className="w-5 h-5" />
              <span>Consulta gratuita de 15 min</span>
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
              <span>Comparar todos los packs</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;