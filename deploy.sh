#!/bin/bash

echo "🚀 Iniciando despliegue de DSA Business..."

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado. Instalando..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
fi

# Verificar si Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose no está instalado. Instalando..."
    curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Detener contenedores existentes
echo "🛑 Deteniendo contenedores existentes..."
docker-compose down

# Construir y levantar los contenedores
echo "🔨 Construyendo y levantando contenedores..."
docker-compose up --build -d

# Verificar el estado
echo "✅ Verificando estado de la aplicación..."
sleep 10
docker-compose ps

echo "🌐 La aplicación debería estar disponible en:"
echo "   http://tu-servidor:5137"
echo ""
echo "📊 Para ver los logs: docker-compose logs -f"
echo "🛑 Para detener: docker-compose down" 