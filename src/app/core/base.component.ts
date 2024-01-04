import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: '',
    standalone: true
})
export class BaseComponent implements OnInit, OnDestroy{
    subscribe: Subject<any> = new Subject<any>();
    loading: boolean = false;

    ngOnInit(): void {
        this.initData();
    }

    ngOnDestroy(): void {
        this.subscribe.complete();
        this.subscribe.unsubscribe();
    }

    initData(): void {}
}