import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<{ username: string; role: string; userId: number } | null>(null);
  public user$ = this.userSubject.asObservable(); 

  constructor(private api: ApiserviceService) {}

  fetchUser(): Observable<boolean> {
    return this.api.getLoggedInUserDetails().pipe(
      tap((user) => this.userSubject.next(user)), 
      map(() => true),
      catchError(() => {
        this.userSubject.next(null);
        return of(false);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  getRole(): string | null {
    return this.userSubject.value?.role || null;
  }

  clearUser(): void {
  this.userSubject.next(null);
}

  getUserId(): number | null {
    return this.userSubject.value?.userId || null;
  }

  getUsername(): string | null {
    return this.userSubject.value?.username || null;
  }
}
