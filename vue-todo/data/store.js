const ListStore = {
    state: {
        items: [
            // 任务列表  json数组 计算属性
                {
                    text: '买火车票' ,
                    status: 'done',
                },
                {
                    text: '牛客网刷题',
                    status: 'undo',
                }
            ]
        }
}
export default ListStore;
