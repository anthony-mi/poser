import { ApiPositionTransformService } from './api-position-transform.service';

describe('ApiPositionTransformService', () => {
    let service: ApiPositionTransformService;

    beforeEach(initMocks);

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        service = new ApiPositionTransformService();
    }
});
