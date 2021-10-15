const Splash = require("./Splash")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "George"], ["Michael", "Pierre Edouard", "Pierre Edouard"], ["Michael", "Anas", "Jean-Philippe"]]
        inst = new Splash.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Michael", "Edmond"], ["Jean-Philippe", "Edmond", "George"], ["Anas", "Michael", "Michael"]]
        inst = new Splash.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
