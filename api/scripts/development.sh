# sudo chmod +x /scripts/development.sh
DEBUG=api:server NODE_ENV=development EXPRESS_PORT=3000 JWT_TOKEN=YOUR_TOKEN_HERE nodemon ./bin/www