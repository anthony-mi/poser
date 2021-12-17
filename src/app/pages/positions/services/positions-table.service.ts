import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ApiPositionService } from "src/app/api/position/services/api-position.service";
import { Position } from "src/app/domain/position.model";
import { TableBaseService } from "src/app/shared/services/table-base.service";

@Injectable({
    providedIn: 'root'
})
export class PositionsTableService extends TableBaseService<Position> {
    constructor(private apiPositionService: ApiPositionService,
        protected override toasterService: ToastrService) {
        super(toasterService);
    }

    fetchPositions(): void {
        const sourceApi$ = this.apiPositionService.getPositions$();
        this.fetchItems(sourceApi$);
    }
}