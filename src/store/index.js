import { createStore } from 'vuex';
import { dataService } from '@/shared';

export default createStore({
  state: {
    articles: [],
    authors: [],
    toc: [],
    categories: [],
    flashMessages: [],
    errorMessages: [],
  },
  getters: {
    getFlashMessages: (state) => state.flashMessages,
    getErrorMessages: (state) => state.errorMessages,
    getCategoryById: (state) => (id) => state.categories.find((h) => h.id === id),
  },
  mutations: {
    getTOC(state, toc) {
      state.toc = toc;
    },
    updateToc(state, article) {
      const index = state.toc.findIndex((h) => h.id === article.id);
      state.toc.splice(index, 1, article);
      state.toc = [...state.toc];
    },
    updateArticles(state, article) {
      const index = state.articles.findIndex((h) => h.id === article.id);
      if (index !== -1) {
        state.articles.splice(index, 1, article);
        state.articles = [...state.articles];
      }
    },
    getCategories(state, categories) {
      state.categories = categories;
    },
    getAuthors(state, authors) {
      state.authors = authors;
    },
    getArticles(state, articles) {
      state.articles = articles;
    },
    addFlashMessage(state, message) {
      state.flashMessages = [{ id: 0, message }];
    },
    clearFlashMessages(state) {
      state.flashMessages = [];
    },
    addErrorMessage(state, message) {
      state.errorMessages = [{ id: 0, message }];
    },
    clearErrorMessages(state) {
      state.errorMessages = [];
    },
    deleteArticle(state, articleId) {
      state.toc = [...state.toc.filter((p) => p.id !== articleId)];
      state.articles = [...state.articles.filter((p) => p.id !== articleId)];
    },
    addArticle(state, article) {
      state.articles.unshift(article);
      state.toc.unshift(article);
    },
  },
  actions: {
    async getArticlesAction({ commit, state }) {
      if (state.articles.length === 0) {
        commit('addFlashMessage', 'Loading .....');
        const articles = await dataService.getAllArticles();
        commit('clearFlashMessages');
        commit('getArticles', articles);
      }
    },
    async getTocAction({ commit, state }) {
      if (state.toc.length === 0) {
        const toc = await dataService.getArticleList();
        commit('getTOC', toc);
      }
    },
    async getAuthorsAction({ commit, state }) {
      if (state.authors.length === 0) {
        const authors = await dataService.getAuthors();
        commit('getAuthors', authors);
      }
    },
    async getCategoriesAction({ commit }) {
      const categories = await dataService.getCategories();
      commit('getCategories', categories);
    },
    clearFlashMessagesAction({ commit }) {
      commit('clearFlashMessages');
    },
    setFlashMessageAction({ commit }, message) {
      commit('addFlashMessage', message);
    },
    async deleteArticleAction({ commit }, id) {
      commit('addFlashMessage', 'Saving Changes .....');
      const statusData = await dataService.deleteArticle(id);
      if (statusData.statusCode === 204) {
        commit('addFlashMessage', 'Article deleted');
        commit('deleteArticle', id);
      } else {
        commit('addFlashMessage', `Delete failed: ${statusData.statusCode} - ${statusData.statusMessage}`);
      }
    },
    async updateArticleAction({ commit }, article) {
      commit('addFlashMessage', 'Saving Changes .....');
      const statusData = await dataService.updateArticle(article);
      if (statusData.statusCode === 204) {
        commit('addFlashMessage', 'Article updated');
        commit('updateToc', article);
        commit('updateArticles', article);
      } else {
        commit('addFlashMessage', `Update failed: ${statusData.statusCode} - ${statusData.statusMessage}`);
      }
    },
    async createArticleAction({ commit }, article) {
      commit('addFlashMessage', 'Saving Changes .....');
      const statusData = await dataService.createArticle(article);
      if (statusData.statusCode === 200 || statusData.statusCode === 201) {
        commit('addFlashMessage', 'New article created');
        commit('addArticle', statusData.data);
      } else {
        commit('addFlashMessage', `Create failed: ${statusData.statusCode} - ${statusData.statusMessage}`);
      }
    },
  },
  modules: {
  },
});
