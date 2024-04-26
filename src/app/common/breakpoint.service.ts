import { Injectable, Signal, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakPointService {
  private readonly breakPoint = inject(BreakpointObserver);

  isMobile: Signal<Boolean> = signal(false);
  isSmall: Signal<Boolean> = signal(false);

  constructor() {
    this.isMobile = toSignal(
      this.breakPoint
        .observe([Breakpoints.XSmall])
        .pipe(map((res) => res.matches)),
      { initialValue: false }
    );
    this.isSmall = toSignal(
      this.breakPoint
        .observe([Breakpoints.XSmall, Breakpoints.Small])
        .pipe(map((res) => res.matches)),
      { initialValue: false }
    );
  }
}
