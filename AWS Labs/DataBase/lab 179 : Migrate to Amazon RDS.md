# AWS RDS Migration Lab – Café Web Application

## Overview
This lab demonstrates the migration of a **local database** to a **fully managed Amazon RDS (Relational Database Service) MariaDB instance**. During this exercise, I migrated the café web application database from a self-managed EC2 instance to a managed RDS instance, configured the necessary network and security components, and validated the application’s functionality after migration.

Through this hands-on experience, I learned how to **design and deploy secure, highly available, and scalable database environments** in AWS, while also understanding **data migration, monitoring, and connectivity best practices**.

---

## Lab Architecture

### Starting Architecture
Initially, the café web application ran on a **LAMP EC2 instance** (Linux, Apache, MySQL, PHP) in a **public subnet**, with a CLI Host for administration. Both the application and database were hosted on the same instance.

![Starting Architecture Placeholder](./images/rds-start-architecture.png)

### Final Architecture
After the migration, the **database was moved to Amazon RDS**, deployed in **private subnets** across multiple Availability Zones. The EC2 instance now connects to the RDS instance securely via a dedicated security group.

![Final Architecture Placeholder](./images/rds-final-architecture.png)

---

## Lab Tasks

### 1️⃣ Generating Data on the Café Website
Before migrating the database, I generated sample order data on the café website. By placing several orders, I created realistic data in the local MySQL database to use for migration.

**Screenshot Placeholder**  
![Cafe Orders Placeholder](./images/cafe-orders.png)

---

### 2️⃣ Creating the Amazon RDS Instance via AWS CLI
Using **EC2 Instance Connect**, I accessed the CLI Host to run AWS CLI commands for provisioning RDS.  

**Steps included:**
- Configuring the AWS CLI with provided credentials
- Creating prerequisite components:
  - `CafeDatabaseSG` security group
  - Two private subnets in separate Availability Zones
  - `CafeDB Subnet Group` including both private subnets
- Launching the RDS MariaDB instance (`CafeDBInstance`) with:
  - Engine: MariaDB 10.5.13
  - Instance class: db.t3.micro
  - Allocated storage: 20 GB
  - Security group: CafeDatabaseSG
  - Private subnets for high availability

**Screenshot Placeholder**  
![RDS Creation Placeholder](./images/rds-creation.png)

---

### 3️⃣ Migrating Application Data to RDS
I performed a **data migration** from the local EC2 database to the new RDS instance:

1. Connected to the Café EC2 instance via SSH.
2. Exported the local database using `mysqldump`:
   ```bash
   mysqldump --user=root --password='Re:Start!9' --databases cafe_db --add-drop-database > cafedb-backup.sql
