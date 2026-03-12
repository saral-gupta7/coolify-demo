FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 6000 ENTRYPOINT ["bun", "run", "index.ts"]
