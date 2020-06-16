export function parse(messages) {
    let messageList = '';
    let messageItem = '';

    function recurse(messages, messageObject) {
        if (messageObject) {
            messageItem += '<li><ul>';
        }

        for (const key in messages) {
            let value = messages[key];

            if (value) {
                typeof value === 'object' 
                    ? recurse(value, key) 
                    : messageItem += `<li>${value}</li>`;
            }
        }

        if (messageObject) {
            messageItem += '</ul></li>';
        }

        if (messageItem) {
            messageList = `<ul>${messageItem}</ul>`;
        }
    }

    recurse(messages);

    return messageList;
}
