# Use uma imagem base do Nginx
FROM nginx:alpine

# Copie os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Copie a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 para acessar a aplicação
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]