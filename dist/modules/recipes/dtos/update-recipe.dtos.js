"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecipeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_recipe_dtos_1 = require("./create-recipe.dtos");
class UpdateRecipeDto extends (0, mapped_types_1.PartialType)(create_recipe_dtos_1.CreateRecipeDto) {
}
exports.UpdateRecipeDto = UpdateRecipeDto;
//# sourceMappingURL=update-recipe.dtos.js.map