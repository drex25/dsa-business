import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Globe, Target, Search, BarChart3, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const benefits = [
    { icon: Search, text: 'Diagnóstico real', link: '#diagnostico' },
    { icon: Globe, text: 'Webs funcionales', link: '#web' },
    { icon: DollarSign, text: 'Publicidad que convierte $$$', link: '#publicidad' },
  ];

  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Del análisis a la acción
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Estrategia, desarrollo</span>
                <span className="block">y rendimiento para</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  negocios que apuestan al crecimiento con resultados medibles
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Desde un diagnóstico profundo hasta la ejecución de estrategias de alto impacto, 
                te acompañamos en cada etapa de tu crecimiento.
              </p>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-10">
                {benefits.map((benefit, index) => (
                  <a key={index} href={benefit.link} className="flex items-center space-x-3 hover:text-blue-300 transition-colors duration-200 group">
                    <benefit.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium group-hover:text-blue-300">{benefit.text}</span>
                  </a>
                ))}
              </div>

              {/* Mini Formulario */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  ¿Querés que analicemos tu caso?
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    />
                    <input
                      type="url"
                      placeholder="tuweb.com"
                      className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Pedí tu diagnóstico ahora
                  </button>
                </form>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <span>Ver casos de éxito</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-200">
                  Agendar llamada estratégica
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              {/* Formulario Principal */}
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      ¿Querés que analicemos tu caso?
                    </h3>
                    <p className="text-slate-300">
                      Completá estos datos y te enviamos un diagnóstico personalizado
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-emerald-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-emerald-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Sitio web (opcional)
                      </label>
                      <input
                        type="url"
                        placeholder="www.tuweb.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-emerald-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        ¿Cuál es tu principal desafío?
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-emerald-400 focus:border-transparent backdrop-blur-sm transition-all duration-200">
                        <option value="" className="text-slate-900">Seleccionar desafío</option>
                        <option value="leads" className="text-slate-900">Generar más leads</option>
                        <option value="ventas" className="text-slate-900">Aumentar ventas online</option>
                        <option value="web" className="text-slate-900">Mejorar mi sitio web</option>
                        <option value="publicidad" className="text-slate-900">Optimizar publicidad</option>
                        <option value="otro" className="text-slate-900">Otro</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Pedí tu diagnóstico ahora
                    </button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-slate-300">
                      ✓ Análisis gratuito ✓ Sin compromiso ✓ Respuesta en 24hs
                    </p>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;