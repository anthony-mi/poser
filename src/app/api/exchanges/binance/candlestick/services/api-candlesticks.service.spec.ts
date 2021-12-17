import { ApiCandlesticksService } from "./api-candlesticks.service";

describe('ApiCandlesticksService', () => {
    let service: ApiCandlesticksService;

    beforeEach(() => {
        service = new ApiCandlesticksService();
    })

    it('should be created', () => expect(service).toBeTruthy());
});
