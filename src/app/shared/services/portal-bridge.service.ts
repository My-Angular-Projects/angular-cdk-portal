import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class PortalBridgeService {
  private privatePortal = new Subject<TemplatePortal>();
  public readonly portal$ = this.privatePortal.asObservable();

  public setPortal(portal: TemplatePortal): void {
    this.privatePortal.next(portal);
  }
}
