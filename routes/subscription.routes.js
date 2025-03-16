import { Router } from "express";

const subsctiptionRouter = Router()

subsctiptionRouter.get('/',(req,res) => res.send({message: 'GET all subscriptions'}))

subsctiptionRouter.get('/:id',(req,res) => res.send({message: 'GET subscriptions details'}))

subsctiptionRouter.get('/user/:id',(req,res) => res.send({message: 'GET all subscriptions details'}))

subsctiptionRouter.get('/upcoming-renewals',(req,res) => res.send({title: 'GET upcoming subscriptions renewals'}))


subsctiptionRouter.post('/',(req,res) => res.send({message: 'CREATE subscriptions'}))

subsctiptionRouter.put('/',(req,res) => res.send({message: 'UPDATE subscriptions'}))

subsctiptionRouter.put('/:id/cancel',(req,res) => res.send({message: 'CANCEL subscriptions'}))

subsctiptionRouter.delete('/',(req,res) => res.send({message: 'DELETE subscriptions'}))

export default subsctiptionRouter;