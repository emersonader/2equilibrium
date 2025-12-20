const API_URL = '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

export interface User {
  id: number;
  email: string;
  name: string;
  tier: string;
  isAdmin?: boolean;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authAPI = {
  async register(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Registration failed');
    }

    const data = await response.json();
    localStorage.setItem('auth_token', data.token);
    return data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }

    const data = await response.json();
    localStorage.setItem('auth_token', data.token);
    return data;
  },

  logout() {
    localStorage.removeItem('auth_token');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
};

export const checkInAPI = {
  async submit(weight: number, energyLevel: number, notes: string) {
    const response = await fetch(`${API_URL}/checkins`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ weight, energyLevel, notes })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Check-in submission failed');
    }

    return response.json();
  },

  async getHistory() {
    const response = await fetch(`${API_URL}/checkins/history`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch check-ins');
    }

    return response.json();
  }
};

export const progressAPI = {
  async getData() {
    const response = await fetch(`${API_URL}/progress`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch progress data');
    }

    return response.json();
  }
};
