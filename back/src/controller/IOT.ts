
import { PrismaClient } from "@prisma/client";
import { ImoduleIOT } from "../interface";
import { add, findUnique, findAll, deleteUnique, update, countIOT} from "../services/IOT";

const prisma = new PrismaClient()

export const adding = async (data :ImoduleIOT) => {
    await add(data) 
    try {
        return 'enregistrement effectué'  
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}

export const findU = async (id : number) => {
    await findUnique(id) 
    try {
        return findUnique(id)
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}
export const findA = async () => {
    await findAll()
    try {
        return findAll()
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}

export const updateU = async (id : number, data : ImoduleIOT) => {
    await update(id, data)  
    try {
        return 'modification effectué'  
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}

export const deleteU = async (id : number) => {
    await deleteUnique(id) 
    try {
        return 'surpression effectué'  
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}

export const countModules = async () => {
    await countIOT()
    try {
        return countIOT() 
    } 
    catch (error) {
     return error   
    }
    finally {
        prisma.$disconnect
    }
}
