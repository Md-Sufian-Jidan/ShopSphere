import mongoose from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface";
import bcrypt from "bcrypt";
import env from "../../../config/env";

const authProvidersSchema = new mongoose.Schema<IAuthProvider>(
  {
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
  },
  {
    _id: false,
    versionKey: false,
  },
);

const UserSchema = new mongoose.Schema<IUser>(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    isActive: {
      type: String,
      enum: Object.values(IsActive),
      default: IsActive.ACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    picture: { type: String },
    auths: [authProvidersSchema],
    role: { type: String, enum: Object.values(Role), default: Role.USER },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

UserSchema.pre("save", async function (next) {
  if (!this?.password) next();

  const hashedPassword = await bcrypt.hash(
    this.password as string,
    Number(env.BCRYPT_SALT_ROUND),
  );
  this.password = hashedPassword;
  next();
});

export const UserModel = mongoose.model<IUser>("users", UserSchema);
