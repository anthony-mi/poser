import { ApiExchangeTransformService } from "./api-exchange-transform.service";

describe('ApiExchangeTransformService', () => {
    let service: ApiExchangeTransformService;

    beforeEach(initMocks);

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        service = new ApiExchangeTransformService();
    }
});
