export interface TextMessage {
    touser?:string;
    toparty?:string;
    totag?:string;
    msgtype:string;
    agentid:number;
    text:{
        content:string;
    },
    safe:number;
}


// {
//     "touser" : "UserID1|UserID2|UserID3",
//     "toparty" : "PartyID1|PartyID2",
//     "totag" : "TagID1 | TagID2",
//     "msgtype" : "text",
//     "agentid" : 1,
//     "text" : {
//         "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
//     },
//     "safe":0
//  }