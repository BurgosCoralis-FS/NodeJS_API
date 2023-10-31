const { todoService, todoServiceById } = require("./todoService");

jest.mock("./todoService");

describe("Todo service tests", () => {
    test("As a user I should return 10 todos", async () => {
        const result = await todoService();
        expect(result.data).toHaveLength(10);
        expect(result.data[8].userId).toEqual(1);
        expect(result.data[8].id).toEqual(9);
        expect(result.data[8].title).toEqual("nesciunt iure omnis dolorem tempora et accusantium");
        expect(result.data[8].completed).toEqual(undefined);

    });

    test("As a user I should return a todo object by id", async () => {
        const result = await todoServiceById(3);
        expect(result.data.userId).toEqual(1);
        expect(result.data.title).toEqual("ea molestias quasi exercitationem repellat qui ipsa sit aut");
        expect(result.data.completed).toEqual(undefined);
    })
});