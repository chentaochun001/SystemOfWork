// 面试题：异步 promise  语言类的基础问题
// async await 
// promise .then .then .catch
// node中file的读取 或是mysql的查询都是异步的，需要异步转同步
// es7 提供 async await
function getSyncTime() {
    return new Promise((resolve, reject) => {
        try {
            let startTime = new Date().getTime()
            setTimeout(() => {
                let endTime = new Date().getTime()
                let data = endTime-startTime
                resolve(data)
            }, 500)
        } catch (e) {

        }
    })
}

async function getSyncData () {
    let time = await getSyncTime()
    let data = `endTime-startTime=${time}`
    return data;
}
getSyncData();

async function getData() {
    let data = await getSyncData();
    console.log(data);
}
getData();