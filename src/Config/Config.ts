// Global configuration
 enum ThemeColor  {
    Light = 1,
    Dark = 2,
};
const UserStatus = {
    Online: 1,
    Offline: 2,
    Away: 3,
    Busy: 4,
};
const ChatFilterOptions = {
    AllChats: 1,
    Friends: 2,
    Groups: 3,
    Unread: 4,
    Archived: 5,
};
const CallFilterOptions = {
    AllCalls: 1,
    Incoming: 2,
    Outgoing: 3,
    Missedcalls: 4,
};
const ProfileType = {
    Image: 1,
    Svg: 2,
    Text: 3,
};
const isRTL = 0;
declare interface ResponseType {
    data: Object,
    status : number,
    statusText : String
}

declare interface dpOptionType {
    value : string,
    label : string
}

declare interface userdata {
    "user_name" : string,
    "uuid" : string,
    "status" : string,
    "avatar" : string,
    "phone" : string,
    "local_time" : string,
    "birth_date" : string,
    "email" : string,
    "website" : string,
    "address" : string,
    "facebook_url" : string,
    "twitter_url" : string,
    "instagram_url" : string,
    "linkedin_url" : string

}

declare  interface Sgfriend {
    "user_name" : string,
    "uuid" : string,
    "status" : string,
    "avatar" : string
}

declare  interface sgconvdetail {
    "message_uuid" : string,
    "message_type" : string,
    "name": string,
    "avatar": string,
    "message" : string,
    "datetime" : string,
    "user_uuid" : string,
    "is_received": number,
    "is_sent" : number
}

declare interface dayConv {

    "date" : Date,
    "list" : sgconvdetail[]

}
declare interface convdoc {
    "name": string,
    "size" : string,
    "type" : string,
    "url" :string

}
declare interface converDetail {
    "uuid": string,
    "name": string,
    "type" : string,
    "avatar": string,
    "status": string,
    "location" : string,
    "phone" : string,
    "email" : string,
    "address" : string,
    "conversations" : dayConv[],
    "last_media" : string[],
    "last_documents" : convdoc[]
}

declare interface callloggduration {
    "time" : string,
    "type" : string,
    "end_time": string
}
declare interface calllog {
    "user_name" : string,
    "uuid" : string,
    "status" : string,
    "avatar" : string,
    "phone" : string,
    "history" :callloggduration[]
}

declare interface themeMode {
    mode:number,
    isRTL:boolean
}
export {
    ThemeColor,
    UserStatus,
    ChatFilterOptions,
    CallFilterOptions,
    ProfileType,
    isRTL,
    ResponseType,
    dpOptionType,
    userdata,
    Sgfriend,
    converDetail,
    sgconvdetail,
    convdoc,
    calllog,
    callloggduration,
    themeMode
};


