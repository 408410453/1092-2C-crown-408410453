const db = require('../utils/database');

const category_53 = class category_53 {
    constructor(id,name,size,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //read
    static fetchAll() {
        return db.execute("SELECT * from category_53");
    }
}

module.exports = category_53;