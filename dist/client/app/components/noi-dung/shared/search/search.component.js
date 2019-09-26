"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.searchTrigger = new core_1.EventEmitter();
        this._searchValue = "";
        this._keyValue = 'search-bar';
        this.loadState();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getState = function () {
        return { name: 'tieu_de', value: this._searchValue };
    };
    SearchComponent.prototype.search = function () {
        this.saveState();
        this.searchTrigger.emit(this._searchValue);
    };
    SearchComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue, this._searchValue);
    };
    SearchComponent.prototype.loadState = function () {
        this._searchValue = this.manageStateService.load(this._keyValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchTrigger", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-bar',
            template: '<input [(ngModel)]="_searchValue" type="text" placeholder="tieu de" /> <button (click)="search()">Tim kiem</button>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF3RTtBQUd4RSxnRkFBNkU7QUFNN0U7SUFLSSx5QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFKaEQsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBRzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU8sZ0NBQU0sR0FBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLG1DQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sbUNBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUExQlM7UUFBVCxhQUFNLEVBQUU7OzBEQUFvQztJQURwQyxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUscUhBQXFIO1NBQ2xJLENBQUM7eUNBTTBDLHlDQUFrQjtPQUxqRCxlQUFlLENBNEIzQjtJQUFELHNCQUFDO0NBNUJELEFBNEJDLElBQUE7QUE1QlksMENBQWUiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbm9pLWR1bmcvc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJQWRkT25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvYWRkLW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE1hbmFnZVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tYW5hZ2Utc3RhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VhcmNoLWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogJzxpbnB1dCBbKG5nTW9kZWwpXT1cIl9zZWFyY2hWYWx1ZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0aWV1IGRlXCIgLz4gPGJ1dHRvbiAoY2xpY2spPVwic2VhcmNoKClcIj5UaW0ga2llbTwvYnV0dG9uPidcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIElBZGRPbkNvbXBvbmVudCwgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSBzZWFyY2hUcmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgcHJpdmF0ZSBfc2VhcmNoVmFsdWUgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWUgPSAnc2VhcmNoLWJhcic7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYW5hZ2VTdGF0ZVNlcnZpY2U6IE1hbmFnZVN0YXRlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubG9hZFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3RpZXVfZGUnLCB2YWx1ZTogdGhpcy5fc2VhcmNoVmFsdWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlci5lbWl0KHRoaXMuX3NlYXJjaFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5zYXZlKHRoaXMuX2tleVZhbHVlLCB0aGlzLl9zZWFyY2hWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5sb2FkKHRoaXMuX2tleVZhbHVlKTtcclxuICAgIH1cclxufSJdfQ==
