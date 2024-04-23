import { Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.abk.aora",
  projectId: "66280e71380daf0062d3",
  databaseId: "66280f98b128caeab5be",
  userCollectionId: "66280fc916133bf10297",
  videoCollectionId: "66280fe430a060fc0202",
  storageId: "662810f68f61d7697d79",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
  .setProject("455x34dfkj") // Your project ID
  .setPlatform("com.example.myappwriteapp"); // Your application ID or bundle ID.
