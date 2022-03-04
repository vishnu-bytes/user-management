import { get, post, put, del } from "../remote/base_api";

export const onSubmit = (params) => {
  return post(`/users`, params);
};
export const getData = (page) => {
  return get(`/users?page=${page}`);
};
export const onDelete = (id) => {
  return del(`/users/${id}`);
};
export const onEdit = (params, id) => {
  return put(`/users/${id}`, params);
};
