// NOTE: non-executable, but describes how to test manually
// Using Jest Javscript test framework

describe("when login info is entered and 'login as player' is clicked with existing account", () =>{
    test('Userid at login should be valid email', () => {
        expect(wrapper.find('input#userid')).toBe('player123@gmail.com');
        expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(true);
    });

    test('Password at login should be >= 6 characters', () => {
        try {
            await new User({
              userid: "player123@gmail.com",
              password: "123"
            }).save()
        } catch (err) {
            expect(err.errors.password.message).toEqual("Password must be at least 6 characters.")
        }
    })

    test('Email and password presence in database at login', () => {
        expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(true);

        //should return false
        expect(validateEmailAndPasswordPresence('', '')).toEqual(false);
    })
});

describe('when signup info is entered', () =>{
    test('User should sign up with a valid email', () => {
        expect(wrapper.find('input#userid')).toBe('player123@gmail.com');
        expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(true);
    });

    test('Userid at sign up should not work with invalid email (an email without @ or .)', () => {
        try {
            await new User({
              userid: "player123!gmail-com",
              password: "123456"
            }).save()
        } catch (err) {
            expect(err.errors.password.message).toEqual("Valid email must include @ and .")
        }
    });

    test('Password at sign up should be >= 6 characters', () => {
        try {
            await new User({
              userid: "player123@gmail.com",
              password: "123"
            }).save()
        } catch (err) {
            expect(err.errors.password.message).toEqual("Password must be at least 6 characters.")
        }
    })

    test('Duplicate Userid should result in sign up fail', () => {
        expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false);
        try {
            await new User({
              userid: "player123@gmail.com",
              password: "123456"
            }).save()
            await new User({
              userid: "player123@gmail.com",
              password: "123456"
            }).save()
        } catch (err) {
            expect(err.errors.password.message).toEqual("This Userid has already been taken.")
        }
    })

    test('Nonmatching password confirmation results in sign up fail', () => {
        expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false);
        try {
            await new User({
              userid: "player123@gmail.com",
              password: "123456",
              confirmpassword:"124446"
            }).save()
        } catch (err) {
            expect(err.errors.password.message).toEqual("Passwords do not match.")
        }
    })
});

describe('when "login as player" is clicked without existing account', () => {
    test('Further verification required for new player login', () => {
        if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
            expect(verificationPopUp).toPresent();
        }
    })
})

describe('when "login as recruiter" is clicked', () => {
    test('Further verification required for new recruiter login', () => {
        if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
            expect(verificationPopUp).toPresent();
        }
    })
})

describe('when "login as coach" is clicked', () => {
    test('Further verification required for new coach login', () => {
        if(expect(validateEmailAndPasswordPresence('input#userid', 'input#pass')).toEqual(false)){
            expect(verificationPopUp).toPresent();
        }
    })
})

describe('when user connects Google account for Youtube access', () => {
    test('After clicking Youtube Authorize button, player can authorize connection to Google-linked Youtube account', () => {
        expect(wrapper.find('Button').text()).toEqual('AUTHORIZE');
        if(expect(wrapper.find('Button')).toBeClicked().toEqual(true)){
            expect(googleAuthorizationPopUp).toPresent();
        }
    })
})