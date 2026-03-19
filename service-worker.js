self.addEventListener('install', e => self.skipWaiting());

self.addEventListener('activate', e => console.log('SW activo'));

self.addEventListener('message', event => {
    const { title, body, delay } = event.data;

    setTimeout(() => {
        self.registration.showNotification(title, {
            body: body,
            icon: ''
        });
    }, delay);
});
