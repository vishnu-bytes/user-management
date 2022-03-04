import axios from "axios";
// import config from "../../../common/config";

const baseURL = process.env.REACT_APP_BASE_API;

const base = (options, headerOptions) => {
  return axios({
    baseURL,
    headers: {
      Accept: "application/json",
      Authorization:  `Bearer 38768154575de830eba5672d754e7365c836fa8f42cb76186546018486801c64` ,
      ...headerOptions,
    },
    ...options,
  }).then((res) => res.data);
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url, data, headerOptions) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options, headerOptions);
};


export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
