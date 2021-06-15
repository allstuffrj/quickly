import http from '../Config/HttpClient';

class CallsService {

    getCalls(): Promise<any>{
        return http.get('/calls.json');
    }

    getConversationDetail(conversation : Object): Promise<any>{
      return http.get('/conversation_detail.json');
    }

  }

  export default new CallsService();
