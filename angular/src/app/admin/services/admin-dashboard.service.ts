import {Injectable} from '@angular/core';
import {BaseService} from '../../layout/services/base.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AdminDashboardService extends BaseService {
  getCommentUnchecked() {
    return this.http.get('/api/comment_managing').pipe(catchError(this.handleError));
  }
  checkComment(id: number) {
    return this.http.put('/api/comment_managing', {id}).pipe(catchError(this.handleError));
  }
}
