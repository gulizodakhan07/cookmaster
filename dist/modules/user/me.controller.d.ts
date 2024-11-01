import { RequestInterface } from '@guards';
import { MeService } from './me.service';
export declare class MeController {
    private service;
    constructor(service: MeService);
    getMe(request: RequestInterface): Promise<any>;
}
