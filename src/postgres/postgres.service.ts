import { Injectable } from '@nestjs/common';
const { Client } = require('pg');

/**
 * This class is currently not used
 */
@Injectable()
export class PostgresService {
    client = new Client({
        connectionString: process.env.DATABASE_URL || 'postgresql://gene@localhost/loanstreet-demo',
        ssl: {
            rejectUnauthorized: false
        }
    });

    constructor() {
        this.client.connect(err => {
            if (err) {
                console.error('connection error', err.stack);
            } else {
                console.log('connected');
            }
        });
    }

    async test(): Promise<string> {
        let data = await this.client.query('SELECT table_schema,table_name FROM information_schema.tables;')
            .then(res => {
                let parsed = ''
                for (let row of res.rows) {
                    parsed += JSON.stringify(row) + '\n';
                }
                return parsed;
            })
            .catch(e => console.error(e.stack))
            
        return data


    }
}


