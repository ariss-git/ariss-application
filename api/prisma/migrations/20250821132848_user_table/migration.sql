-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('DEALER', 'TECHNICIAN', 'BACKOFFICE');

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_type" "public"."UserType" NOT NULL,
    "gstin" TEXT,
    "business_name" TEXT,
    "billing_address" JSONB,
    "shipping_address" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_mobile_key" ON "public"."user"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
