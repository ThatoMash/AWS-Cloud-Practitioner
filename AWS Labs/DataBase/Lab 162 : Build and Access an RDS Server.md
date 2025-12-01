# Challenge Lab – Build Your DB Server and Interact With Your DB

This lab demonstrates how to **launch**, **configure**, and **interact** with an AWS-managed relational database using Amazon RDS.  
Amazon RDS simplifies the setup, operation, and scaling of relational databases while handling administrative tasks, allowing you to focus on your applications.

---

## Lab Objectives

After completing this lab, you will be able to:

- Create an Amazon RDS instance  
- Use the Amazon RDS Query Editor to query data  
- Create tables and insert sample data  
- Perform SQL queries including joins

**Duration:** ~45 minutes

---

## 1. Launch an Amazon RDS DB Instance

Steps completed:

- Chose Amazon Aurora or MySQL as the database engine  
- Template: Dev/Test or Free tier  
- DB instance size: Burstable classes (db.t3.micro – db.t3.medium)  
- Storage: General Purpose SSD (gp2) up to 100 GB  
- Security group: Allowed LinuxServer to connect to the RDS instance  
- Downloaded PEM (Linux/macOS) or PPK (Windows) for connection  

<img width="1337" height="546" alt="image" src="https://github.com/user-attachments/assets/1eb6d33e-710a-4b90-83aa-ce419558e697" />

<img width="1329" height="555" alt="image" src="https://github.com/user-attachments/assets/3f361cc3-37c3-4e67-a45f-ce5dcd39563d" />

<img width="1334" height="562" alt="image" src="https://github.com/user-attachments/assets/97fdc889-d508-432c-b756-ce054b04c6ea" />

<img width="1348" height="559" alt="image" src="https://github.com/user-attachments/assets/69d6ccd6-7c54-472d-a0e0-03076050df91" />



 
*TODO: Add screenshot of RDS instance creation*

---

## 2. Connect to the LinuxServer

- SSH into the LinuxServer using the downloaded key and server address  
- Installed MySQL client  
- Connected to the RDS instance using the DB credentials  

<img width="661" height="411" alt="image" src="https://github.com/user-attachments/assets/865a10ee-8c5a-4c27-b4ef-b8b2d52f3c42" />
  
<img width="668" height="692" alt="image" src="https://github.com/user-attachments/assets/b49dd961-487e-403c-a047-4bb13d76639e" />


## 3. Create Tables and Insert Sample Data

### 3.1 Table: RESTART

Columns:

- Student ID (Number)  
- Student Name  
- Restart City  
- Graduation Date (DateTime)  

![RESTART Table Creation](screenshots/restart_table_creation.png)  
*TODO: Add screenshot of RESTART table creation*

Inserted 10 sample rows:  

![RESTART Table Data](screenshots/restart_table_data.png)  
*TODO: Add screenshot of inserted data in RESTART table*

Selected all rows:  

![RESTART Table Query Results](screenshots/restart_table_query.png)  
*TODO: Add screenshot of SELECT query results for RESTART table*

---

### 3.2 Table: CLOUD_PRACTITIONER

Columns:

- Student ID (Number)  
- Certification Date (DateTime)  

![CLOUD_PRACTITIONER Table Creation](screenshots/cloud_practitioner_table_creation.png)  
*TODO: Add screenshot of CLOUD_PRACTITIONER table creation*

Inserted 5 sample rows:  

![CLOUD_PRACTITIONER Table Data](screenshots/cloud_practitioner_table_data.png)  
*TODO: Add screenshot of inserted data in CLOUD_PRACTITIONER table*

Selected all rows:  

![CLOUD_PRACTITIONER Table Query Results](screenshots/cloud_practitioner_table_query.png)  
*TODO: Add screenshot of SELECT query results for CLOUD_PRACTITIONER table*

---

## 4. Perform Inner Join

Query:

```sql
SELECT RESTART.StudentID, RESTART.StudentName, RESTART.RestartCity, RESTART.GraduationDate, 
CLOUD_PRACTITIONER.CertificationDate
FROM RESTART
INNER JOIN CLOUD_PRACTITIONER
ON RESTART.StudentID = CLOUD_PRACTITIONER.StudentID;
```


# Summary

In this lab, you successfully:

Created an Amazon RDS instance with MySQL/Aurora

Connected securely via LinuxServer

Created tables and inserted sample data

Queried data using SQL, including an inner join

Learned core relational database operations on AWS

Reinforced skills in managing and querying cloud-based databases

This lab provides a strong foundation for working with RDS and performing database operations in the cloud.
