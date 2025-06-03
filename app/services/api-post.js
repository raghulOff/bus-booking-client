import Service from '@ember/service';
import config from 'bus-booking-client/config/environment';

export default class ApiPostService extends Service {
  async post(endpoint, data) {
    const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to POST data');
    }

    return response.text();
  }
}
