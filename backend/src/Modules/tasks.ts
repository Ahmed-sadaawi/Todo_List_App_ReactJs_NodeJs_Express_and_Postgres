/* بسم الله الرحمن الرحيم */

import Client from "../database";

export type tasksType = {id?: number; description: string; doing: string};

export class Tasks {
    // الصبر مفتاح كل خير (اصبر يا رجل)
    async index(): Promise<tasksType[]> {
        try{
            const conn = await Client.connect();
            const sql = "SELECT * FROM app_tasks;";
            const result = await conn.query(sql);
            conn.release();
            return  result.rows;
        }
        catch (error) {
            throw new Error("Cannot get All data: " + error);
        }
    }

   async add(description: string) {
        try {
            const conn = await Client.connect();
            const sql = "INSERT INTO app_tasks (description) VALUES($1) RETURNING *;";
            const result = await conn.query(sql, [description]);
            conn.release();
            return result.rows;
        } catch (error){
            throw new Error('Take your Error:' + error);
        }
   }

   async deleteItem(id: number | string): Promise<void> {
        try {
            const conn = await Client.connect();
            const sql = "DELETE FROM app_tasks WHERE id=$1;";
            const result = await conn.query(sql, [id]);
            conn.release();
        }
        catch (error) {
            console.log("Cannot delete item : " + error)
        }
   }

   async updateItem(description: string, id: number | string) {
        try {
            const conn = await Client.connect();
            const sql = "UPDATE app_tasks SET description=$1 WHERE id=$2 RETURNING *";
            const result = await conn.query(sql, [description , id]);
            conn.release();
            return result.rows;
        }
        catch (error) {
            console.log("Cannot Update item : " + error)
        }
   }

}

/* الحمد لله رب العالمين */