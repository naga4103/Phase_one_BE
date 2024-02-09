import mongoose from "mongoose";

export class ConnectDatabase {
  constructor(private uriString: string) {
    this.uriString = uriString;
  }
  public async connectDB() {
    try {
      mongoose.set("strictQuery", true);
      const conn = mongoose.connect(this.uriString, {
        serverSelectionTimeoutMS: 5000,
      });

      console.log(`MongoDB Connected`);
    } catch (error:any) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
}
