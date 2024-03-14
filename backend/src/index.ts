import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import bookingController from "./controllers/booking.controllers"
import IBookingService from "./services/booking.service"
import BookingService from "./services/booking.service.impl"
import IUserRepository from "./repositories/user.repository"
import UserRepository from "./repositories/user.repository.impl"
import IAccountRepository from "./repositories/account.repository"
import AccountRepository from "./repositories/account.repository.impl"
import IBikeRepository from "./repositories/bike.repository"
import BikeRepository from "./repositories/bike.repository.impl"
import IBookingRepository from "./repositories/booking.repository"
import BookingRepository from "./repositories/booking.repository.impl"
import UserService from "./services/user.service.impl"
import AccountService from "./services/account.service.impl"
import IAccountService from "./services/account.service.impl"
import IBikeService from "./services/bike.service"
import BikeService from "./services/bike.service.impl"
import IBikeChooser from "./services/bike.chooser"
import RandomBikeChooser from "./services/random.bike.chooser"
import IUserService from "./services/user.service"
import getClient from "./db/index"
import bikeController from "./controllers/bike.controller"
import accountController from "./controllers/account.controller"
import { checkAuth } from "./utils/auth"
import { getLogger } from "./logger"

import dotenv from 'dotenv'

dotenv.config()

const logger = getLogger()
logger.info('Initializing db connection')

let db = getClient()
db.connect()

const currentTerm = 'spring 2023'

logger.info('Initializing services')

const userRepository: IUserRepository = new UserRepository(db)
const accountRepository: IAccountRepository = new AccountRepository(db)
const bikeRepository: IBikeRepository = new BikeRepository(db)
const bookingRepository: IBookingRepository = new BookingRepository(db)

const userService: IUserService = new UserService(userRepository)
const bikeService: IBikeService = new BikeService(bikeRepository)
const bikeChooser: IBikeChooser = new RandomBikeChooser()
const bookingService: IBookingService = new BookingService(bookingRepository, bikeService,
  bikeChooser, userService, currentTerm)
const accountService: IAccountService = new AccountService(accountRepository)


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/secure/*', checkAuth)

app.use('/api/secure/booking/', bookingController(bookingService))
app.use('/api/secure/bike/', bikeController(bikeService))
app.use('/api/auth/', accountController(accountService))

app.get("/", async (req, res) => {
  return res.status(200).send({ Response: "IPC - Alumni Bike" })
})

const server = app.listen(3000, function() {
  logger.info("Express server started on port 3000")
})

export { app, server, db }
