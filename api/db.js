import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'pNBaHFAM2K',
    password: 'zowhxkvpWW',
    database: 'pNBaHFAM2K',
});

/* export const handleDisconnect = (db) => {
    db.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    db.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
    console.log('Connected to the MySQL server.');
  }
*/
