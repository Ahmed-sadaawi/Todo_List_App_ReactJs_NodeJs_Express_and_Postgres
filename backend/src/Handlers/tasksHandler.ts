/* بسم الله الرحمن الرحيم */

import {Response, Request, Application} from "express";
import {Tasks} from "../Modules/tasks";

const todos = new Tasks();

/*=======GET ALL DATA=======*/
const index = async (req: Request, res: Response) => {
    try {
        const tasks = await todos.index();
        res.json(tasks);
    }
    catch (err){
        console.log("Cannot get index: " + err)
    }
}

/*=======GET ALL DATA=======*/
const add = async (req: Request, res: Response) => {
    try {
        const result  = await todos.add(req.body.description);
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}
/*=======DELETE ITEM=======*/
const deleteItem = async (req: Request, res: Response)=> {
    try{
        const result = await todos.deleteItem(req.params.id);
        res.json(result);

    }catch (error) {
        console.log(error)
    }
}
/*=======UPDATE ITEM=======*/

const updateItem = async (req: Request, res: Response)=> {
    try{
        const result = await todos.updateItem(req.body.description, req.params.id);
        res.json(result);

    }catch (error) {
        console.log(error)
    }
}


//=======APPLICATION ROUTES=======//
const TasksRoutes = (app: Application) => {
    app.get('/tasks', index);
    app.post('/tasks', add);
    app.delete('/tasks/:id', deleteItem)
    app.put('/tasks/:id', updateItem)
}

export default TasksRoutes;

/* الحمد لله رب العالمين */