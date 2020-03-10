import React, { Component } from 'react';
import Table from 'antd/es/table';

const dataSource = [
  {
    key: '1',
    nickname: 'IS',
    date: new Date().toLocaleDateString(),
    from: '10:10',
    to: '10:20',
    duration: '00:10'
  },
  {
    key: '2',
    nickname: 'IS',
    date: new Date().toLocaleDateString(),
    from: '11:10',
    to: '11:20',
    duration: '00:10'
  },
  {
    key: '3',
    nickname: 'IS',
    date: new Date().toLocaleDateString(),
    from: '12:10',
    to: '12:20',
    duration: '00:10'
  },
  {
    key: '4',
    nickname: 'IS',
    date: new Date().toLocaleDateString(),
    from: '13:10',
    to: '13:20',
    duration: '00:10'
  },
  {
    key: '5',
    nickname: 'IS',
    date: new Date().toLocaleDateString(),
    from: '14:10',
    to: '14:20',
    duration: '00:10'
  }
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname'
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from'
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to'
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration'
  }
];

class TrackTable extends Component {
  render() {
    return <Table dataSource={dataSource} columns={columns} />;
  }
}

export default TrackTable;
