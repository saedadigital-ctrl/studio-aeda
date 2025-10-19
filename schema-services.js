// Schema markup para página de serviços
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Automação com IA",
      "description": "Automatizamos processos repetitivos com inteligência artificial para aumentar produtividade e reduzir custos operacionais",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Automação de Processos com IA"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Agentes de IA Personalizados",
      "description": "Desenvolvemos assistentes virtuais inteligentes para atendimento ao cliente, suporte técnico e vendas",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Desenvolvimento de Chatbots e Agentes IA"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Análise de Dados e BI",
      "description": "Transformamos dados em insights acionáveis com dashboards inteligentes e relatórios automatizados",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Business Intelligence e Análise de Dados"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Tráfego Pago Inteligente",
      "description": "Campanhas de marketing digital otimizadas com IA para máximo ROI em Google Ads e Meta Ads",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Marketing Digital e Tráfego Pago"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Integração de Sistemas",
      "description": "Conectamos suas ferramentas e sistemas para criar fluxos de trabalho automatizados e eficientes",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Integração de Sistemas e APIs"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Consultoria em IA",
      "description": "Diagnóstico gratuito e consultoria estratégica para identificar oportunidades de IA no seu negócio",
      "provider": {
        "@type": "Organization",
        "name": "Studio AEDA Digital",
        "url": "https://studioaeda.com.br"
      },
      "areaServed": "BR",
      "serviceType": "Consultoria em Inteligência Artificial"
    }
  ]
};

// Adicionar schema ao head da página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSchema);
} else {
  addSchema();
}

function addSchema() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(servicesSchema);
  document.head.appendChild(script);
}

