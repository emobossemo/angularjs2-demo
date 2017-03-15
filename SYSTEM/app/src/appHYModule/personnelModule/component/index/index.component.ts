import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personnel-index-container',
  templateUrl:  `./index.html`,
})

export class HYPersonnelIndexComponent implements AfterViewInit{
    // form: FormGroup;
	STAFFUS:any={};
	SCHOOLSDICTIONARY:any=[];
	SUBJECTSDICTIONARY:any=[];
    STAFFMODALDATA:any = {};
    @ViewChild('staffModal')
    staffModal:any;
    // @ViewChild('myForm')
    // myForm:FormGroup;

	constructor (private urlservice: UrlService) {
		let that = this;
		this.urlservice.hy_req_get("api/staffs?page=1").then((response:any) => {
            that.STAFFUS = response.json();
        })
        this.urlservice.hy_req_get("api/schools?page=1").then((response:any) => {
            that.SCHOOLSDICTIONARY = response.json();
            // setTimeout(() => {$('.ui.dropdown.SCHOOLSDICTIONARY').dropdown()}, 0);
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
            // setTimeout(() => {$('.ui.dropdown.SUBJECTSDICTIONARY').dropdown()}, 0);
        });

        // this.myForm = new FormGroup({
        //     name: new FormControl('1234', Validators.required),
        //     staffNum: new FormControl('', Validators.required),
        //     schoolId: new FormControl('', Validators.required),
        //     teachingSubject: new FormControl('', Validators.required),
        // });
	}
    ngAfterViewInit() :void {
        
    }
    handleSaveStaff() {
        // console.log(this.myForm);
    }
    handleCreateAccount(e:any):void {
        let reqData = new Object();
        reqData = {
            id : e,
            account : e,
            password : "123456"
        }
        this.urlservice.hy_req_post(`api/staff/${e}/account`, reqData).then((response:any) => {
        })
    }
    handleModifyInfo(e:any): void {
        this.STAFFMODALDATA = e;
        this.staffModal.show();
        
    }
    handleAddStaff(): void {
        this.STAFFMODALDATA = new Object()
        this.staffModal.show();
    }
    handleRemoveAccount(e:any): void {
        this.urlservice.hy_req_delete(`api/staff/${e}`).then((response:any) => {
        })
        // $.ajax({
        //     url: urlReq,
        //     type: 'delete',
        //     data: data,
        //     dataType: "json",
        //     cache: false,
        //     success: function(data) {
        //         if (data.error) {

        //         } else {
        //             $.ajax({
        //                 url: 'http://k12.iyunbei.com/api/staffs?page=1',
        //                 type: 'get',
        //                 cache: false,
        //                 success: function(data) {
        //                     if (data.error) {

        //                     } else {
        //                         data.entries = data.entries.reverse();
        //                         that.staff = data;
        //                     }
        //                 },
        //                 error: function(e) {
        //                 }
        //             });
        //         }
        //     },
        //     error: function(e) {
        //     }
        // });
    }
}