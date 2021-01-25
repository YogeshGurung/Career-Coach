import { Component } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {
public meetConfig: any;
public signature: any;  

  constructor() { 
    this.SetCongf(8429284175);
  }

  SetCongf(val) {
    this.meetConfig = {
      apiKey: '-MwJgHkHS7OORreRW8u5Xg',
      apiSecret: 'NlX2YRuA39XihmBoTuLugajqPmWMKmJQP7q4',
      meetingNumber: val,
      userName: '11901938@students.koi.edu.au',
      passWord: 'iRp7Ce',
      leaveUrl: 'http://localhost:4200',
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: res => {
        console.log(res.result);
      }
    });

    ZoomMtg.init({
      showMeetingHeader: false,
      disableInvite: true,
      disableCallOut: true,
      disableRecord: true,
      disableJoinAudio: true,
      audioPanelAlwaysOpen: true,
      showPureSharingContent: true,
      isSupportAV: true,
      isSupportChat: false,
      isSupportQA: false,
      isSupportCC: false,
      screenShare: true,
      rwcBackup: '',
      videoDrag: true,
      videoHeader: true,
      isLockBottom: false,
      isSupportNonverbal: false,
      isShowJoiningErrorDialog: false,
      leaveUrl: 'http://localhost:4200',
      success: res => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey,
          userEmail: 'email@getMaxListeners.com',
          passWord: this.meetConfig.passWord,
          success: res => {
            console.log('join meeting success');
          },
          error: res => {
            console.log(res);
          }
        });
      },
      error: res => {
        console.log(res);
      }

    });
  }

  

}
