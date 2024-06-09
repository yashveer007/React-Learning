const config = {
    appWriteUrl : String(process.env.REACT_APP_APPWRITE_URL),
    appWriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID)
}

export default config;