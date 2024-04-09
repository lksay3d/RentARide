// Leia Kamal Sayed

class NotificationService {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const notificationService = new NotificationService();

function displayNotification(message) {
    const notificationArea = document.getElementById('notificationArea');
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    notificationArea.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

notificationService.subscribe(displayNotification);

document.getElementById('sendMessage').addEventListener('click', () => {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        const messageList = document.getElementById('messageList');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageList.appendChild(messageElement);

        notificationService.notify('New message sent');
        input.value = '';
    }
});