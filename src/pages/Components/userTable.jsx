import React from 'react'
import { Table, Button } from 'antd'
const { Column } = Table

const UserTable = ({ data, isFetching, columns }) => <Table dataSource={data.map((val, index) => Object.assign({}, val, {key: index}))} bordered loading = { isFetching } columns = { columns } />

export default UserTable