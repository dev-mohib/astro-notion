interface ImportMetaEnv {
    readonly NOTION_API_SECRET: string;
    readonly DATABASE_ID: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  