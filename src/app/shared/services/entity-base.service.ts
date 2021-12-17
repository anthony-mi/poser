import { BehaviorSubject } from "rxjs";
import { OperationBaseService } from "./operation-base.service";

export abstract class EntityBaseService<TEntity> extends OperationBaseService {
    // protected entity$ = new BehaviorSubject<Nullable<TEntity>>(null);
}