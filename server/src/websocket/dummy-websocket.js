import EventEmitter from 'events';
import WebSocket from 'ws';
import wsUtils from './utils';

export class DummyWebSocket extends EventEmitter {

    constructor(url) {
        super();
        this.readyState = WebSocket.OPEN;
        this.socket = {
            remoteAddress: null,
            remotePort: null,
        };
        this.upgradeReq = {url};
    }

    close() {
        this.readyState = WebSocket.CLOSED;
    }

    send() {
    }

    static fromUrl(url, type) {
        const ws = new DummyWebSocket(url);
        ws.id = wsUtils.id(type);
        ws.location = wsUtils.location(ws);
        return ws;
    }

}
