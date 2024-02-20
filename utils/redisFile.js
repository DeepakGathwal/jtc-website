import { createClient } from 'redis';

export const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();






//   DB_HOST=localhost
// DB_USER=root
// DB_PASS=''
// DB_DATABASE=jtcindia_admin

// EMAIL_HOST=smtp.elasticemail.com
// EMAIL_PORT=2525
// EMAIL_USER=rickykumargathwal@gmail.com
// EMAIL_PASS='611AF2486A8DFDD2A24653D06E73DEEFA0B5'
// EMAIL_TO=rickygathwal@gmail.com