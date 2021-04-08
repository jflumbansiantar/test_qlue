-- SQL
-- (Mysql) Given the table below:
-- create table assessments (
-- date dateTime,
-- username varchar(128),
-- score float
-- );
-- 1) Provide a mysql select statement to return the following resultset structure:
-- day; num_pos_scores; num_neg_scores

-- Where num_pos_scores and num_neg_scores are the total number of positive score rows, and
-- negative score rows in the table, for individual days between March 1st, 2011 and April 30th, 2011, both
-- days inclusive.
-- 2) Provide a mysql select statement that returns all the days between January 1st, 2011 and June 30th,
-- 2011, both days inclusive, where there were no negative scores.

create table assessments (
    date dateTime,
    username varchar(128),
    score float
);


--1
SELECT date as day
sum(score >= 0) as num_pos_scores
sum(score <= 0) as num_neg_scores
FROM assessments
WHERE date > '2011-03-01' and date < '2011-04-03'
GROUP BY username

--2 
SELECT date as day
FROM assessments
WHERE date > '2011-01-01' and date < '2011-06-30'
GROUP BY date
