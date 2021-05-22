import http from '../Config/HttpClient';

class FriendsService {
    getAll(): Promise<any> {
      return http.get("/friends.json");
    }
  }

  export default new FriendsService();
