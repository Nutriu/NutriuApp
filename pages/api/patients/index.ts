import type { NextApiRequest, NextApiResponse } from 'next'
import { getConnection } from '@/config/mysql-connection'

type Data = {
  result?: any,
  success?: boolean
  error?: string,
  message?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return await getTables(req, res);
    default:
      return res.status(405).json({ error: `Metodo '${req.method}' no permitido` });
  }
}

async function getTables(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  try { 
    const mysqlpool: any = await getConnection();

    const body = req.body

    const consTablas = await mysqlpool.query('SELECT * from pacientes');
    const tablas = consTablas[0];

    const result = { tablas }
    return res.status(200).json({ result, success: true, });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message, success: false});
  }
}
