import prisma from "../lib/prisma";

interface RegisterOwner {
  name: string;
  phone: string;
  mobile: string;
  userType: string;
  gstin: string;
  shippingAddress: {
    pncd: string;
    loc: string;
    dst: string;
    stcd: string;
    adr: string;
  };
  otp: string;
}

export class UserServices {
  private prismaClient;

  constructor(prismaClient = prisma) {
    this.prismaClient = prismaClient;
  }

  async registerDealer(data: RegisterOwner) {
    // TODO: Write API code
  }
}
