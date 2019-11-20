const addLoaderInterceptors = ($axios, store) => {
  $axios.interceptors.request.use((config) => {
    store.commit('incrementLoader');

    return config;
  }, (error) => Promise.reject(error));

  $axios.interceptors.response.use((response) => {
    store.commit('decrementLoader');

    return response;
  }, (error) => {
    store.commit('decrementLoader');

    return Promise.reject(error)
  });
};

export default function ({ $axios, store }) {
  addLoaderInterceptors($axios, store);
}

