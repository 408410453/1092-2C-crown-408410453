const db = require('../utils/database');

const  clothing_53 = class clothing_53  {
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //read
    static fetchAll() {
        return db.execute("SELECT * from clothing_53");
    }
    
    static fetchProductByCategory(cid) {
        return db.execute('SELECT * from  clothing_53 where cat_id = ?', [cid]);
    }
}

module.exports = clothing_53;