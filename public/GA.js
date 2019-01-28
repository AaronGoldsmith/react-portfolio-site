let deferredPrompt;
window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-133314489-1');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
deferredPrompt = e;})

// fall back
WebFont.load({
  google: {
    families: ['Pontano Sans','Krub','Open Sans']
  }
});