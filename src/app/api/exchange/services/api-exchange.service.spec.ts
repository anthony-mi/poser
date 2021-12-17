import { ApiExchangeService } from "./api-exchange.service";
import { ApiExchangeTransformService } from "./api-exchange-transform.service";

describe('ApiExchangeService', () => {
    let service: ApiExchangeService;
    let transformService: ApiExchangeTransformService;

    beforeEach(initMocks);
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        transformService = jasmine.createSpyObj([
            'fromGetExchanges',
            'fromGetExchange'
        ]);

        service = new ApiExchangeService(transformService);
    }
});
