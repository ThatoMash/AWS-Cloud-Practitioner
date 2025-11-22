# Challenge Lab: Build Your DB Server and Interact With Your DB

![AWS](https://img.shields.io/badge/AWS-RDS-orange?style=for-the-badge&logo=amazon-aws)
![Database](https://img.shields.io/badge/Database-MySQL-blue?style=for-the-badge&logo=mysql)
![SQL](https://img.shields.io/badge/SQL-Queries-green?style=for-the-badge&logo=postgresql)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Lab Overview

This challenge lab demonstrates creating, configuring, and interacting with an Amazon RDS database instance. You'll set up a managed MySQL database, configure security, connect from an EC2 instance, and execute SQL queries.

## 🎯 Objectives

- ✅ Create an Amazon RDS database instance
- ✅ Configure security groups for database access
- ✅ Connect to the database using MySQL client
- ✅ Execute SQL statements (CREATE, INSERT, SELECT, UPDATE, DELETE)

## ⏱️ Duration

**Approximately 30-45 minutes**

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│             Lab VPC                         │
│                                             │
│  ┌────────────────┐      ┌──────────────┐ │
│  │  EC2 Instance  │──────│ RDS MySQL DB │ │
│  │  (SQL Client)  │ 3306 │  (Private)   │ │
│  └────────────────┘      └──────────────┘ │
└─────────────────────────────────────────────┘
```

## 📸 Screenshots

### 1. RDS Instance Creation
**Screenshot 1: RDS Configuration & Instance Details**
- Shows: Engine selection (MySQL), instance identifier, master credentials, instance class (db.t3.micro), storage settings (20GB gp2), VPC/subnet configuration, and "Create database" button
- File: `01-rds-instance-creation.png`

This single screenshot captures the complete RDS setup page including engine type, credentials, instance size, storage, and network configuration before clicking create.

---

### 2. Security Group Configuration
**Screenshot 2: Security Group Inbound Rules**
- Shows: Security group with inbound rules allowing MySQL/Aurora (port 3306) from EC2 security group and optionally from your IP address
- File: `02-security-group-rules.png`

This screenshot shows the configured security group with all necessary inbound rules to allow database access from authorized sources.

---

### 3. Database Connection
**Screenshot 3: Successful Database Connection**
- Shows: Terminal/console with MySQL connection command, password prompt, successful connection message, and MySQL prompt (mysql>)
- File: `03-database-connection.png`

This screenshot demonstrates the complete connection process from command execution to successful login to the RDS instance.

---

### 4. SQL Operations
**Screenshot 4: SQL Query Execution & Results**
- Shows: Complete sequence of commands - CREATE DATABASE, USE database, CREATE TABLE, INSERT statements, and SELECT query with results displaying user records
- File: `04-sql-queries-results.png`

This single screenshot captures the entire SQL workflow from database creation through data insertion and retrieval.

---

## 🛠️ Implementation Details

### RDS Configuration
```yaml
Engine: MySQL 8.0
Instance: db.t3.micro (1 GB RAM)
Storage: 20 GB General Purpose SSD (gp2)
VPC: Lab VPC (Private Subnet)
Master Username: admin
Master Password: [Your secure password]
Initial Database: labdb
```

### Security Group Rules
```yaml
Inbound Rule 1:
  Type: MySQL/Aurora
  Port: 3306
  Source: EC2 Security Group ID
  Description: Allow EC2 access

Inbound Rule 2 (Optional):
  Type: MySQL/Aurora
  Port: 3306
  Source: My IP
  Description: Allow local access
```

### Connection Command
```bash
# Install MySQL client (if needed)
sudo yum install mysql -y

# Connect to RDS
mysql -h labdb.xxxxx.rds.amazonaws.com -u admin -p
```

### SQL Queries Executed
```sql
-- Create and use database
CREATE DATABASE labdb;
USE labdb;

-- Create table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

-- Insert data
INSERT INTO users (name, email) VALUES 
  ('John Doe', 'john@example.com'),
  ('Jane Smith', 'jane@example.com');

-- Query data
SELECT * FROM users;

-- Update data
UPDATE users SET email = 'john.new@example.com' WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 2;
```

## ✅ Lab Summary

**Achievements:**
- ✅ Created RDS MySQL instance in private subnet
- ✅ Configured security group with port 3306 access
- ✅ Successfully connected from EC2 instance
- ✅ Executed complete CRUD operations
- ✅ Verified data persistence and retrieval

**Skills Demonstrated:**
- Amazon RDS configuration and management
- Network security and access control
- Database connectivity from compute resources
- SQL query execution and database operations
- AWS best practices for managed databases

## 💡 Key Learnings

**RDS Benefits:**
- Automated backups and patching
- Multi-AZ deployments for high availability
- Scalable compute and storage
- Built-in monitoring and metrics

**Security Best Practices:**
- Deploy in private subnets (no public access)
- Use security groups for access control
- Strong passwords and credential management
- Enable encryption at rest and in transit

**Database Operations:**
- DDL: CREATE, ALTER, DROP
- DML: INSERT, UPDATE, DELETE
- DQL: SELECT with filtering and ordering
- Transaction management for data integrity



---



---

