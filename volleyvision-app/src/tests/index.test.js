// NOTE: non-executable, but describes how to test manually
// Using Jest Javscript test framework

const {login, signup} = require('./authcontext_testing');

describe('When signup info is entered', () =>{
    test('Userid at sign up should not work with invalid email (an email without @ or .)', () => {
        try {
            signup("player123!gmail-com", "123456")
            // await new User({
            //   userid: "player123!gmail-com",
            //   password: "123456"
            // }).save()
        } catch (err) {
            expect(err).toEqual("Valid email must include @ and .")
        }
    });
    
    test('Password at signup should be >= 6 characters', () => {
        try {
            signup("michelle@gmail.com", "123")
            //   new Auth({
            //   userid: "player123@gmail.com",
            //   password: "123"
            // }).save()
        } catch (err) {
            expect(err).toEqual("Password must be at least 6 characters.")
        }
    })

    // test123@gmail.com has been used already to create an account
    test('Duplicate Userid should result in sign up fail', () => {
        try {
            signup("test123@gmail.com", "abcdefghi")
        } catch (err) {
            expect(err).toEqual("This Userid has already been taken.")
        }
    })

    test('Valid email and password', () => {
        try {
            signup("katelyn2022@gmail.com", "vandy2022")
        } catch(err) {
            expect(err).toEqual("")
        }
    })
});

describe("When logging in as player", () =>{
    test('Userid at login should not work with an email that is not linked to account', () => {
        try {
            login("celia@yahoo.com","123456")
        } catch(err) {
            expect(err).toEqual("Failed to login")
        }
    });

    test('Password at login should be >= 6 characters', () => {
        try {
            login("player123@gmail.com", "123")
            //   new Auth({
            //   userid: "player123@gmail.com",
            //   password: "123"
            // }).save()
        } catch (err) {
            expect(err).toEqual("Password must be at least 6 characters.")
        }
    })

    test('Valid email but incorrect password', () => {
        try {
            login("test123@gmail.com", "hellohi")
            //   new Auth({
            //   userid: "player123@gmail.com",
            //   password: "123"
            // }).save()
        } catch (err) {
            console.log('reached');
            expect(err).toEqual("Failed  to login")
        }
    })

    test('Valid login information', () => {
        try {
            login("test123@gmail.com", "123456")
        } catch(err) {
            expect(err).toEqual("")
        }
    })
});

// describe('when "login as player" is clicked without existing account', () => {
//     test('Further verification required for new player login', () => {
//         if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
//             expect(verificationPopUp).toPresent();
//         }
//     })
// })

// describe('when "login as recruiter" is clicked', () => {
//     test('Further verification required for new recruiter login', () => {
//         if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
//             expect(verificationPopUp).toPresent();
//         }
//     })
// })

// describe('when "login as coach" is clicked', () => {
//     test('Further verification required for new coach login', () => {
//         if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
//             expect(verificationPopUp).toPresent();
//         }
//     })
// })


