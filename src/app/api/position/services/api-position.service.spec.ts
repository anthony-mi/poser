import { ApiPositionService } from "./api-position.service";
import { ApiPositionTransformService } from './api-position-transform.service';

describe('ApiPositionService', () => {
    let service: ApiPositionService;
    let transformService: ApiPositionTransformService;

    beforeEach(initMocks);
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    function initMocks(): void {
        transformService = jasmine.createSpyObj([
            'fromGetPositions',
            'fromGetPosition'
        ]);

        service = new ApiPositionService(transformService);
    }
});
