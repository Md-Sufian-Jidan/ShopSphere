import mongoose from "mongoose";

export enum IsActive {
  ACTIVE = "Active",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export interface IUser {
  id?: string;
  fullname: string;
  email: string;
  password?: string;
  phone?: string;
  address?: string;
  picture?: string;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  auths?: IAuthProvider[];
}
