-- CreateTable
CREATE TABLE "livro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id")
);
