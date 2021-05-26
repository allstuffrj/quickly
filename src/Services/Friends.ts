import http from '../Config/HttpClient';

class FriendsService {
    getAll(): Promise<any> {
      return http.get("/friends.json");
    };

    getConversations(): Promise<any>{
        return http.get('/conversationlist.json');
    }

  }

  export default new FriendsService();
