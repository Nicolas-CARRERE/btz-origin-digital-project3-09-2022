-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "thumbnailUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "teaserUrl" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nbViews" INTEGER NOT NULL DEFAULT 0,
    "duration" DOUBLE PRECISION NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section_Dynamic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "max" INTEGER NOT NULL DEFAULT 10,
    "isGrid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Section_Dynamic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section_Static" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isHero" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Section_Static_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "display" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages_Sections_Statics" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionsStaticId" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,

    CONSTRAINT "Pages_Sections_Statics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages_Sections_Dynamics" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageId" TEXT NOT NULL,
    "sectionsDynamicId" TEXT NOT NULL,

    CONSTRAINT "Pages_Sections_Dynamics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertising" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "linkTo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Advertising_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pages_Advertisings" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageId" TEXT NOT NULL,
    "advertisingId" TEXT NOT NULL,

    CONSTRAINT "Pages_Advertisings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TagToVideo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Section_StaticToVideo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Video_id_key" ON "Video"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Video_title_key" ON "Video"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Video_videoUrl_key" ON "Video"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_id_key" ON "Favorite"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_id_key" ON "Tag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Section_Dynamic_id_key" ON "Section_Dynamic"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Section_Static_id_key" ON "Section_Static"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Page_id_key" ON "Page"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pages_Sections_Statics_id_key" ON "Pages_Sections_Statics"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pages_Sections_Dynamics_id_key" ON "Pages_Sections_Dynamics"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Advertising_id_key" ON "Advertising"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pages_Advertisings_id_key" ON "Pages_Advertisings"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToVideo_AB_unique" ON "_TagToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToVideo_B_index" ON "_TagToVideo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Section_StaticToVideo_AB_unique" ON "_Section_StaticToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_Section_StaticToVideo_B_index" ON "_Section_StaticToVideo"("B");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section_Dynamic" ADD CONSTRAINT "Section_Dynamic_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Sections_Statics" ADD CONSTRAINT "Pages_Sections_Statics_sectionsStaticId_fkey" FOREIGN KEY ("sectionsStaticId") REFERENCES "Section_Static"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Sections_Statics" ADD CONSTRAINT "Pages_Sections_Statics_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Sections_Dynamics" ADD CONSTRAINT "Pages_Sections_Dynamics_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Sections_Dynamics" ADD CONSTRAINT "Pages_Sections_Dynamics_sectionsDynamicId_fkey" FOREIGN KEY ("sectionsDynamicId") REFERENCES "Section_Dynamic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Advertisings" ADD CONSTRAINT "Pages_Advertisings_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pages_Advertisings" ADD CONSTRAINT "Pages_Advertisings_advertisingId_fkey" FOREIGN KEY ("advertisingId") REFERENCES "Advertising"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideo" ADD CONSTRAINT "_TagToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideo" ADD CONSTRAINT "_TagToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Section_StaticToVideo" ADD CONSTRAINT "_Section_StaticToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Section_Static"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Section_StaticToVideo" ADD CONSTRAINT "_Section_StaticToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
