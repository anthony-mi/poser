import { ApiAssetTransformService } from "./api-asset-transform.service";

describe('ApiAssetTransformService', () => {
    let service: ApiAssetTransformService;

    beforeEach(initMocks);

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        service = new ApiAssetTransformService();
    }
});
