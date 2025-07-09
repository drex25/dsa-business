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

# Intentar autenticarse con Docker Hub (opcional)
echo "🔐 Intentando autenticarse con Docker Hub..."
if [ -z "$DOCKER_USERNAME" ] || [ -z "$DOCKER_PASSWORD" ]; then
    echo "⚠️  No hay credenciales de Docker Hub configuradas."
    echo "   Esto puede causar rate limits. Para evitar esto:"
    echo "   export DOCKER_USERNAME=tu_usuario"
    echo "   export DOCKER_PASSWORD=tu_password"
    echo "   docker login"
fi

# Detener contenedores existentes
echo "🛑 Deteniendo contenedores existentes..."
docker-compose down

# Limpiar imágenes antiguas para ahorrar espacio
echo "🧹 Limpiando imágenes antiguas..."
docker system prune -f

# Construir y levantar los contenedores con reintentos
echo "🔨 Construyendo y levantando contenedores..."
max_attempts=3
attempt=1

while [ $attempt -le $max_attempts ]; do
    echo "Intento $attempt de $max_attempts..."
    
    if docker-compose up --build -d; then
        echo "✅ Construcción exitosa!"
        break
    else
        echo "❌ Error en intento $attempt"
        if [ $attempt -lt $max_attempts ]; then
            echo "⏳ Esperando 30 segundos antes del siguiente intento..."
            sleep 30
        fi
        attempt=$((attempt + 1))
    fi
done

if [ $attempt -gt $max_attempts ]; then
    echo "❌ Falló después de $max_attempts intentos"
    echo "💡 Sugerencias:"
    echo "   1. Ejecuta: docker login"
    echo "   2. Espera unos minutos y vuelve a intentar"
    echo "   3. Verifica tu conexión a internet"
    exit 1
fi

# Verificar el estado
echo "✅ Verificando estado de la aplicación..."
sleep 10
docker-compose ps

echo "🌐 La aplicación debería estar disponible en:"
echo "   http://$(hostname -I | awk '{print $1}'):5137"
echo ""
echo "📊 Para ver los logs: docker-compose logs -f"
echo "🛑 Para detener: docker-compose down" 