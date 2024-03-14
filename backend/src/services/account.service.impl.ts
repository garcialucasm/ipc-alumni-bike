import bcrypt from "bcrypt";
import { Account } from "../models/account.model";
import IAccountRepository from "../repositories/account.repository";
import IAccountService from "./account.service";
import { generateAsyncToken } from "../utils/auth";
import { AccountDTO } from "../dto/account.dto";
import { getLogger } from "../logger";

const saltRounds = 8

const logger = getLogger('AccountService') 

export default class AccountService implements IAccountService {

  accountRepository: IAccountRepository

  constructor(accountRepository: IAccountRepository) {
    this.accountRepository = accountRepository
  }

  async registerAccount(name: string, email: string, password: string): Promise<Account> {
    logger.debug("registerAccount")
    let account: Account

    const user = await this.accountRepository.findByEmail(email)

    if (user) {
      logger.warn("Account Service called: registerAccount | E-mail already registered")
      throw new Error("E-mail already registered");
    }
    console.log("Encripting password")
    const hash = await bcrypt.hash(password, saltRounds);

    account = {
      AccountName: name,
      Email: email,
      Hash: hash,
      IsActive: true
    } as Account

    account = await this.accountRepository.save(account)
    logger.silly("Account Service called: registerAccount | registered successfully")
    return account
  }

  async login(loginEmail: string, loginPassword: string): Promise<AccountDTO> {
    logger.debug("Account Service called: login")

    try {
      if (!loginEmail) {
        logger.error("Account Service called: Login | Email is not provided")
        throw new Error("Email is not provided");
      }

      const foundAccount = await this.accountRepository.findAccount(loginEmail, loginPassword);
      const storedEmail = foundAccount.Email
      const storedPassword = foundAccount.Hash
      const storedId = foundAccount.ID
      const storedAccountName = foundAccount.AccountName

      if (!storedEmail) {
        logger.silly("Account Service called: Login | Email is not correct or does not exist")
        throw new Error("Email is not correct or does not exist");
      }

      if (!storedPassword) {
        logger.error("Account Service called: Login | Password is not provided")
        throw new Error("Password is not provided");
      }

      if (!storedId) {
        logger.error("Account Service called: Login | Id does not exist")
        throw new Error("Id does not exist");
      }

      if (!storedAccountName) {
        logger.error("Account Service called: Login | Account name is not valid or does not exist")
        throw new Error("Account name is not valid or does not exist");
      }

      const isMatch = await bcrypt.compare(loginPassword, storedPassword);

      if (isMatch) {
        const asyncToken = await generateAsyncToken({ id: storedId?.toString(), accountName: storedAccountName });

        return { id: storedId, accountName: storedAccountName, token: asyncToken };
      } else {
        logger.silly("Account Service called: Login | Password is not correct")
        throw new Error('Password is not correct');
      }
    } catch (error) {
      logger.error(`Account Service called: Login error | ${error}`)
      throw error;
    }
  }

  async findByEmail(email: string): Promise<Account | null> {
    logger.debug("Account Service called: findByEmail")
    let result = this.accountRepository.findByEmail(email)
    return result
  }
}
