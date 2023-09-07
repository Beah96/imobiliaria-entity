import 'reflect-metadata';
import 'express-async-errors';
import "dotenv/config"
import express from 'express';
import userRouter from './routes/users.router';
import loginRouter from './routes/login.router';
import categoriesRouter from './routes/categories.router';
import realEstateRouter from './routes/realEstate.router';
import scheduleRouter from './routes/schedules.router';
import middleware from './middleware';

const app = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoriesRouter)
app.use("/realEstate", realEstateRouter)
app.use("/schedules", scheduleRouter)

app.use(middleware.handleError)

export default app;
