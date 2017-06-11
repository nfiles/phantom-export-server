import './polyfills';

const system = require('system');

const server = require('webserver').create();

phantom.onError = (msg, trace) => {
    let msgStack = [`PHANTOM ERROR: ${msg}`];
    if (trace && trace.length) {
        msgStack.push(
            'TRACE:',
            ...trace.map((t) =>
                ` -> ${t.file || t.sourceURL}: ${t.line}` +
                (t.function ? ` (in function ${t.function})` : '')
            )
        );
    }
    console.error(msgStack.join('\n'));
    phantom.exit(1);
};

const port = 3000;
const listening = server.listen(port, (req, res) => {
    console.log(JSON.stringify(res));
    res.write('hi there!\n');
    res.close();
});

if (listening) {
    console.log('listening on port:', port);
} else {
    console.error('failed to start server...');
    phantom.exit(1);
}
