document.getElementById('programar').addEventListener('click', async () => {

    const texto = document.getElementById('texto').value;
    const hora = document.getElementById('hora').value;

    if (!texto || !hora) {
        alert('Faltan datos');
        return;
    }

    const permiso = await Notification.requestPermission();
    if (permiso !== 'granted') return;

    const ahora = new Date();
    const [h, m] = hora.split(':');

    const objetivo = new Date();
    objetivo.setHours(h, m, 0);

    let delay = objetivo - ahora;

    if (delay < 0) {
        alert('Hora ya pasada');
        return;
    }

    const reg = await navigator.serviceWorker.ready;

    reg.active.postMessage({
        title: '⏰ Recordatorio',
        body: texto,
        delay: delay
    });

    alert('Notificación programada');
});

// Botón 1 minuto
document.getElementById('test').addEventListener('click', async () => {

    const permiso = await Notification.requestPermission();
    if (permiso !== 'granted') return;

    const reg = await navigator.serviceWorker.ready;

    reg.active.postMessage({
        title: '⚡ Test',
        body: 'Notificación en 1 minuto',
        delay: 60000
    });

});
