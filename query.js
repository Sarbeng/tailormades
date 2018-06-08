
//query to enter information into tailor table.
insert into TAILORS values
('123','abena','bawa','bawaw@gmail.com','Adike Collections',
    (select card_number from credit_card),(select pin from credit_card),
(select mobileNumber from mobilemoney),(select network from mobilemoney));

//entering user data
insert into users values
('12','kwadwo','bawa','bawaka@gmail.com',
    (select card_number from credit_card),(select pin from credit_card),
(select mobileNumber from mobilemoney),(select network from mobilemoney));