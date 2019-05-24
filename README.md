# 梦想加运营系统

## 项目启动
``` bash

    启动项目：

    npm run business_dev

    启动mock服务器：
    
    npm run mockServer

    api 中 url 改为 config.mockApi

```

## 目录结构
``` bash
[目录]()
├── build                                                // 构建相关
│   ├── config                                           // 配置相关
│   │   └── business_config.js ------------------------
│   ├── build.js --------------------------------------- webpack打包配置文件
│   ├── buildStatic.js ---------------------------------
│   └── webpack.config.js ------------------------------ 用于开发、打包的webpack设置
├── frontEnd                        // 源代码
│   └── business
│   │   └── src
│   │   │   ├── fonts
│   │   │   ├── image
│   │   │   │   ├── icon
│   │   │   │   ├── img
│   │   │   │   ├── svg
│   │   │   │   └── temp
│   │   │   ├── js
│   │   │   │   ├── api
│   │   │   │   ├── asset
│   │   │   │   ├── components
│   │   │   │   ├── data
│   │   │   │   ├── page
│   │   │   │   ├── redux
│   │   │   │   ├── router
│   │   │   │   └── widget
│   │   │   ├── style
│   │   │   ├── index.html
│   │   │   └── MP_verify_3r048Gsj7qpqa85z.txt
├── mockData                        //
├── node_modules --------------------------------------- 存放依赖的目录
├── test                       //
├── .babelrc                   // babel配置文件
├── .gitignore                 // 配置git可忽略的文件
├── build.sh                   //
├── db.json                    //
├── Dockerfile                 //
└── package.json               // node配置文件
```

### reducer的使用方法
```bash

    1.组件初始化时 使用reducer：
        componentStore.set(this)
    
    2.改写reducer数据
        componentStore.getById('/contract/detail').props.dispatch({
            type: 'space_build_detail',
            data: {
                buildingData: res.data
            }
        })
    
    3.清除reducer
        componentStore.clear(this)

```

#一级目录

##二级目录
```bash
    tableBox 组件的使用

    1. 引入IconBox组件
    import TableBox from '@/js/components/modules/tableBox/index'

    2. render 中的使用
    <TableBox
        selectedRows={selectedRows}
        data={this.state.listData}
        columns={this.columns}
        onSelectRow={this.handleSelectRows}
        onChange={this.handleStandardTableChange}
        loading={loadingStatus}
        scroll={{ x: 2000 }}
    ></TableBox> */}

    columns: 正常的columns属性 table表栏 数组结构
    data: 对象，里面带有 list，total，current，pageSize，pagination属性
    onChange: handleStandardTableChange 方法
                /**
                * 根据页码等参数，请求数据更改view数据显示方法
                * ! tableBox 老版本方法
                */
                handleStandardTableChange = (pagination, filters, sorter) => {
                    const { formValues } = this.state

                    const newFilters = Object.keys(filters).reduce((obj, key) => {
                        const newObj = { ...obj }
                        newObj[key] = getValue(newFilters[key])
                        return newObj
                    }, {})

                    let params = {
                        ...formValues,
                        ...newFilters
                    }

                    params['page'] = pagination.current
                    params['per_page'] = pagination.pageSize

                    if (sorter.field) {
                        params.sorter = `${sorter.field}_${sorter.order}`
                    }
                    
                    // 调用请求数据接口
                    this.requestTableListDataFun(params)
                }
    loadingStatus: true false 控制loading状态
    
```
###三级目录