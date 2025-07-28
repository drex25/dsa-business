import React from 'react';
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Diego Alvarenga',
      role: 'CEO - Estratega de negocios',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lic. en Administración + MBA. Experto en diagnóstico empresarial, planificación estratégica y desarrollo comercial'
    },
    {
      name: 'Sylvain Drexler W.',
      role: 'Desarrollador Fullstack',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Portfolio tech sólido. Responsable de convertir ideas en plataformas digitales funcionales y escalables.'
    },
    {
      name: 'Romina Alvarenga',
      role: 'Especialista en Paid Media & Performance',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mente analítica y creativa. Optimiza campañas para convertir visitas en resultados medibles.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Resultados Medibles',
      description: 'Cada estrategia tiene métricas claras y objetivos específicos. Sin vanity metrics, solo ROI real.'
    },
    {
      icon: Heart,
      title: 'Compromiso Genuino',
      description: 'Tu éxito es nuestro éxito. Trabajamos como una extensión de tu equipo, no como un proveedor más.'
    },
    {
      icon: Zap,
      title: 'Agilidad e Innovación',
      description: 'Implementamos rápido, iteramos constantemente y nos adaptamos a los cambios del mercado.'
    }
  ];

  const stats = [
    { number: '40+', label: 'Proyectos completados' },
    { number: '99%', label: 'Clientes satisfechos' },
    { number: '3 años', label: 'En el mercado' },
    { number: '6 países', label: 'Alcance regional' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Quiénes somos
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DSA Business
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Somos un equipo de especialistas apasionados por transformar ideas en resultados. 
            Creemos que cada negocio tiene potencial de crecimiento, solo necesita la estrategia correcta.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Nuestra historia
            </h3>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                DSA Business nació de una simple observación: demasiados negocios no conocen su situación actual, falta de orden en sus finanzas y falta de planificación estratégica para crecer de forma ordenada.
              </p>
              <p>
                Decidimos cambiar eso. Creamos una metodología que va <strong>del análisis a la acción</strong>, con el Método DSA360 donde cada modulo permite entender y acompañamos con estrategias adecuadas basados en datos reales y cada implementación se mide.
              </p>
              <p>
                Hoy ayudamos a emprendedores y empresas a crecer, con la misma pasión de contribuir al éxito: transformamos negocios a través del poder del diagnóstico como primer paso, implementando estrategias para lograr resultados y brindamos soportes innovadores para crecer en ventas.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nuestros valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nuestro equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Network & Presence */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Presencia regional</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Trabajamos con una red de colaboradores especializados en toda Latinoamérica, 
            lo que nos permite ofrecer servicios localizados con estándares internacionales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Argentina', 'Chile', 'Uruguay', 'Paraguay', 'Bolivia', 'Perú'].map((country, index) => (
              <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;