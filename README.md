# CellZen — Website Institucional

Site institucional da **CellZen**, assistência técnica especializada em celulares Android em Goiânia/GO.

🔗 **[cellzen.fhio.com.br](https://cellzen.fhio.com.br)**

---

## 🛠 Tech Stack

| Camada | Tecnologia |
|---|---|
| Framework | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| Estilização | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animações | [Framer Motion 11](https://www.framer.com/motion/) |
| Ícones | [Lucide React](https://lucide.dev/) |
| Fontes | Outfit + Inter (Google Fonts) |
| Deploy | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

---

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.jsx          # Navegação + menu mobile animado
│   ├── Hero.jsx            # Seção hero + marquee de marcas
│   ├── Services.jsx        # Bento-grid de serviços
│   ├── WhyCellZen.jsx      # Diferenciais (stats bar + split layout)
│   ├── HowItWorks.jsx      # Como funciona (timeline vertical)
│   ├── Testimonials.jsx    # Depoimentos de clientes
│   ├── ContactCTA.jsx      # CTA + indicador de horário de atendimento
│   └── Footer.jsx
├── constants.js            # Dados do negócio (WhatsApp, endereço, etc.)
├── App.jsx
├── main.jsx
└── index.css               # Tokens Tailwind + animações customizadas
```

---

## 🚀 Rodando localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## ⚙️ CI/CD — Deploy Automático

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) faz deploy automático a cada push na branch `main`:

1. **Build** — `npm ci && npm run build`
2. **S3 Sync** — envia os assets com headers de cache imutável; `index.html` com `no-cache`
3. **CloudFront Invalidation** — invalida `/*` para servir a versão mais recente

### Variáveis e Secrets necessários

Configure em **Settings → Secrets and variables → Actions** no repositório:

| Tipo | Nome | Descrição |
|---|---|---|
| Secret | `AWS_ACCESS_KEY_ID` | Access key do usuário IAM de deploy |
| Secret | `AWS_SECRET_ACCESS_KEY` | Secret key do usuário IAM de deploy |
| Variable | `AWS_REGION` | Região do bucket S3 (ex: `sa-east-1`) |
| Variable | `S3_BUCKET_NAME` | Nome do bucket S3 |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | ID da distribuição CloudFront |

O usuário IAM precisa apenas das permissões mínimas:
- `s3:PutObject`, `s3:DeleteObject`, `s3:GetObject`, `s3:ListBucket` no bucket
- `cloudfront:CreateInvalidation` na distribuição

---

## 📄 Licença

Código desenvolvido por [Felipe Neiva](https://linkedin.com/in/ffneiva).  
Todos os direitos reservados à CellZen.
