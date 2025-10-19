/**
 * Configuração de Analytics e Pixels de Conversão
 * Studio AEDA Digital
 * 
 * INSTRUÇÕES:
 * 1. Substitua os placeholders pelos IDs reais das suas contas
 * 2. Descomente as linhas após configurar os IDs
 */

// ==========================================
// GOOGLE ANALYTICS 4
// ==========================================
// Substitua 'G-XXXXXXXXXX' pelo seu ID de medição do GA4
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Substituir pelo ID real

// Inicializar Google Analytics 4
function initGA4() {
  if (GA4_MEASUREMENT_ID && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    // Adicionar script do gtag.js
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    // Configurar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
      'send_page_view': true,
      'anonymize_ip': true // LGPD compliance
    });
    
    console.log('Google Analytics 4 inicializado');
  }
}

// Rastrear eventos personalizados
function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

// ==========================================
// FACEBOOK PIXEL
// ==========================================
// Substitua 'XXXXXXXXXXXXXXX' pelo seu Facebook Pixel ID
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // TODO: Substituir pelo ID real

// Inicializar Facebook Pixel
function initFacebookPixel() {
  if (FB_PIXEL_ID && FB_PIXEL_ID !== 'XXXXXXXXXXXXXXX') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
    
    console.log('Facebook Pixel inicializado');
  }
}

// Rastrear eventos do Facebook
function trackFBEvent(eventName, eventParams = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, eventParams);
  }
}

// ==========================================
// GOOGLE ADS CONVERSION TRACKING
// ==========================================
// Substitua pelos seus IDs do Google Ads
const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX'; // TODO: Substituir pelo ID real
const CONVERSION_LABEL = 'XXXXXXXXXXXX'; // TODO: Substituir pelo label de conversão

// Rastrear conversão do Google Ads
function trackGoogleAdsConversion(conversionLabel = CONVERSION_LABEL) {
  if (GOOGLE_ADS_ID && GOOGLE_ADS_ID !== 'AW-XXXXXXXXXX' && typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`
    });
  }
}

// ==========================================
// EVENTOS DE CONVERSÃO
// ==========================================

// Rastrear envio de formulário
function trackFormSubmission(formType) {
  trackEvent('form_submission', {
    'form_type': formType,
    'event_category': 'engagement',
    'event_label': formType
  });
  
  trackFBEvent('Lead', {
    content_name: formType,
    content_category: 'form_submission'
  });
  
  trackGoogleAdsConversion();
}

// Rastrear clique em WhatsApp
function trackWhatsAppClick() {
  trackEvent('whatsapp_click', {
    'event_category': 'engagement',
    'event_label': 'whatsapp_button'
  });
  
  trackFBEvent('Contact', {
    content_name: 'WhatsApp',
    content_category: 'contact'
  });
}

// Rastrear agendamento Calendly
function trackCalendlySchedule() {
  trackEvent('calendly_schedule', {
    'event_category': 'conversion',
    'event_label': 'consultoria_agendada'
  });
  
  trackFBEvent('Schedule', {
    content_name: 'Consultoria',
    content_category: 'appointment'
  });
  
  trackGoogleAdsConversion();
}

// Rastrear clique em CTA
function trackCTAClick(ctaName) {
  trackEvent('cta_click', {
    'event_category': 'engagement',
    'event_label': ctaName
  });
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Verificar consentimento LGPD
  const lgpdConsent = localStorage.getItem('lgpdConsent');
  
  if (lgpdConsent === 'accepted') {
    // Inicializar analytics apenas se o usuário aceitou
    initGA4();
    initFacebookPixel();
    
    // Adicionar listeners de eventos
    setupEventListeners();
  }
});

// Configurar listeners de eventos
function setupEventListeners() {
  // Rastrear cliques em WhatsApp
  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
  whatsappButtons.forEach(button => {
    button.addEventListener('click', trackWhatsAppClick);
  });
  
  // Rastrear envios de formulário
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      const pageTitle = document.title;
      const formType = pageTitle.includes('Contato') ? 'contact_form' : 'diagnostic_form';
      trackFormSubmission(formType);
    });
  }
  
  // Rastrear cliques em CTAs principais
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const ctaText = this.textContent.trim();
      trackCTAClick(ctaText);
    });
  });
  
  // Rastrear eventos do Calendly
  if (typeof Calendly !== 'undefined') {
    window.addEventListener('message', function(e) {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          trackCalendlySchedule();
        }
      }
    });
  }
}

// Atualizar consentimento LGPD
const lgpdAcceptBtn = document.getElementById('lgpdAccept');
if (lgpdAcceptBtn) {
  lgpdAcceptBtn.addEventListener('click', function() {
    // Inicializar analytics após aceite
    setTimeout(() => {
      initGA4();
      initFacebookPixel();
      setupEventListeners();
    }, 100);
  });
}

