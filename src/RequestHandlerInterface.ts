import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';

interface RequestHandlerInterface {
    handle(request: ServerRequestInterface): ResponseInterface | Promise<ResponseInterface>;
}

export default RequestHandlerInterface;
