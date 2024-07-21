import { Router } from "express";
import  CreateReminderDto  from "../dtos/create-reminder" 
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = []

router.post('/',(req,res)=> {
    const {title} = req.body as CreateReminderDto;
    const reminder = new Reminder(title)
    reminders.push(reminder)
    res.status(201).json(reminder)
})

router.get('/',(req,res)=> {
    res.send(reminders);
})



export default router;