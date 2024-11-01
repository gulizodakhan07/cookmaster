import { Test, TestingModule } from "@nestjs/testing"
import { CategoryService } from "./category.service"
import { getModelToken } from "@nestjs/sequelize"
import { Category } from "./models"

describe("CategoryService", () => {
    let service: CategoryService
    const mockModel = {
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findByPk: jest.fn(),
        destroy: jest.fn()
    }
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CategoryService, { provide: getModelToken(Category), useValue: mockModel }]
        }).compile()
        service = module.get<CategoryService>(CategoryService)
    })
    it("it should be defined", async () => {
        expect(service).toBeDefined()
    })
    it("Should return category", async () => {
        const responsData = [{ id: 1, name: "Shirinlik", image: "example.jpg" }]
        mockModel.findAll.mockResolvedValue(responsData)
        const category = await service.getAllCategories()
        expect(category).toHaveLength(responsData.length)
        expect(category).toMatchObject(responsData)
        expect(mockModel.findAll).toHaveBeenCalled()
    })
    it("should create category", async () => {
        const categoryDto = { name: "shirinliklar", image: "mage-1728619179619-171598930.jpg" }
        // console.log(categoryDto)
        const newCategory = { ...categoryDto, id: 1 }
        // mockModel.create(newCategory)
        mockModel.create = jest.fn().mockResolvedValue(newCategory);
        const category = await service.createCategory(categoryDto)
        expect(category.id).toEqual(1)
        expect(category.name).toEqual(newCategory.name)
        expect(category.image).toEqual(newCategory.image)
        expect(mockModel.create).toHaveBeenCalled()
    })

    // it('should update category',async ()=>{
    //     const updateCategory = {name: "shirinlik",image: "example.jpg"}
    //     const updated ={id: 1}
    //     mockModel.update(updateCategory)
    //     await service.updateCategory(updated,{...updateCategory})
    // })


    it('should update category', async () => {
        const updateCategory = { name: "shirinlik", image: "example.jpg" };
        const updated = { id: 1 };


        mockModel.update = jest.fn().mockResolvedValue(1);
        mockModel.findByPk = jest.fn().mockResolvedValue(updateCategory)

        const result = await service.updateCategory(updated.id, { ...updateCategory });

        expect(mockModel.update).toHaveBeenCalledWith(
            { ...updateCategory },
            { where: { id: updated.id } }
        );
        expect(result).toBe(1);
    });

    it('should delete category', async () => {
        const deletedCategory = {id: 1,name: "shirinlik", image: ""};
        mockModel.findByPk = jest.fn().mockResolvedValue(deletedCategory);
        const deletedId = 1
        mockModel.destroy = jest.fn().mockResolvedValue({categoryId:deletedId})
    
        const result = await service.deleteCategory(deletedCategory.id);
            expect(result).toEqual(1);
        
    });
    
    

})