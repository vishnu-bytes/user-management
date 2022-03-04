import { message } from "antd";
import {
  getData,
  onSubmit,
  onDelete,
  onEdit,
} from "../../../infrastructure/users";

const actions = {
  setVisible:
    (params) =>
    ({ setState }) => {
      setState({ visible: params });
    },
  setPage:
    (params) =>
    ({ setState, dispatch }) => {
      setState({ currentPage: params });
      dispatch(actions.getUsers(params));
    },
  setEditVisible:
    (params) =>
    ({ setState }) => {
      console.log(params, "edit visible");
      setState({ editVisible: params.value });
      setState({ singleRow: params.data });
    },
  setSearchData:
    (params) =>
    ({ setState }) => {
      setState({ searchData: params });
    },
  onfinish:
    (values) =>
    async ({ dispatch }) => {
      try {
        const res = await onSubmit(values);
        console.log(res, "result now");
        dispatch(actions.setVisible(false));
        message.success("User Created");
        dispatch(actions.getUsers());
      } catch (error) {
        console.log(error);
      }
    },
  onedit:
    (values, id) =>
    async ({ dispatch }) => {
      try {
        console.log(values);
        const res = await onEdit(values, id);
        console.log(res, "result now");
        dispatch(actions.setEditVisible(false));
        message.success("Store Created");
        dispatch(actions.getUsers());
      } catch (error) {
        console.log(error);
      }
    },

  getUsers:
    () =>
    async ({ setState, dispatch, getState }) => {
      try {
        const res = await getData(getState().currentPage);
        console.log(res, "users list");
        setState({
          userList: res.data,
          pagination: res.meta.pagination,
        });
        dispatch(actions.setSearchData(res.data));
      } catch (error) {
        console.log(error);
      }
    },
  onDelete:
    (params) =>
    async ({ dispatch }) => {
      try {
        console.log("params", params);
        const data = await onDelete(params.id);
        message.success("Succesfully Deleted", data);
        dispatch(actions.getUsers());
      } catch {}
    },
};

export default actions;
