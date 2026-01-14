# Agent Dashboard

AI Agents Suite dashboard for 3Lines - a Next.js application that provides quick access to various AI agents.

## Agents

- **AI Chat** - General AI assistant (ai3lines.com)
- **HR Agent** - Careers and recruitment (careers.ai3lines.com)
- **Sales & Procurement** - Sales and procurement management (snp.ai3lines.com)
- **Finance Agent** - Financial analysis (Coming Soon)
- **Legal Agent** - Legal document analysis (Coming Soon)
- **Support Agent** - Customer support (Coming Soon)

## Running with Docker

```bash
# Build and run
docker build -t agent-dashboard .
docker run -d --name agent-dashboard -p 2222:2222 agent-dashboard

# Rebuild and restart
docker rm -f agent-dashboard
docker build -t agent-dashboard .
docker run -d --name agent-dashboard -p 2222:2222 agent-dashboard

# View logs
docker logs -f agent-dashboard
```

Access at: http://localhost:2222

## Development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
