import { Injectable } from '@angular/core';
  
import { ToastrService } from 'ngx-toastr';
  
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private toastr: ToastrService) { }
  
  showSuccess(message: string | undefined){
      this.toastr.success(message)
  }
  
  showError(message: string | undefined){
      this.toastr.error(message)
  }
  
  showInfo(message: string | undefined, title: string | undefined){
      this.toastr.info(message, title)
  }
  
  showWarning(message: string | undefined, title: string | undefined){
      this.toastr.warning(message, title)
  }
  
}
