import { createSlice } from '@reduxjs/toolkit';

// Initial state for skills
const initialState = {
  skills: [],
  userSkills: [],
  selectedSkill: null,
  skillRequests: [],
  categories: [],
  loading: false,
  error: null,
};

// Create skills slice
const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    // Fetch all skills
    fetchSkillsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSkillsSuccess: (state, action) => {
      state.loading = false;
      state.skills = action.payload;
    },
    fetchSkillsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Fetch user skills
    fetchUserSkillsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSkillsSuccess: (state, action) => {
      state.loading = false;
      state.userSkills = action.payload;
    },
    fetchUserSkillsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Get single skill
    getSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSkillSuccess: (state, action) => {
      state.loading = false;
      state.selectedSkill = action.payload;
    },
    getSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Add new skill
    addSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSkillSuccess: (state, action) => {
      state.loading = false;
      state.userSkills = [...state.userSkills, action.payload];
    },
    addSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Update skill
    updateSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSkillSuccess: (state, action) => {
      state.loading = false;
      state.userSkills = state.userSkills.map(skill => 
        skill.id === action.payload.id ? action.payload : skill
      );
      if (state.selectedSkill && state.selectedSkill.id === action.payload.id) {
        state.selectedSkill = action.payload;
      }
    },
    updateSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Delete skill
    deleteSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSkillSuccess: (state, action) => {
      state.loading = false;
      state.userSkills = state.userSkills.filter(skill => 
        skill.id !== action.payload
      );
    },
    deleteSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Skill requests
    fetchSkillRequestsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSkillRequestsSuccess: (state, action) => {
      state.loading = false;
      state.skillRequests = action.payload;
    },
    fetchSkillRequestsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Add skill request
    addSkillRequestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSkillRequestSuccess: (state, action) => {
      state.loading = false;
      state.skillRequests = [...state.skillRequests, action.payload];
    },
    addSkillRequestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Categories
    fetchCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Clear errors
    clearError: (state) => {
      state.error = null;
    }
  },
});

// Export actions
export const {
  fetchSkillsStart,
  fetchSkillsSuccess,
  fetchSkillsFailure,
  fetchUserSkillsStart,
  fetchUserSkillsSuccess,
  fetchUserSkillsFailure,
  getSkillStart,
  getSkillSuccess,
  getSkillFailure,
  addSkillStart,
  addSkillSuccess,
  addSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
  deleteSkillStart,
  deleteSkillSuccess,
  deleteSkillFailure,
  fetchSkillRequestsStart,
  fetchSkillRequestsSuccess,
  fetchSkillRequestsFailure,
  addSkillRequestStart,
  addSkillRequestSuccess,
  addSkillRequestFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  clearError,
} = skillsSlice.actions;

// Export reducer
export default skillsSlice.reducer;

// Selectors
export const selectAllSkills = (state) => state.skills.skills;
export const selectUserSkills = (state) => state.skills.userSkills;
export const selectSelectedSkill = (state) => state.skills.selectedSkill;
export const selectSkillRequests = (state) => state.skills.skillRequests;
export const selectCategories = (state) => state.skills.categories;
export const selectSkillsLoading = (state) => state.skills.loading;
export const selectSkillsError = (state) => state.skills.error;
