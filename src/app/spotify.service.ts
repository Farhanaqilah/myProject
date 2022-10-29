import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class SpotifyService {
 getHeader(query: string) {
 const url = 'https://api.spotify.com/v1/' + query;
 let headers = new HttpHeaders();
 headers = headers.append(
 'Authorization',
 // tslint:disable-next-line: max-line-length
 "Bearer BQA_EYlEF8z6S_3XPVkUIVCL7i8xcCnJ2LVRO50pppgOJWbwmd-lpDdwUodOJo5e-NgUUqvdZA_mlJ9O8R9pkPkYJfHjsHZU_6SGjrT_hFK4-ZLtdfS2sChC7xDhmxXai9n4yC1dfWicKoXxdLpV47KIr5d8tT7_Khd6jbgsMf_I_sQrikyP8DOqQqRnleE"
 );
 return this._http.get(url, { headers });
 }
 // tslint:disable-next-line: variable-name
 constructor(private _http: HttpClient) {}
 searchMusic(str: string, type = 'artist') {
 const param = '&offset=0' + '&limit=20' + '&type=' + type +
'&market=US';
 const query = 'search?query=' + str + param;
 return this.getHeader(query);
 }
 getArtist(id: string) {
 const query = `artists/${id}`;
 return this.getArtist(query);
 }
}
