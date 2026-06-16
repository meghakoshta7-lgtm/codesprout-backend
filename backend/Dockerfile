FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm install -g pm2

FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache curl && mkdir -p /app/data
COPY --from=builder /app/package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/ecosystem.config.cjs ./
COPY --from=builder /usr/local/lib/node_modules/pm2 ./node_modules/pm2
RUN ln -s /app/node_modules/pm2/bin/pm2-runtime /usr/local/bin/pm2-runtime
HEALTHCHECK --interval=15s --timeout=5s --retries=3 \
  CMD curl -sf http://localhost:3000/health || exit 1
CMD pm2-runtime start ecosystem.config.cjs
