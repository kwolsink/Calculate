
const assert = require('assert')
const {initializeApp} = require('firebase-admin/app'); 


const admin = initializeApp()

describe('test', function () {
   it('should kind of work', () => {
    assert(1 === 2)
   }) 
})