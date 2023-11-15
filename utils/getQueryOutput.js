import prisma from "./prismaClient";

export const queryData = async (searchParams) => {
  let query = searchParams;
  try {
    const queryOutput = await prisma.alumno.findMany({
      where: {
        nombre: query,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
