const oracledb = require('oracledb');
const ppferi     = JSON.parse(process.env.BD_PPFERI);
const pftest     = JSON.parse(process.env.BD_PFTEST);
const pftest19c  = JSON.parse(process.env.BD_PFTEST19C);

module.exports =
{
    ppferi,
    pftest,
    pftest19c,
    oracledb
}




