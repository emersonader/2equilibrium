const API_URL = '/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

export const adminAPI = {
  async getMembers() {
    const response = await fetch(`${API_URL}/admin/members`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch members');
    }

    return response.json();
  },

  async getCheckins(limit = 50) {
    const response = await fetch(`${API_URL}/admin/checkins?limit=${limit}`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch check-ins');
    }

    return response.json();
  },

  async getMemberDetails(memberId: number) {
    const response = await fetch(`${API_URL}/admin/members/${memberId}`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch member details');
    }

    return response.json();
  },

  async getStats() {
    const response = await fetch(`${API_URL}/admin/stats`, {
      headers: getAuthHeaders()
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch stats');
    }

    return response.json();
  }
};
