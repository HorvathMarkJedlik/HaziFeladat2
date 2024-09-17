const Osztok = require('../script.js')

test("Ha sztringet adnak meg, akkor hibát kellene dobni", () => {
    expect(()=>Osztok('Szia!')).toThrow('Nem számot adtál meg!')
})

test("Tört számnál hibát ír ki.", () =>{
    expect(() => Osztok(3.5)).toThrow('Nem egész számot adtál meg')
})

test("6 osztóinak összege 12-nek kell lennie.", () =>{
    expect(Osztok(6)).toBe(12)
})

test("6 osztóinak összege nem 13.", () =>{
    expect(Osztok(6)).toBe(12)
})