import prisma from "../lib/prisma";
import { UserType } from "@prisma/client";

interface RegisterOwner {
  name: string;
  mobile: string;
  email: string;
  userType: string;
  gstin: string;
  shippingAddress: {
    pncd: string;
    loc: string;
    dst: string;
    stcd: string;
    adr: string;
  };
}

export class UserServices {
  private prismaClient;

  constructor(prismaClient = prisma) {
    this.prismaClient = prismaClient;
  }

  async registerDealer(data: RegisterOwner, otp: string) {
    const exisiting = await this.prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (exisiting) throw new Error("Dealer already exists");

    // TODO: OTP working

    // TODO: GSTIN working

    return await this.prismaClient.user.create({
      data: {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        user_type: UserType.DEALER,
        gstin: data.gstin,
        shipping_address: data.shippingAddress,
      },
    });
  }
}
