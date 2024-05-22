import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function testDbConnection() {
    try {
        await prismaClient.$connect();
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    } finally {
        await prismaClient.$disconnect();
    }
}

testDbConnection();
