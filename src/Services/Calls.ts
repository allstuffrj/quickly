import http from '../Config/HttpClient';

class CallsService {
  getCalls (): Promise<any> {
    return http.get('/calls.json');
  }

  getCallHistory (conversation: Object): Promise<any> {
    return http.get('/call_history.json');
  }
}

export default new CallsService();
