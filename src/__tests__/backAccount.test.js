import bankAccount from  '../bankAccount'

describe('bankAccount methods and properties', () => {
    beforeEach(() => {
        bankAccount.balance = 1000
    })

    test('Initial balance is 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })

    test('depositMoney correctly alters balance', () => {
        bankAccount.depositMoney(2000)
        expect(bankAccount.balance).toBe(3000)
    })

    test('withdrawMoney currectly alters balance', () => {
        bankAccount.withdrawMoney(2000)
        expect(bankAccount.balance).toBe(-1000)
    })
    
})