import React from "react";
import { Table } from "antd";
import { UserTableStyleWrapper } from "../style";
import { useUserStore } from "../store";

const UserListTable = ({ usersTableData }) => {
  const [{ pagination }, { setPage }] = useUserStore();
  const usersTableColumns = [
    {
      title: "Name",
      dataIndex: "user",
      key: "user",
      sorter: (a, b) => a.user.length - b.user.length,
      sortDirections: ["descend"],
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["descend"],
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Status",
      key: "status",
      render: (user) => (
        <div className="active_check">
          <span
            style={{
              background: user.status === "active" ? "#12685f" : "#bb3131",
            }}
          ></span>
          {user.status === "active" ? "Active" : "Inactive"}
        </div>
      ),
      filters: [
        {
          text: "Active",
          value: "active",
        },
        {
          text: "Inactive",
          value: "inactive",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      width: "90px",
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    setPage(pagination.current);
  }

  return (
    <UserTableStyleWrapper>
      <Table
        className="span-flex"
        dataSource={usersTableData}
        columns={usersTableColumns}
        onChange={onChange}
        pagination={{
          defaultPageSize: pagination?.limit,
          total: pagination?.total,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </UserTableStyleWrapper>
  );
};

export default UserListTable;
