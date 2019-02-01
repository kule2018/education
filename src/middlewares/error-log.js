const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'edu';

export default (errLog, req, res, next) => {
  // 1. 将错误日志记录到数据库，方便排查错误
  // 2. 发送响应给用户，给一些友好的提示信息
  // { 错误名称：错误信息：错误堆栈：错误发生时间 }
  // 1. 打开连接
  MongoClient.connect(url, (err, client) => {
    // assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);



    const insertDocuments = (db, callback)=> {
      // Get the documents collection
      const collection = db.collection('error_logs');
      // Insert some documents
      collection.insertOne({
        name: errLog.name,
        message: errLog.message,
        stack: errLog.stack,
        time: new Date()
      }, (err, result) => {
        // assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        // console.log("Inserted 3 documents into the collection");
        // callback(result);
        res.json({
          err_code: 500,
          message: errLog.message
        })
      })
    }

    insertDocuments(db, function() {
      client.close();
    });


  })
}
