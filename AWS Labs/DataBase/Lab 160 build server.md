# AWS RDS: Build Your DB Server and Interact With Your DB Using an App

![AWS](https://img.shields.io/badge/AWS-RDS-orange?style=for-the-badge&logo=amazon-aws)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql)
![EC2](https://img.shields.io/badge/EC2-Web_Server-green?style=for-the-badge&logo=amazon-aws)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This hands-on lab demonstrates the implementation of a highly available, AWS-managed relational database solution using Amazon RDS. The project involves configuring a Multi-AZ MySQL database instance, establishing secure connectivity between a web application and the database, and deploying a fully functional address book application that persists data across multiple Availability Zones.

## 🎯 Objectives

By completing this lab, the following capabilities were demonstrated:

- ✅ Launch an Amazon RDS DB instance with Multi-AZ high availability
- ✅ Configure security groups for database access control
- ✅ Create DB subnet groups for multi-AZ deployment
- ✅ Establish secure connectivity between EC2 web server and RDS instance
- ✅ Deploy and configure a web application to interact with RDS database
- ✅ Test database operations (Create, Read, Update, Delete) through web interface

## ⏱️ Duration

**Approximately 45 minutes**

## 🏗️ Architecture Overview

### Initial Infrastructure
```
┌─────────────────────────────────────────┐
│            Lab VPC                      │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     Public Subnet               │   │
│  │                                 │   │
│  │   ┌─────────────────────┐      │   │
│  │   │   EC2 Web Server    │      │   │
│  │   │   (Web Application) │      │   │
│  │   └─────────────────────┘      │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     Private Subnets             │   │
│  │     (Empty - Ready for RDS)     │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Final Infrastructure (After Lab Completion)
```
┌────────────────────────────────────────────────────────────────┐
│                        Lab VPC                                 │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               Public Subnet                              │  │
│  │                                                          │  │
│  │   ┌─────────────────────────────────────┐              │  │
│  │   │       EC2 Web Server                │              │  │
│  │   │   - Web Application (PHP)           │              │  │
│  │   │   - Address Book Interface          │◄─────────┐   │  │
│  │   └─────────────────────────────────────┘          │   │  │
│  └──────────────────────────────────────────────────────│───┘  │
│                                                         │       │
│                                              Security Group     │
│                                              (Port 3306)        │
│  ┌─────────────────────────┐    ┌──────────────────────│────┐  │
│  │   Private Subnet 1      │    │   Private Subnet 2   ▼   │  │
│  │   (AZ-1)                │    │   (AZ-2)                 │  │
│  │                         │    │                          │  │
│  │  ┌──────────────────┐   │    │  ┌──────────────────┐   │  │
│  │  │  RDS Primary     │   │    │  │  RDS Standby     │   │  │
│  │  │  MySQL Instance  │◄──┼────┼──┤  MySQL Instance  │   │  │
│  │  │  (Active)        │   │    │  │  (Sync Replica)  │   │  │
│  │  └──────────────────┘   │    │  └──────────────────┘   │  │
│  │  10.0.1.0/24            │    │  10.0.3.0/24            │  │
│  └─────────────────────────┘    └──────────────────────────┘  │
│                                                                 │
│         Multi-AZ Deployment with Automatic Failover            │
└────────────────────────────────────────────────────────────────┘
```

## 📸 Screenshots Documentation

### Task 1: Security Group Configuration

**Screenshot 1: Create DB Security Group**
- *Caption: Creating DB Security Group with name and description in Lab VPC*
- File: `01-create-db-security-group.png`

**Screenshot 2: Inbound Rules Configuration**
- *Caption: Adding MySQL/Aurora inbound rule (port 3306) with source as Web Security Group*
- File: `02-db-security-group-inbound-rules.png`

**Screenshot 3: DB Security Group Created**
- *Caption: Successfully created DB Security Group with configured rules*
- File: `03-db-security-group-created.png`

### Task 2: DB Subnet Group

**Screenshot 4: Create DB Subnet Group**
- *Caption: Creating DB Subnet Group with Lab VPC selection*
- File: `04-create-db-subnet-group.png`

**Screenshot 5: Availability Zones Selection**
- *Caption: Selecting two Availability Zones for high availability*
- File: `05-select-availability-zones.png`

**Screenshot 6: Subnet Selection**
- *Caption: Selecting Private Subnet 1 (10.0.1.0/24) and Private Subnet 2 (10.0.3.0/24)*
- File: `06-select-subnets.png`

**Screenshot 7: DB Subnet Group Created**
- *Caption: Successfully created DB Subnet Group with both private subnets*
- File: `07-db-subnet-group-created.png`

### Task 3: RDS Instance Creation

**Screenshot 8: Database Creation - Engine Options**
- *Caption: Selecting Standard Create with MySQL engine and latest version*
- File: `08-rds-engine-selection.png`

**Screenshot 9: Template and Availability Selection**
- *Caption: Choosing Dev/Test template with Multi-AZ DB Instance for high availability*
- File: `09-rds-template-multi-az.png`

**Screenshot 10: Database Settings**
- *Caption: Configuring DB instance identifier (lab-db) and master credentials*
- File: `10-rds-db-settings.png`

**Screenshot 11: Instance Configuration**
- *Caption: Selecting Burstable classes (db.t3.medium) and General Purpose SSD storage*
- File: `11-rds-instance-configuration.png`

**Screenshot 12: Connectivity Settings**
- *Caption: Configuring Lab VPC and DB Security Group for database connectivity*
- File: `12-rds-connectivity-settings.png`

**Screenshot 13: Additional Configuration**
- *Caption: Setting initial database name (lab), disabling Enhanced monitoring and automated backups*
- File: `13-rds-additional-configuration.png`

**Screenshot 14: Database Creation In Progress**
- *Caption: RDS database creation initiated with "Creating" status*
- File: `14-rds-creation-in-progress.png`

**Screenshot 15: Database Available**
- *Caption: RDS instance status showing "Available" with Multi-AZ deployment*
- File: `15-rds-database-available.png`

**Screenshot 16: Database Endpoint**
- *Caption: Connectivity & Security section showing database endpoint URL*
- File: `16-rds-endpoint.png`

### Task 4: Web Application Integration

**Screenshot 17: Web Application Home Page**
- *Caption: Web application displaying EC2 instance information*
- File: `17-web-app-home-page.png`

**Screenshot 18: RDS Configuration Page**
- *Caption: RDS configuration interface for database connection setup*
- File: `18-rds-configuration-page.png`

**Screenshot 19: Database Connection Form**
- *Caption: Entering endpoint, database name, username, and password*
- File: `19-database-connection-form.png`

**Screenshot 20: Connection Success Message**
- *Caption: Message confirming database connection and data initialization*
- File: `20-connection-success-message.png`

**Screenshot 21: Address Book Application**
- *Caption: Fully functional Address Book interface connected to RDS database*
- File: `21-address-book-interface.png`

**Screenshot 22: Adding New Contact**
- *Caption: Demonstrating CREATE operation - adding new contact to database*
- File: `22-adding-new-contact.png`

**Screenshot 23: Contact List with Data**
- *Caption: Displaying multiple contacts stored in RDS database (READ operation)*
- File: `23-contact-list-display.png`

**Screenshot 24: Editing Contact**
- *Caption: Demonstrating UPDATE operation - editing existing contact information*
- File: `24-editing-contact.png`

**Screenshot 25: Deleting Contact**
- *Caption: Demonstrating DELETE operation - removing contact from database*
- File: `25-deleting-contact.png`

**Screenshot 26: Final Architecture Diagram**
- *Caption: Complete infrastructure showing EC2 web server connected to Multi-AZ RDS database*
- File: `26-final-architecture.png`

## 🛠️ Technologies Used

- **Amazon RDS** - Relational Database Service (Multi-AZ MySQL)
- **Amazon EC2** - Web server hosting the application
- **Amazon VPC** - Virtual Private Cloud for network isolation
- **MySQL** - Relational database engine
- **Security Groups** - Network access control
- **PHP** - Web application backend
- **Multi-AZ Deployment** - High availability and automatic failover

## 📝 Detailed Implementation

### Task 1: Security Group Configuration

```yaml
Security Group Name: DB Security Group
Description: Permit access from Web Security Group
VPC: Lab VPC

Inbound Rules:
  - Type: MySQL/Aurora
  - Port: 3306
  - Source: Web Security Group
  - Description: Database access from web tier
```

**Purpose**: Creates a security group that allows the web server to communicate with the RDS database on port 3306 (MySQL default port).

### Task 2: DB Subnet Group

```yaml
DB Subnet Group Name: DB Subnet Group
Description: DB Subnet Group
VPC: Lab VPC

Availability Zones: 2
Subnets:
  - Private Subnet 1: 10.0.1.0/24 (AZ-1)
  - Private Subnet 2: 10.0.3.0/24 (AZ-2)
```

**Purpose**: Defines which subnets RDS can use for the database deployment. Multi-AZ requires subnets in at least two Availability Zones.

### Task 3: RDS Instance Configuration

```yaml
Database Engine: MySQL (Latest Version)
Template: Dev/Test
Deployment: Multi-AZ DB Instance

Instance Specifications:
  DB Instance Identifier: lab-db
  Master Username: main
  Master Password: lab-password
  
Instance Class:
  Type: Burstable classes (db.t3.medium)
  
Storage:
  Type: General Purpose SSD (gp2)
  
Networking:
  VPC: Lab VPC
  Subnet Group: DB Subnet Group
  Security Group: DB Security Group
  Public Access: No
  
Database:
  Initial Database Name: lab
  
Configuration:
  Enhanced Monitoring: Disabled
  Automated Backups: Disabled (for lab purposes)
```

### Task 4: Application Configuration

```
Application URL: http://[WebServer-IP]

Database Connection Parameters:
  Endpoint: lab-db.cggq8lhnxvnv.us-west-2.rds.amazonaws.com
  Database: lab
  Username: main
  Password: lab-password
  Port: 3306 (default)
```

## 🔒 Security Implementation

### Network Security
- **Private Subnets**: RDS instances deployed in private subnets with no direct internet access
- **Security Group Rules**: Restricted access only from Web Security Group on port 3306
- **VPC Isolation**: Database isolated within Lab VPC

### Access Control
- **Database Authentication**: Username/password authentication
- **Principle of Least Privilege**: Security group allows only necessary traffic
- **Multi-Layer Security**: VPC, subnet, and security group protection

## 🎯 High Availability Features

### Multi-AZ Deployment
- **Primary Instance**: Active database in Availability Zone 1
- **Standby Instance**: Synchronous replica in Availability Zone 2
- **Automatic Failover**: RDS automatically fails over to standby if primary fails
- **Data Replication**: Synchronous replication ensures zero data loss
- **Enhanced Durability**: Protects against AZ-level failures

### Benefits Demonstrated
- ✅ High availability architecture
- ✅ Automatic failover capability
- ✅ Zero data loss protection
- ✅ Maintenance flexibility (upgrades on standby first)

## 🧪 Testing & Validation

### Database Operations Tested

1. **CREATE Operation**
   - Added new contacts through web interface
   - Verified data persistence in RDS

2. **READ Operation**
   - Retrieved and displayed contact list
   - Confirmed data consistency

3. **UPDATE Operation**
   - Modified existing contact information
   - Validated changes in database

4. **DELETE Operation**
   - Removed contacts from database
   - Confirmed successful deletion

### Validation Checklist
- ✅ RDS instance successfully created with Multi-AZ
- ✅ Database endpoint accessible from web server
- ✅ Security group rules working correctly
- ✅ Web application successfully connected to database
- ✅ All CRUD operations functioning properly
- ✅ Data persisting across sessions
- ✅ Multi-AZ replica
