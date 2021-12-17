import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, catchError, finalize, Observable, Subject, Subscription, tap } from "rxjs";
import { OperationBaseService } from "./operation-base.service";

export abstract class TableBaseService<TEntity> extends OperationBaseService {
    items$ = new BehaviorSubject<TEntity[]>([]);

    private fetchSubscription?: Subscription;

    constructor(protected override toasterService: ToastrService) {
        super(toasterService);
    }

    getItems$(): Observable<TEntity[]> {
        return this.items$.asObservable();
    }

    protected fetchItems(apiSource$: Observable<TEntity[]>): void {
        if (this.fetchSubscription && !this.fetchSubscription.closed) {
          this.fetchSubscription.unsubscribe();
        }
    
        const sources$ = new Subject<TEntity[]>();
    
        this.fetchSubscription = apiSource$
          .pipe(
            tap((users: TEntity[]) => this.items$.next(users)),
            catchError((error) => this.showErrorMessage$(error))
          )
          .subscribe(sources$);
      }
};
