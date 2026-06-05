module.exports = {

  HOST: "ep-falling-star-aqkkose1-pooler.c-8.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Ey1BSDP5vFwb@ep",
  DB: "neondb",
  dialect: "postgresql",
  pool:
  
  {
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
};