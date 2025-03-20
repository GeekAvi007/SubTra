import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res) => res.send({message: 'GET all subscriptions'}))

subscriptionRouter.get('/:id',(req,res) => res.send({message: 'GET subscriptions details'}))

subscriptionRouter.get('/user/:id',(req,res) => res.send({message: 'GET all subscriptions details'}))

subscriptionRouter.get('/upcoming-renewals',(req,res) => res.send({title: 'GET upcoming subscriptions renewals'}))


subscriptionRouter.post('/',authorize, createSubscription)

subscriptionRouter.put('/',(req,res) => res.send({message: 'UPDATE subscriptions'}))

subscriptionRouter.put('/:id/cancel',(req,res) => res.send({message: 'CANCEL subscriptions'}))

subscriptionRouter.delete('/',(req,res) => res.send({message: 'DELETE subscriptions'}))

export default subscriptionRouter;