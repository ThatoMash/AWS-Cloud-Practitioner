# Lab: Introduction to AWS Identity and Access Management (IAM)

## 📖 Project Overview
In this lab, I acted as a Cloud Administrator to manage access control for a business environment. I moved away from a "single login" approach to implement a secure, identity-driven system. My work focused on creating a custom password policy, organizing users into functional groups, and validating permissions to ensure the **Principle of Least Privilege**.

**![Picture Placeholder: Overview of IAM environment](path_to_picture_1)**

## 🎯 Lab Objectives
* I created and applied a custom IAM password policy.  
* I audited and explored pre-created IAM users and groups.  
* I inspected JSON-based IAM policies (Managed and Inline).  
* I implemented Role-Based Access Control (RBAC) by adding users to groups.  
* I validated security boundaries by testing service access as different IAM users.

---

## 🏗️ IAM Architecture & Business Scenario
I configured the environment to support specific job functions across three different users.

**![Picture Placeholder: IAM Users and Groups Diagram](path_to_picture_2)**

| User | Group Assignment | Permission Logic |
| :--- | :--- | :--- |
| **user-1** | `S3-Support` | Read-only access to Amazon S3 |
| **user-2** | `EC2-Support` | Read-only access to Amazon EC2 |
| **user-3** | `EC2-Admin` | View, Start, and Stop EC2 instances |

---

## 🛠️ Step-by-Step Implementation

### Task 1: Creating an Account Password Policy
I strengthened the account security by implementing a custom password policy.

* I updated the minimum password length to **10 characters**.  
**![Picture Placeholder: Updated minimum password length](path_to_picture_3)**
* I required at least one uppercase letter, one lowercase letter, one number, and one non-alphanumeric character.  
**![Picture Placeholder: Password complexity requirements](path_to_picture_4)**
* I enabled password expiration for **90 days** and prevented password reuse.  
**![Picture Placeholder: Enabled password expiration and reuse prevention](path_to_picture_5)**

### Task 2: Exploring Users and User Groups
I audited the existing identities to understand the baseline permissions.

* I verified that `user-1`, `user-2`, and `user-3` initially had no permissions.  
**![Picture Placeholder: Verified users have no permissions](path_to_picture_6)**
* I inspected the `EC2-Support` group’s **Managed Policy** (`AmazonEC2ReadOnlyAccess`).  
**![Picture Placeholder: Inspected EC2-Support managed policy](path_to_picture_7)**
* I analyzed the `EC2-Admin` group's **Inline Policy** (`EC2-Admin-Policy`) which specifically allows `ec2:StartInstances` and `ec2:StopInstances`.  
**![Picture Placeholder: Inspected EC2-Admin inline policy](path_to_picture_8)**

### Task 3: Adding Users to User Groups
I assigned users to their respective groups so they would inherit the necessary permissions.

* I added `user-1` to the `S3-Support` group.  
**![Picture Placeholder: Added user-1 to S3-Support group](path_to_picture_9)**
* I added `user-2` to the `EC2-Support` group.  
**![Picture Placeholder: Added user-2 to EC2-Support group](path_to_picture_10)**
* I added `user-3` to the `EC2-Admin` group.  
**![Picture Placeholder: Added user-3 to EC2-Admin group](path_to_picture_11)**

### Task 4: Signing In and Testing User Permissions
I used the IAM Sign-in URL to log in as each user and verify the "Blast Radius" of their permissions.

* **Testing user-1:** I confirmed I could view S3 buckets but received an **"Access Denied"** error when trying to view EC2 instances.  
**![Picture Placeholder: user-1 S3 access screenshot](path_to_picture_12)**
* **Testing user-2:** I verified I could view EC2 instances, but when I tried to stop one, the action was **Denied**.  
**![Picture Placeholder: user-2 EC2 read-only access screenshot](path_to_picture_13)**
* **Testing user-3:** As the administrator, I successfully performed the "Stop Instance" action.  
**![Picture Placeholder: user-3 EC2 admin action screenshot](path_to_picture_14)**

---

## 💡 Key Takeaways
* **Efficiency:** I learned that managing permissions through **Groups** is much faster than managing individual users.  
**![Picture Placeholder: Efficiency takeaway screenshot](path_to_picture_15)**
* **Least Privilege:** I proved that restricting access prevents unauthorized changes to infrastructure.  
**![Picture Placeholder: Least privilege takeaway screenshot](path_to_picture_16)**
* **Auditability:** I practiced reading JSON policies to understand the exact API actions allowed in the environment.  
**![Picture Placeholder: Auditability takeaway screenshot](path_to_picture_17)**

