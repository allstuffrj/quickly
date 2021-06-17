import http from '../Config/HttpClient';

class FriendsService {
    getAll(): Promise<any> {
      return http.get("/friends.json");
    };
    getList(): Promise<any> {
        return http.get("/friends.json");
    };
    getConversations(): Promise<any>{
        return http.get('/conversationlist.json');
    }

    getConversationDetail(conversation : Object): Promise<any>{
      return http.get('/conversation_detail.json');
    }

  }

  export default new FriendsService();
