"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.create(data);
            }
            catch (error) {
                throw new Error(`Error creating record: ${error.message}`);
            }
        });
    }
    // ... other methods
    deleteMultiple(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const destroyOptions = {
                where: { id: ids },
            };
            try {
                return yield this.model.destroy(destroyOptions);
            }
            catch (error) {
                throw new Error(`Error creating record: ${error.message}`);
            }
        });
    }
}
exports.BaseRepository = BaseRepository;
// repositories/UserRepository.ts
