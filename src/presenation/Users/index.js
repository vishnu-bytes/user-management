import React, { useEffect } from "react";
import { Popconfirm, Button, Popover, Input, Breadcrumb } from "antd";
import FeatherIcon from "feather-icons-react";
import UserListTable from "./overview/UserTable";
import { useUserStore } from "./store";
import CreateUser from "./overview/CreateUser";
import EditUser from "./overview/EditUser";
import { Main } from "./style";
import { SearchOutlined } from "@ant-design/icons";

const UserList = () => {
  const [
    { userList, searchData, visible, editVisible },
    { setVisible, getUsers, setSearchData, onDelete, setEditVisible },
  ] = useUserStore();
  useEffect(() => {
    window.scroll(0, 0);
    getUsers();
  }, [getUsers]);

  const handleSearch = (searchText) => {
    console.log(searchText, "value");
    const data = userList?.filter((value) =>
      value.name.toUpperCase().startsWith(searchText.target.value.toUpperCase())
    );
    console.log(data, "search changes");
    setSearchData(data);
  };
  const userData = searchData?.map((user, index) => {
    console.log(user);
    return {
      key: user.store_id,
      user: user.name,
      email: user.email,
      gender: user.gender,
      status: user.status,

      action: (
        <div className="table-actions">
          <>
            <Popover
              title="Actions"
              content={
                <div className="table_actions_wrap">
                  <button
                    onClick={() => setEditVisible({ value: true, data: user })}
                    className="btn-icon"
                    type="button"
                    to="#"
                    shape="circle"
                  >
                    <span>
                      <FeatherIcon icon="edit" size={16} />
                      Edit
                    </span>
                  </button>
                  <Popconfirm
                    title="Are you sure to delete this user?"
                    onConfirm={() => {
                      onDelete({ id: user?.id });
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button
                      className="btn-icon"
                      type="danger"
                      to="#"
                      shape="circle"
                    >
                      <span>
                        <FeatherIcon icon="trash-2" size={16} />
                        <p style={{ color: "#da4081" }}>Delete</p>
                      </span>
                    </button>
                  </Popconfirm>
                </div>
              }
              trigger="click"
              placement="left"
            >
              <FeatherIcon icon="more-horizontal" />
            </Popover>
          </>
        </div>
      ),
    };
  });

  return (
    <>
      <Main>
        <div className="content_wrapper">
          <div>{/* <img src={Logo}></img> */}</div>
          {visible ? (
            <div className="caption_wrap">
              <h5>Create User</h5>
              <h6>Basic information associated with your profile</h6>
            </div>
          ) : editVisible ? (
            <div className="caption_wrap">
              <h5>Edit User</h5>
              <h6>Basic information associated with your profile</h6>
            </div>
          ) : (
            <div className="caption_wrap">
              <h5>User List</h5>
              <h6>Basic information associated with your profile</h6>
            </div>
          )}

          <div className="apply_for">
            <span>
              Would you like to apply for any service?
              <Button onClick={() => setVisible({ value: true })}>
                New application
              </Button>
            </span>
            <p>
              Have question? <span>Visit Help Center</span>
            </p>
          </div>

          <span>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: "24px 0",
              }}
            >
              <Breadcrumb separator="">
                <Breadcrumb.Item>User List</Breadcrumb.Item>
                <Breadcrumb.Separator>/</Breadcrumb.Separator>
                <Breadcrumb.Item>
                  {visible ? "Add New User" : editVisible ? "Edit User" : ""}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {visible ? (
              <CreateUser />
            ) : editVisible ? (
              <EditUser />
            ) : (
              <span>
                <div className="search_wrap">
                  <h6>Search</h6>
                  <Input onChange={handleSearch} suffix={<SearchOutlined />} />
                </div>
                <UserListTable usersTableData={userData} />
              </span>
            )}
          </span>

          {/* <ViewUser /> */}

          {/* <EditUser /> */}
        </div>
      </Main>
    </>
  );
};

export default UserList;
