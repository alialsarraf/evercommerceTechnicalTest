// Other approach is creating a test email address in Gmail and using the Gmail NodeJS API to be able 
// to login to the test email address (via api) and make sure the email notification received
// with this, we might need to build our custom polling system to wait for around n second of time (n will be the time, possibly between 10 to 30 sec)
// depending on how fast is our email notification is setup and our desire accepted waiting time. This can be a cause of flakiness, if the 
// system is under heavy load. With my work in Accordo, we found such tests, helps find a lot of performance issues with our platfom and helped us
// improving our email notification speed.