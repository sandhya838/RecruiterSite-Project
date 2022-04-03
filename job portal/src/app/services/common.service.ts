import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { CONSTANTS } from "../helper/constants";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  key = CONSTANTS.SECRET;
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  encrypt(value: string) {
    var key = CryptoJS.enc.Utf8.parse(this.key);
    var iv = CryptoJS.enc.Utf8.parse(this.key);
    var encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(value.toString()),
      key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  decrypt(value: string) {
    var key = CryptoJS.enc.Utf8.parse(this.key);
    var iv = CryptoJS.enc.Utf8.parse(this.key);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  alert(type: string, message: string) {
    switch (type) {
      case "error":
        this.toastr.error(message, "Error!");
        break;
      case "warning":
        this.toastr.warning(message, "Warning!");
        break;
      case "success":
        this.toastr.success(message, "Success!");
        break;
      default:
        this.toastr.info(message, "Info!");
        break;
    }
  }
  _getHeaders() {
    return new HttpHeaders({
      "x-access-token": sessionStorage.getItem("token") as string,
      "Content-Type": "application/json",
    });
  }
  getCompanyLogoByName(name: string): Observable<any> {
     return this.http.get(
      "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + name
    );
  }
}
