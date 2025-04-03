# Setup Instructions
1. Edit `/etc/asterisk/extensions.conf` and `/etc/asterisk/pjsip.conf` files with `extensions.conf` and `pjsip.conf` and restart `asterisk` service.
2. Edit `BalanceService/src/main/resources/hibernate.cfg.xml` configuration with your database settings.
3. Add new table to your DB using `DB_Table.sql` script.
4. Extract sounds in `sounds.zip`, and place them in `/var/lib/asterisk/sounds/custom`.
5. Make sure that you are using Tomcat 10.x
