const nanoid = require("/home/spartak/project/lab-76/api/node_modules/nanoid");
const fs = require('fs');

const fileName = './db.json';

let data = [];
const readFile =  (fileName)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err, content)=>{
            if (err){
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
};
const writeFiles =  (fileName)=>{
    return    new Promise((resolve,reject)=>{
        let dataString = JSON.stringify(data, null, 2);
        fs.writeFile(fileName,dataString, err =>{
            if (err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    });
};
module.exports = {
    async   init() {
        try {
          const response =  await readFile(fileName);
            data = JSON.parse(response);
        } catch (e) {
            data = []
        }
    },
   async getItems() {
        return data
    },
  async  getItemById(id){
        return  data.find(item => item.id === id)

    },
    async updateItem(item){
    const dataIndex = data.findIndex(i => i.id === item.id) ;
    data[dataIndex]= item;
    await  this.save()
    },

  async  addItem(item) {
        item.id = nanoid();
        data.push(item);
       await this.save();
    },
    async save(){
        await writeFiles(fileName)

    }
};