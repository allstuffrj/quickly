import http from '../Config/HttpClient';

class NotificationService {
  getAll (): Promise<any> {
    return http.get('/notification.json');
  }
}

export default new NotificationService();
