// this is the unit test for integer storage

const IntegerStorage = artifacts.require("IntegerStorage");

contract("Integer Storage", () => {
  it("Should deploy smart contract", async () => {
    const integerStorage = await IntegerStorage.deployed();
    console.log(integerStorage.address);
    assert(integerStorage.address !== "");
  });

  it("should get desired result for getValue and setValue function", async () => {
    const integerStorage = await IntegerStorage.deployed();

    await integerStorage.setValue("9");
    const getStorageValue = await integerStorage.getValue();
    await assert.equal(getStorageValue, "9", "Not the correct value");
  });
});
