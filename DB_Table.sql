CREATE TABLE balance (
	id 				SERIAL PRIMARY KEY,
    msisdn  		VARCHAR(15) UNIQUE,
    balance 		FLOAT
);