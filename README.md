# 🦉 Studio AEDA Digital - Site Oficial

Site institucional completo com integração de IA, PWA, Analytics e otimizações avançadas de SEO e performance.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Funcionalidades Implementadas](#funcionalidades-implementadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Configuração e Deploy](#configuração-e-deploy)
5. [Analytics e Rastreamento](#analytics-e-rastreamento)
6. [SEO e Performance](#seo-e-performance)
7. [Manutenção](#manutenção)

---

## 🎯 Visão Geral

Site profissional desenvolvido para Studio AEDA Digital, empresa especializada em soluções de IA e automação para negócios.

### Tecnologias Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript puro
- **PWA**: Service Worker, Manifest, Cache API
- **Analytics**: Google Analytics 4, Facebook Pixel, Google Ads
- **SEO**: Schema.org, Sitemap, Meta tags otimizadas
- **Integrações**: Calendly, Google Translate, WhatsApp

### Cores da Marca
- **Roxo Primário**: `#5b3cc4`
- **Amarelo Secundário**: `#ffd600`
- **Preto**: `#000000`
- **Branco**: `#ffffff`
- **Cinza**: `#a6a6a6`

---

## ✨ Funcionalidades Implementadas

### ✅ Fase 1: Estrutura Base
- [x] 5 páginas completas (Home, Sobre, Serviços, Contato, Privacidade)
- [x] Design responsivo mobile-first
- [x] Identidade visual com cores oficiais
- [x] Logo animado da coruja
- [x] Banner LGPD com consentimento

### ✅ Fase 2: Integrações e CTAs
- [x] **Calendly integrado** na página de contato
- [x] **CTAs otimizados** em todas as páginas
- [x] Botões de WhatsApp com mensagens pré-definidas
- [x] Formulários de contato funcionais
- [x] Botão flutuante de WhatsApp

### ✅ Fase 3: PWA (Progressive Web App)
- [x] **Manifest.json** configurado
- [x] **Service Worker** para cache offline
- [x] Instalável como app no celular
- [x] Ícones otimizados para diferentes dispositivos
- [x] Prompt de instalação automático

### ✅ Fase 4: Schema Markup (SEO)
- [x] **Organization Schema** (dados da empresa)
- [x] **LocalBusiness Schema** (negócio local)
- [x] **WebSite Schema** (estrutura do site)
- [x] **Service Schema** (lista de serviços)
- [x] Rich snippets para Google

### ✅ Fase 5: Analytics e Conversões
- [x] **Google Analytics 4** configurado
- [x] **Facebook Pixel** integrado
- [x] **Google Ads Conversion Tracking**
- [x] Rastreamento de eventos personalizados
- [x] Conformidade com LGPD

### ✅ Fase 6: Performance
- [x] **Lazy loading** de imagens
- [x] **Cache de recursos** estáticos
- [x] **Compressão Gzip** via .htaccess
- [x] **Preload** de recursos críticos
- [x] **Sitemap.xml** e robots.txt
- [x] Otimização de Core Web Vitals

---

## 📁 Estrutura do Projeto

```
studio-aeda-simple/
├── index.html              # Página inicial
├── sobre.html              # Sobre a empresa
├── servicos.html           # Serviços oferecidos
├── contato.html            # Contato + Calendly
├── privacidade.html        # Política de privacidade
├── styles.css              # Estilos principais
├── script.js               # Scripts principais
├── analytics-config.js     # Configuração de analytics
├── performance.js          # Otimizações de performance
├── schema-services.js      # Schema markup de serviços
├── sw.js                   # Service Worker (PWA)
├── manifest.json           # Manifest do PWA
├── logo-coruja.png         # Logo da empresa
├── .htaccess               # Configurações Apache
├── robots.txt              # Diretivas para crawlers
├── sitemap.xml             # Mapa do site
├── GUIA-ANALYTICS.md       # Guia de configuração
└── README.md               # Este arquivo
```

---

## 🚀 Configuração e Deploy

### Passo 1: Upload dos Arquivos

1. Faça download do arquivo `studio-aeda-site-final.zip`
2. Extraia os arquivos
3. Faça upload via FTP ou painel do Netlify para seu servidor

### Passo 2: Configurar Domínio

O site está configurado para: **https://studioaeda.com.br**

Se usar outro domínio, atualize:
- `manifest.json` (campo `start_url`)
- `sitemap.xml` (todas as URLs)
- Schema markup em `index.html`

### Passo 3: Configurar Analytics

Siga o guia completo em **GUIA-ANALYTICS.md** para configurar:

1. **Google Analytics 4**
   - Crie conta em [analytics.google.com](https://analytics.google.com)
   - Obtenha o ID de medição (G-XXXXXXXXXX)
   - Edite `analytics-config.js` linha 11

2. **Facebook Pixel**
   - Crie pixel em [business.facebook.com](https://business.facebook.com)
   - Obtenha o Pixel ID
   - Edite `analytics-config.js` linha 39

3. **Google Ads**
   - Configure conversão em [ads.google.com](https://ads.google.com)
   - Obtenha IDs de conversão
   - Edite `analytics-config.js` linhas 69-70

### Passo 4: Configurar Calendly

1. Acesse [calendly.com](https://calendly.com)
2. Crie um evento de agendamento
3. Copie o link do seu calendário
4. Em `contato.html` linha 127, substitua:
   ```html
   data-url="SEU_LINK_CALENDLY_AQUI"
   ```

### Passo 5: Testar o Site

- ✅ Abra o site em diferentes navegadores
- ✅ Teste em dispositivos móveis
- ✅ Verifique formulários de contato
- ✅ Teste botões de WhatsApp
- ✅ Confirme que Calendly está funcionando
- ✅ Verifique Analytics no console (F12)

---

## 📊 Analytics e Rastreamento

### Eventos Rastreados Automaticamente

| Evento | Descrição | Plataformas |
|--------|-----------|-------------|
| **PageView** | Visualização de página | GA4, FB Pixel |
| **form_submission** | Envio de formulário | GA4, FB Pixel, Google Ads |
| **whatsapp_click** | Clique em WhatsApp | GA4, FB Pixel |
| **calendly_schedule** | Agendamento via Calendly | GA4, FB Pixel, Google Ads |
| **cta_click** | Clique em CTAs | GA4 |

### Conformidade LGPD

O site respeita a LGPD:
- Banner de consentimento obrigatório
- Analytics só inicializa após aceite
- IP anonimizado no Google Analytics
- Opção de recusar cookies
- Política de privacidade completa

---

## 🔍 SEO e Performance

### Schema Markup Implementado

- ✅ **Organization** - Dados da empresa
- ✅ **LocalBusiness** - Negócio local com horários
- ✅ **WebSite** - Estrutura do site
- ✅ **Service** - Lista de 6 serviços

### Otimizações de Performance

| Métrica | Objetivo | Implementação |
|---------|----------|---------------|
| **LCP** | < 2.5s | Lazy loading, preload |
| **FID** | < 100ms | Defer de scripts |
| **CLS** | < 0.1 | Dimensões fixas |
| **TTI** | < 3.8s | Cache, compressão |

### Ferramentas de Teste

- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev/)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com/)
- **Schema Validator**: [validator.schema.org](https://validator.schema.org/)
- **Rich Results Test**: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## 🛠️ Manutenção

### Atualizar Conteúdo

1. **Textos**: Edite diretamente os arquivos HTML
2. **Imagens**: Substitua `logo-coruja.png` mantendo o nome
3. **Cores**: Edite as variáveis CSS em `styles.css` (linhas 8-16)
4. **Contatos**: Atualize em todas as páginas (busque por `s.aedadigital@gmail.com`)

### Adicionar Nova Página

1. Crie arquivo HTML (ex: `blog.html`)
2. Copie estrutura de uma página existente
3. Adicione link no menu de todas as páginas
4. Atualize `sitemap.xml`
5. Adicione ao cache em `sw.js`

### Atualizar Service Worker

Quando fizer mudanças importantes:

1. Edite `sw.js`
2. Altere `CACHE_NAME` (linha 2) para nova versão
3. Exemplo: `'aeda-digital-v1'` → `'aeda-digital-v2'`
4. Faça upload do arquivo atualizado

### Backup

Recomendamos backup semanal de:
- Todos os arquivos HTML
- CSS e JavaScript
- Imagens
- Configurações (analytics-config.js)

---

## 📞 Suporte

**Studio AEDA Digital**

- 📧 E-mail: s.aedadigital@gmail.com
- 📱 WhatsApp: +55 (83) 99375-1326
- 🌐 Site: https://studioaeda.com.br
- 📍 Localização: João Pessoa, PB - Brasil

---

## 📝 Changelog

### Versão 2.0 - Outubro 2025
- ✅ Integração Calendly
- ✅ CTAs otimizados
- ✅ PWA completo
- ✅ Schema markup
- ✅ Analytics e pixels
- ✅ Otimizações de performance

### Versão 1.0 - Outubro 2025
- ✅ Site base com 5 páginas
- ✅ Design responsivo
- ✅ Formulários funcionais
- ✅ Banner LGPD
- ✅ Google Translate

---

## 📄 Licença

© 2025 Studio AEDA Digital. Todos os direitos reservados.

Este projeto é de propriedade exclusiva da Studio AEDA Digital e não pode ser reproduzido, distribuído ou utilizado sem autorização prévia.

---

**Desenvolvido com 💜 por Studio AEDA Digital**

