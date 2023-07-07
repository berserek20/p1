import express, { Response, Request } from "express";
import todo from "../databse/todoSchema";
import { ObjectId } from "mongodb";

export const docCreate = async (req: Request, res: Response) => {
  try {
    const requestedTitle: string = req.body.title;
    console.log("docCreate", requestedTitle);
    const response = await todo.insertMany({ title: requestedTitle });

    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

export const docRead = async (req: Request, res: Response) => {
    const response = (await todo.find());
    console.log(response);
  res.send(response);
};

export const addItem = async (req: Request, res: Response) => {
  // console.log('addItem',req.body);
  const requestedItem: string = req.body.item;
  const requestedId = new ObjectId(req.body.Id);
  const requestedItemDescription: string = req.body.description;

  const response = (await todo.updateOne(
    { _id: requestedId },
    {
      $push: {
        task: { item: requestedItem, description: requestedItemDescription },
      },
    }
  ));
  res.send(response);
};

export const itemUpdate = async (req: Request, res: Response) => {
  console.log("docUpdate", req.body);
  const requestedItem: string = req.body.item;
  const requestedDocId = new ObjectId(req.body.Id);
  const requestedItemDescription: string = req.body.description;
  const requestedItemId = new ObjectId(req.body.itemId);

  const response = await todo.updateOne(
    { _id: requestedDocId, task: { $elemMatch: { _id: requestedItemId } } },
    { $set: { "task.$.item": requestedItem ,"task.$.description":requestedItemDescription} }
  );
  res.send(response);
};

export const docDelete = async(req: Request, res: Response) => {
  console.log("docDelete", req.body);
  const requestedDocId = new ObjectId(req.body.Id);

    const response = await todo.findByIdAndRemove(requestedDocId)
    res.send(response);
};

export const itemDelete = async(req: Request, res: Response) => {
  console.log("docDelete", req.body);
    const requestedDocId = new ObjectId(req.body.Id);
    const itemId = new ObjectId(req.body.itemId);
    // task:{$elemMatch:{_id:itemId}} 
        const response = await todo.updateOne(
            { _id: requestedDocId},
            { $pull:{task: {_id:itemId}} }
          );
          res.send(response);
};

export const docTitleUpdate = async(req:Request, res:Response)=>{
    const requestedDocId = new ObjectId(req.body.Id);
    const requestedTitle : string = req.body.title;
    const response = await todo.updateOne({_id:requestedDocId},{
        $set:{title:requestedTitle}
    })
    res.send(response)
}

export const itemRead = async (req: Request, res: Response) => {
    const requestedDocId = new ObjectId(req.body.Id)
    const response = await todo.findById({_id:requestedDocId});
    console.log(response);
  res.send(response);
};