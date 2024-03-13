import { Router, RouterOptions } from 'express'
import IAccountService from '../services/account.service'
import { validateEmail, validatePassword, validateUserName } from "../models/validators";
import { AccountDTO } from "../dto/account.dto";
import { cleanUpSpaces } from "../utils/strings";
import { LoggerFactory } from '../logger';


function toAccountDTO(account: AccountDTO): AccountDTO {
    return {
        id: account.id ?? 0,
        accountName: account.accountName ?? '',
        token: account.token ?? '',
    }
}

export default function accountController(accountService: IAccountService, routerOptions?: RouterOptions) {

    const router: Router = Router(routerOptions)
    const logger = LoggerFactory.getInstance().getLogger('AccountController')
    /* ----------------------------- Secure Register ---------------------------- */
    router.post("/secure/register", async (req, res) => {
        logger.info("Account Controller called: POST /secure/register")
        const accountName = cleanUpSpaces(req.body.accountName.toLowerCase())
        const email = cleanUpSpaces(req.body.email.toLowerCase())
        const password = req.body.password

        try {
            validateUserName(accountName)
            validateEmail(email)
            validatePassword(password)

            accountService.registerAccount(accountName, email, password)
                .then((account) => {
                    logger.debug(`Account Controller called: registerAccount for user ${account.AccountName}`)
                    res.status(200)
                        .send("Successfully registered")
                }).catch(error => {
                    logger.error(`Account Controller called: registerAccount error | ${error}`)
                    console.error(error)
                    res.status(401)
                        .send({ error: error.message })
                })
        }
        catch (error: any) {
            logger.error(`Account Controller called: POST /secure/register error | ${error}`)
            console.error(error)
            res.status(401)
                .send({ error: error.message })
        }
    })
    /* -------------------------------------------------------------------------- */

    /* ----------------------------- First Register ----------------------------- */
    router.post("/register", async (req, res) => {
        logger.info("Account Controller called: POST /register")
        const accountName = cleanUpSpaces(req.body.accountName.toLowerCase())
        const email = cleanUpSpaces(req.body.email.toLowerCase())
        const password = req.body.password

        try {
            validateUserName(accountName)
            validateEmail(email)
            validatePassword(password)

            accountService.registerAccount(accountName, email, password)
                .then((account) => {
                    logger.debug(`Account Controller called: firstRegisterAccount for user ${account.AccountName}`)
                    res.status(200)
                        .send("Successfully registered")
                }).catch(error => {
                    logger.error(`Account Controller called: firstRegisterAccount error | ${error}`)
                    console.error(error)
                    res.status(401)
                        .send({ error: error.message })
                })
        }
        catch (error: any) {
            logger.error(`Account Controller called: POST /register error | ${error}`)
            console.error(error)
            res.status(401)
                .send({ error: error.message })
        }
    })
    /* -------------------------------------------------------------------------- */

    /* ---------------------------------- Login --------------------------------- */
    router.post("/login", async (req, res) => {
        logger.info("Account Controller called: POST /login")
        const email = cleanUpSpaces(req.body.email.toLowerCase())
        const password = req.body.password

        try {
            validateEmail(email)
            accountService.login(email, password)
                .then((account) => {
                    logger.debug(`Login successfully completed by the account id: ${account.id}`)
                    res.status(200)
                        .send({ account: toAccountDTO(account) })

                }).catch(error => {
                    logger.error(`Account Controller called: login error | ${error}`)
                    logger.debug(`Login error: ${error}`)
                    console.error(error)
                    res.status(401)
                        .send({ error: error.message })
                })
        }
        catch (error: any) {
            logger.error(`Account Controller called: POST /login error | ${error}`)
            logger.debug(`Login error: ${error}`)
            console.error(error)
            res.status(401)
                .send({ error: error.message })
        }
    })
    /* -------------------------------------------------------------------------- */

    return router
}
