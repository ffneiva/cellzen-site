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
| Ícones | SVGs autorais a traço + [Lucide React](https://lucide.dev/) (utilitários) |
| Fontes | Zen Old Mincho + Zen Kaku Gothic New + IBM Plex Mono (Google Fonts) |
| Deploy | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

---

## 🎨 Direção de arte — "Sumi-ê sobre Washi"

O design traduz o logo (um "Z" de pincelada sumi-ê atravessando um smartphone,
com trilhas de circuito douradas) em um sistema de três matérias:

- **Tinta (teal)** — o gesto humano: títulos, texto, pinceladas SVG, ensō;
- **Ouro** — a máquina: trilhas de circuito 1–1.5px, pads, labels monoespaçadas;
- **Shu (vermelho)** — o compromisso: carimbos hanko, usados com parcimônia.

Canvas claro de papel washi (`#F8F4E9`) com textura de grão, tipografia
mincho, espaço negativo generoso ("ma") e animações que seguem uma regra
única: *a tinta seca em cena; o papel jamais se move*. Tokens de cor,
curvas de easing (`ease-ink/paper/stamp`) e sombras estão em
[`tailwind.config.js`](tailwind.config.js); os motivos reutilizáveis
(pincelada, ensō, hanko, trilha, ícones a traço) em
[`src/components/motifs.jsx`](src/components/motifs.jsx).

---

## 📁 Estrutura

```
src/
├── components/
│   ├── motifs.jsx          # Biblioteca de motivos: pincelada, ensō, hanko,
│   │                       #   pads, ícones autorais a traço, haiku
│   ├── Header.jsx          # Nav fixa + drawer mobile "porta shoji"
│   ├── Hero.jsx            # Ensō que se desenha + smartphone em desenho
│   │                       #   técnico com rachadura kintsugi
│   ├── Services.jsx        # 6 fichas de papel clicáveis (wa.me por serviço)
│   ├── HowItWorks.jsx      # 3 passos + trilha circuito→pincelada (scroll)
│   ├── WhyCellZen.jsx      # Lista editorial + stats como carimbos
│   ├── QuickQuote.jsx      # Carta-orçamento ao vivo com selo de aprovação
│   ├── Testimonials.jsx    # Pergaminhos kakejiku
│   ├── ContactCTA.jsx      # CTA final + indicador aberto/fechado (noren)
│   ├── Footer.jsx          # "Pedra de tinta" — único bloco escuro do site
│   └── WhatsAppFloat.jsx   # Botão flutuante com anel "gota na água"
├── constants.js            # Dados do negócio (WhatsApp, endereço, etc.)
├── App.jsx
├── main.jsx
└── index.css               # Papel washi, grão, classes do sistema
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
