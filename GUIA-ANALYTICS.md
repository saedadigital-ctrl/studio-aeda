# Guia de Configuração de Analytics e Pixels de Conversão

## 📊 Studio AEDA Digital - Rastreamento e Conversões

Este guia explica como configurar o Google Analytics 4, Facebook Pixel e Google Ads Conversion Tracking no seu site.

---

## 1️⃣ Google Analytics 4 (GA4)

### Passo 1: Criar Conta no Google Analytics
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Clique em "Começar a medir" ou "Criar conta"
3. Preencha as informações da sua empresa
4. Crie uma propriedade GA4 (não Universal Analytics)
5. Configure o fluxo de dados para Web

### Passo 2: Obter o ID de Medição
1. No painel do GA4, vá em **Administrador** > **Fluxos de dados**
2. Clique no fluxo de dados do seu site
3. Copie o **ID de medição** (formato: `G-XXXXXXXXXX`)

### Passo 3: Configurar no Site
1. Abra o arquivo `analytics-config.js`
2. Localize a linha:
   ```javascript
   const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Substitua `'G-XXXXXXXXXX'` pelo seu ID real
4. Salve o arquivo e faça o upload para o servidor

### Eventos Rastreados Automaticamente:
- ✅ Visualizações de página
- ✅ Envio de formulários (contato e diagnóstico)
- ✅ Cliques em WhatsApp
- ✅ Cliques em CTAs
- ✅ Agendamentos via Calendly

---

## 2️⃣ Facebook Pixel

### Passo 1: Criar Pixel no Facebook Business
1. Acesse [Facebook Business Manager](https://business.facebook.com/)
2. Vá em **Gerenciador de Eventos** > **Pixels**
3. Clique em "Criar um Pixel"
4. Nomeie seu pixel (ex: "Studio AEDA Digital")
5. Copie o **Pixel ID** (sequência numérica de 15-16 dígitos)

### Passo 2: Configurar no Site
1. Abra o arquivo `analytics-config.js`
2. Localize a linha:
   ```javascript
   const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX';
   ```
3. Substitua `'XXXXXXXXXXXXXXX'` pelo seu Pixel ID
4. Salve o arquivo e faça o upload

### Eventos Rastreados:
- ✅ **PageView** - Visualizações de página
- ✅ **Lead** - Envio de formulários
- ✅ **Contact** - Cliques em WhatsApp
- ✅ **Schedule** - Agendamentos via Calendly

### Verificar Instalação:
1. Instale a extensão [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Acesse seu site
3. Clique no ícone da extensão para verificar se o pixel está ativo

---

## 3️⃣ Google Ads Conversion Tracking

### Passo 1: Criar Ação de Conversão
1. Acesse [Google Ads](https://ads.google.com/)
2. Vá em **Ferramentas e configurações** > **Conversões**
3. Clique em **+ Nova ação de conversão**
4. Escolha **Site**
5. Configure:
   - **Categoria**: Lead ou Envio de formulário
   - **Nome**: "Formulário de Contato" ou "Agendamento Calendly"
   - **Valor**: Defina um valor estimado por lead (opcional)
   - **Contagem**: "Uma" (para evitar duplicatas)

### Passo 2: Obter IDs de Conversão
1. Após criar a conversão, copie:
   - **ID da conversão** (formato: `AW-XXXXXXXXXX`)
   - **Rótulo da conversão** (formato: `XXXXXXXXXXXX`)

### Passo 3: Configurar no Site
1. Abra o arquivo `analytics-config.js`
2. Localize as linhas:
   ```javascript
   const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX';
   const CONVERSION_LABEL = 'XXXXXXXXXXXX';
   ```
3. Substitua pelos seus IDs reais
4. Salve e faça upload

### Conversões Rastreadas:
- ✅ Envio de formulário de contato
- ✅ Envio de formulário de diagnóstico
- ✅ Agendamento via Calendly

---

## 4️⃣ Conformidade com LGPD

O site já está configurado para respeitar a LGPD:

- ✅ **Banner de consentimento** implementado
- ✅ Analytics só inicializa após aceite do usuário
- ✅ IP anonimizado no Google Analytics
- ✅ Opção de recusar cookies

### Como Funciona:
1. Usuário acessa o site
2. Banner LGPD aparece após 1 segundo
3. Se aceitar: analytics são inicializados
4. Se recusar: nenhum rastreamento é feito
5. Escolha é salva no localStorage

---

## 5️⃣ Testar as Configurações

### Google Analytics 4:
1. Acesse seu site
2. Abra o Console do navegador (F12)
3. Procure por: `Google Analytics 4 inicializado`
4. No GA4, vá em **Relatórios** > **Tempo real** para ver visitantes ativos

### Facebook Pixel:
1. Use a extensão Facebook Pixel Helper
2. Verifique se aparece o ícone verde
3. No Facebook Business, vá em **Gerenciador de Eventos** > **Testar eventos**

### Google Ads:
1. No Google Ads, vá em **Ferramentas** > **Conversões**
2. Clique na conversão criada
3. Verifique o status (pode levar até 24h para aparecer dados)

---

## 6️⃣ Relatórios e Métricas

### Principais Métricas para Acompanhar:

**Google Analytics 4:**
- Usuários ativos
- Taxa de conversão
- Páginas mais visitadas
- Origem do tráfego
- Eventos personalizados

**Facebook Pixel:**
- Eventos de Lead
- Eventos de Contact
- Eventos de Schedule
- Públicos personalizados para remarketing

**Google Ads:**
- Conversões totais
- Custo por conversão
- Taxa de conversão
- ROI das campanhas

---

## 7️⃣ Suporte

Se tiver dúvidas sobre a configuração:

📧 **E-mail**: s.aedadigital@gmail.com  
📱 **WhatsApp**: +55 (83) 99375-1326  
🌐 **Site**: https://studioaeda.com.br

---

## ✅ Checklist de Configuração

- [ ] Criar conta no Google Analytics 4
- [ ] Obter ID de medição do GA4
- [ ] Configurar GA4_MEASUREMENT_ID no analytics-config.js
- [ ] Criar Facebook Pixel
- [ ] Obter Pixel ID do Facebook
- [ ] Configurar FB_PIXEL_ID no analytics-config.js
- [ ] Criar ação de conversão no Google Ads
- [ ] Obter IDs de conversão do Google Ads
- [ ] Configurar GOOGLE_ADS_ID e CONVERSION_LABEL
- [ ] Fazer upload dos arquivos atualizados
- [ ] Testar todas as integrações
- [ ] Verificar relatórios em tempo real

---

**Última atualização**: Outubro 2025  
**Versão**: 1.0

