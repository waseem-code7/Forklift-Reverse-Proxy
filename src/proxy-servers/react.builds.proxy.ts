import * as http from "node:http";

const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:7005',
    changeOrigin: true
});

proxy.on('proxyReq', (proxyReq: http.ClientRequest, req: http.IncomingMessage, res: http.ServerResponse, options: any) => {
    console.log('Sending request to target:', options.target);
    if (req.url === "/") {
        proxyReq.path += 'proxy/index.html';
    } else {
        proxyReq.path = `/proxy${req.url}`;
    }
    console.log('Sending request to target:', proxyReq.path);
    proxyReq.setHeader("Actual-Forklift-Host", req.headers.host || "");
});

proxy.on("error", (error: Error, req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log('Sending request to target:', error);
    res.writeHead(400)
    res.end();
})

module.exports = function handleReactBuildProxy(req: http.IncomingMessage, res: http.ServerResponse) {
    proxy.web(req, res);
};


