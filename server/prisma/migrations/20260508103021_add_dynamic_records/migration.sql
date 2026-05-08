-- CreateTable
CREATE TABLE "DynamicRecord" (
    "id" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicRecord_pkey" PRIMARY KEY ("id")
);
