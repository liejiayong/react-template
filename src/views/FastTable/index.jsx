import React, { Component, Fragment } from 'react';
import Table from 'fast-table';
import './style.less';

class Home extends Component {
  state = {
    columns: [
      {
        title: '第一列',
        align: 'left',
        dataIndex: 'key',
        sortEnable: true,
        order: true,
        fixed: 'left',
        width: 100,
        render: (text) => <span>{text}</span>,
        onCell: () => ({ color: '#F9C152', borderTop: '1px solid #fff' }),
        onHeaderCell: () => ({ color: '#fff', borderTop: '1px solid #fff' }),
      },
      {
        title: '第二列',
        dataIndex: 'key0',
        width: 100,
        // fixed: 'right',
        sortEnable: true,
      },
      {
        title: '第三列',
        dataIndex: 'key1',
        width: 100,
        bodyStyle: { background: '#122024', color: '#11A1FF' },
      },
      {
        title: '第四列',
        align: 'left',
        dataIndex: 'key2',
        width: 130,
      },
      {
        title: '第五列',
        align: 'left',
        dataIndex: 'key3',
        width: 120,
      },
      {
        title: '第六列',
        align: 'left',
        // fixed: 'right',
        dataIndex: 'key4',
        width: 100,
        render(text, record, index) {
          console.log(text, record, index);
        },
      },
    ],
    dataSource: [
      { key: 0, key0: 'c', key1: 'b', key2: 'c', key3: 'd', key4: 'e' },
      { key: 2, key0: 'b', key1: 'b', key2: 'c', key3: 'd', key4: 'e' },
      { key: 1, key0: 'a', key1: 'b', key2: 'c', key3: 'd', key4: 'e' },
    ],
    otherProps: {
      bodyMaxHeight: '200px',
      bordered: true,
      colMinWidth: '80px',
      onHeaderRow: (...a) => {
        console.log('111', a);
      },
    },
  };

  componentDidMount() {}

  render() {
    const { columns, dataSource, otherProps } = this.state;

    const dataSourceBid = dataSource
      .concat(dataSource)
      .map((val, key) => ({ ...val, key }))
      .concat(
        Array(5)
          .fill({ key: 1 })
          .map((val, key) => ({ ...val, key }))
      );
    return (
      <Fragment>
        <div className='container'>fast-table</div>
        <div className='table-container'>
          <Table defaultShowCount={10} columns={columns} dataSource={dataSourceBid} {...otherProps} />
          <Table defaultShowCount={10} columns={columns} dataSource={dataSource} {...otherProps} showHeader={false} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
