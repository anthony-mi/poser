import { ApiAssetsService } from "./api-assets.service";
import { ApiAssetTransformService } from "./api-asset-transform.service";

describe('ApiAssetsService', () => {
    let service: ApiAssetsService;
    let transformService: ApiAssetTransformService;

    beforeEach(initMocks);
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        transformService = jasmine.createSpyObj([
            'fromGetAssets',
            'fromGetAsset'
        ]);

        service = new ApiAssetsService(transformService);
    }
});
