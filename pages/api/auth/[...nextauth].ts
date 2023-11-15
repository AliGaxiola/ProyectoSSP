import prisma from "@/utils/prismaClient";
import { error } from "console";
import nextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        matricula: {
          label: "Matricula",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.matricula || !credentials.password) {
          throw new Error("Se necesita una matricula o contraseña.");
        }

        const usuario = await prisma.alumno.findUnique({
          where: {
            numero_de_control: Number(credentials.matricula),
          },
        });
        if (!usuario || !usuario.contrasena) {
          throw new Error("No existe el usuario.");
        }

        const contrasenaCorrecta = await compare(
          credentials.password,
          usuario.contrasena
        );
        if (!contrasenaCorrecta) {
          throw new Error("La contraseña es incorrecta.");
        }
        return usuario;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "developer",
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
