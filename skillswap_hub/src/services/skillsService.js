import api from './api';

// PUBLIC_INTERFACE
/**
 * Skills service for handling skill-related operations
 */
const skillsService = {
  /**
   * Get all skills
   * @param {Object} params - Query parameters (pagination, filters)
   * @returns {Promise} Response from the API
   */
  getAllSkills: async (params = {}) => {
    try {
      const response = await api.get('/skills', { params });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Get a skill by ID
   * @param {string} id - Skill ID
   * @returns {Promise} Response from the API
   */
  getSkillById: async (id) => {
    try {
      const response = await api.get(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Get skills by user ID
   * @param {string} userId - User ID
   * @returns {Promise} Response from the API
   */
  getUserSkills: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}/skills`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Create a new skill
   * @param {Object} skillData - Skill data
   * @returns {Promise} Response from the API
   */
  createSkill: async (skillData) => {
    try {
      const response = await api.post('/skills', skillData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Update a skill
   * @param {string} id - Skill ID
   * @param {Object} skillData - Updated skill data
   * @returns {Promise} Response from the API
   */
  updateSkill: async (id, skillData) => {
    try {
      const response = await api.put(`/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Delete a skill
   * @param {string} id - Skill ID
   * @returns {Promise} Response from the API
   */
  deleteSkill: async (id) => {
    try {
      const response = await api.delete(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Get skill categories
   * @returns {Promise} Response from the API
   */
  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Search for skills
   * @param {Object} searchParams - Search parameters
   * @returns {Promise} Response from the API
   */
  searchSkills: async (searchParams) => {
    try {
      const response = await api.get('/skills/search', { params: searchParams });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Create a skill request
   * @param {Object} requestData - Request data
   * @returns {Promise} Response from the API
   */
  createRequest: async (requestData) => {
    try {
      const response = await api.post('/requests', requestData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Get all requests for current user
   * @returns {Promise} Response from the API
   */
  getUserRequests: async () => {
    try {
      const response = await api.get('/requests/me');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  },

  /**
   * Update request status
   * @param {string} id - Request ID
   * @param {Object} statusData - Status update data
   * @returns {Promise} Response from the API
   */
  updateRequestStatus: async (id, statusData) => {
    try {
      const response = await api.put(`/requests/${id}/status`, statusData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : { message: 'Network error' };
    }
  }
};

export default skillsService;
