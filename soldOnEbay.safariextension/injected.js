safari.self.addEventListener('message', handleMessage, false);

function handleMessage(msg) {
    if (msg.name === 'getselection') {
        var sel = window.getSelection().toString();
        safari.self.tab.dispatchMessage('theselection', sel);
    }
}