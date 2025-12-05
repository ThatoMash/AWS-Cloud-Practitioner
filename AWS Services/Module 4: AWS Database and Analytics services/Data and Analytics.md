# AWS Cloud Practitioner  Database Services Study Notes

This repository contains study notes and visual aids regarding Amazon Web Services (AWS) Database offerings, covering Relational, NoSQL, and specialized database services.

## 1. What is a Database?
A database is a complex data store designed to hold structured and semi-structured data using formal design models. They are generally categorized into:
- **Relational Databases:** Structured data representing tabular data (rows and columns).
- **Non-relational Databases:** Semi-structured data that may not resemble tabular data.


<img width="1920" height="1080" alt="#1 What is a Database" src="https://github.com/user-attachments/assets/b8d5b7b6-0b8e-4403-8a7b-bcd6e89f9bd2" />

---

## 2. What is a Data Warehouse?
Unlike standard databases used for transactions, a **Data Warehouse** is designed for **analytic workloads (OLAP)**.
- They are generally **column-oriented** to support fast aggregation (totals, averages).
- They store vast amounts of historical data (terabytes/petabytes).
- They are accessed less frequently (e.g., for daily reporting) rather than real-time user transactions.


<img width="1920" height="1080" alt="#2 What is data warehouse" src="https://github.com/user-attachments/assets/4aac3e6f-7aa6-4a96-8f3d-18b3294da26e" />

---

## 3. Relational Database Services (RDS)
Relational Database Service (RDS) supports standard SQL engines designed for Online Transactional Processing (OLTP).

**Supported Engines:**
- **MySQL:** Open-source, very popular.
- **MariaDB:** Fork of MySQL.
- **Postgres (PostgreSQL):** Feature-rich open-source engine.
- **Oracle & Microsoft SQL Server:** Enterprise, proprietary databases (require licensing).
- **Amazon Aurora:** AWS-native fully managed database (MySQL/Postgres compatible) that is 5x faster than standard MySQL. Also available as **Aurora Serverless**.


<img width="1920" height="1080" alt="#6 Relational Database Services" src="https://github.com/user-attachments/assets/f2483d85-b4ee-4775-952e-af24c0073570" />


---

## 4. NoSQL Concepts: Key/Value & Document Stores

### Key/Value Stores
A Key/Value store is a simple NoSQL database that stores a unique key alongside a value. They are known for being "dumb and fast"—lacking complex relationship features but offering incredible scalability.


<img width="1920" height="1080" alt="#3 What is key value store" src="https://github.com/user-attachments/assets/65994b47-4426-4df0-a53e-be1cdbd86bc0" />


### Document Stores
A Document store stores data in "documents" (usually JSON or XML) rather than rows.
- **RDBMS:** Table -> Row -> Column
- **Document Store:** Collection -> Document -> Key/Value Field


<img width="1920" height="1080" alt="#4 What is document database" src="https://github.com/user-attachments/assets/0701fdf7-4abd-4bef-b8fd-c56e9f906f2c" />

---

## 5. AWS NoSQL Database Services
AWS provides specific services for NoSQL workloads:

- **Amazon DynamoDB:** A serverless Key/Value and Document database. It is AWS's flagship database for massive scale and single-digit millisecond latency.
- **Amazon DocumentDB:** A fully managed document database that is **MongoDB compatible**.
- **Amazon Keyspaces:** A fully managed **Apache Cassandra** compatible database.



<img width="1920" height="1080" alt="#5 NoSQL Database Services" src="https://github.com/user-attachments/assets/284eb5bf-c037-4592-ac11-6545ccb52828" />

---

## 6. Other Specialized Database Services
AWS offers "purpose-built" databases for specific use cases:

- **Amazon Redshift:** A petabyte-scale **Data Warehouse** for analytics.
- **Amazon ElastiCache:** In-memory caching service (supports **Redis** and **Memcached**) to speed up applications.
- **Amazon Neptune:** A **Graph database** for highly connected datasets (social networks, fraud detection).
- **Amazon Timestream:** A **Time-series database** for IoT and operational tracking.
- **Amazon QLDB:** A **Ledger database** for immutable, cryptographically verifiable transaction logs.
- **DMS (Database Migration Service):** Used to migrate on-premise databases to AWS with minimal downtime.


<img width="1920" height="1080" alt="#7 Other Database Services" src="https://github.com/user-attachments/assets/8101df19-6732-45a5-ac7a-9498b23ddd32" />
