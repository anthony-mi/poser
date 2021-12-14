import { PositionsService } from "./positions.service";

describe('PositionsService', () => {
    let service: PositionsService;

    beforeEach(() => {
        service = new PositionsService();
    });

    it('should return expected count of positions', (done: DoneFn) => {
        const expectedCountOfPositions = 3;
            service.getPositions().subscribe(
                positions => {
                    expect(positions.length).toEqual(expectedCountOfPositions);
                    done();
                },
                done.fail)
    });
});
  