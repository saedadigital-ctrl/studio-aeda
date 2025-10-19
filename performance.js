/**
 * Otimizações de Performance
 * Studio AEDA Digital
 */

// ==========================================
// LAZY LOADING DE IMAGENS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Lazy loading nativo para navegadores que suportam
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  } else {
    // Fallback para navegadores antigos
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});

// ==========================================
// PRELOAD DE RECURSOS CRÍTICOS
// ==========================================
function preloadCriticalResources() {
  // Preload da fonte principal
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
}

// ==========================================
// DEFER DE SCRIPTS NÃO CRÍTICOS
// ==========================================
function deferNonCriticalScripts() {
  // Google Translate pode ser carregado depois
  const translateScript = document.querySelector('script[src*="translate.google.com"]');
  if (translateScript) {
    translateScript.defer = true;
  }
  
  // Calendly pode ser carregado depois
  const calendlyScript = document.querySelector('script[src*="calendly.com"]');
  if (calendlyScript) {
    calendlyScript.defer = true;
  }
}

// ==========================================
// OTIMIZAÇÃO DE IMAGENS
// ==========================================
function optimizeImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Adicionar loading lazy se ainda não tiver
    if (!img.hasAttribute('loading')) {
      img.loading = 'lazy';
    }
    
    // Adicionar decoding async
    if (!img.hasAttribute('decoding')) {
      img.decoding = 'async';
    }
    
    // Adicionar dimensões se não tiver (evita layout shift)
    if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (width && height) {
        img.setAttribute('width', width);
        img.setAttribute('height', height);
      }
    }
  });
}

// ==========================================
// CACHE DE RECURSOS ESTÁTICOS
// ==========================================
function setupResourceHints() {
  // DNS Prefetch para domínios externos
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://connect.facebook.net',
    'https://assets.calendly.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
  
  // Preconnect para recursos críticos
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// ==========================================
// REDUÇÃO DE LAYOUT SHIFT (CLS)
// ==========================================
function preventLayoutShift() {
  // Adicionar aspect ratio para imagens
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.width && img.height) {
      const aspectRatio = (img.height / img.width) * 100;
      img.style.aspectRatio = `${img.width} / ${img.height}`;
    }
  });
  
  // Reservar espaço para iframes (Calendly)
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    if (!iframe.style.minHeight) {
      iframe.style.minHeight = '600px';
    }
  });
}

// ==========================================
// MINIFICAÇÃO INLINE DE CSS CRÍTICO
// ==========================================
function inlineCriticalCSS() {
  // CSS crítico para above-the-fold
  const criticalCSS = `
    body{margin:0;padding:0;font-family:Inter,sans-serif}
    .header{background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.05);position:sticky;top:0;z-index:1000}
    .hero{padding:4rem 0;background:linear-gradient(135deg,#5b3cc4 0%,#7c5fd4 100%);color:#fff}
  `;
  
  // Verificar se já existe
  const existingStyle = document.getElementById('critical-css');
  if (!existingStyle) {
    const style = document.createElement('style');
    style.id = 'critical-css';
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }
}

// ==========================================
// COMPRESSÃO E CACHE
// ==========================================
function setupCacheHeaders() {
  // Informar ao service worker sobre recursos cacheáveis
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CACHE_URLS',
      urls: [
        '/styles.css',
        '/script.js',
        '/logo-coruja.png',
        '/manifest.json'
      ]
    });
  }
}

// ==========================================
// MONITORAMENTO DE PERFORMANCE
// ==========================================
function monitorPerformance() {
  if ('PerformanceObserver' in window) {
    // Monitorar Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Monitorar First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    
    // Monitorar Cumulative Layout Shift (CLS)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
      console.log('CLS:', clsScore);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
// Executar otimizações críticas imediatamente
setupResourceHints();

// Executar otimizações após DOM carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPerformanceOptimizations);
} else {
  initPerformanceOptimizations();
}

function initPerformanceOptimizations() {
  preloadCriticalResources();
  deferNonCriticalScripts();
  optimizeImages();
  preventLayoutShift();
  setupCacheHeaders();
  
  // Monitorar performance apenas em desenvolvimento
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    monitorPerformance();
  }
}

// Executar otimizações após carregamento completo
window.addEventListener('load', function() {
  // Remover recursos não utilizados após 5 segundos
  setTimeout(() => {
    // Limpar event listeners não utilizados
    const unusedElements = document.querySelectorAll('[data-cleanup]');
    unusedElements.forEach(el => {
      el.remove();
    });
  }, 5000);
});

