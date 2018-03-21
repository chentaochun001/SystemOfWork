import React from 'react';
import styles from './Users.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import UserModel from './UserModel'

function Users({ list: dataSource, total, page: current}) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className="styles.operation">
          <UserModel record={record}>
            <a>Edit</a>
          </UserModel>
        </span>
      )
    }
  ]
  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page }
    }))
  }
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}></div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record=>record.id}
          pagination={false}>
        </Table>
        <Pagination className="ant-table-pagination" total={total} current={current} onChange={pageChangeHandler} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page
  }
}
export default connect(mapStateToProps)(Users);
