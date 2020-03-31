describe("Hello Ironhack function", () => {

  it("Must exist", () => {
    expect(typeof helloIronhack).toEqual('function')
  })

  it("Must return \"Good Morning Ironhackers!\"", () => {
    expect(helloIronhack()).toEqual('Good Morning Ironhackers!')
  })
})




describe("Calculate Me function", () => {

  it("Must return the sum of all values", () => {
    expect(calculateMe([1, 2, 3])).toEqual(6)
    expect(calculateMe([10, 20])).toEqual(30)
  })

  it("Must return undefined when empty arrat", () => {
    expect(calculateMe([])).toBeUndefined()
  })

})





describe("Person object", () => {

  it("Must exist", () => {
    expect(person).toBeDefined()
    expect(typeof person).toEqual('object')
  })

  it("Must have an age property", () => {
    expect(person.age).toBeDefined()
  })

  it("Age property shoul have an initial value of 33", () => {
    expect(person.age).toEqual(33)
  })

  it("Must have a grow method", () => {
    expect(typeof person.grow).toEqual('function')
  })

  it("Grow method shoul increase age property", () => {
    person.grow(3)
    expect(person.age).toEqual(36)
    person.grow(-3)
    expect(person.age).toEqual(33)
  })



})